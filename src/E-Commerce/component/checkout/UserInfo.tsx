import { useState, ChangeEvent } from "react";
import toast from "react-hot-toast";
import OrderFetch from "./OrderFetch";
import { getUserType } from "../../utils/getUserType"; // Import getUserType function
import "./UserInfo.css";
import { useNavigate } from "react-router-dom";

interface ShippingAddress {
  address: string;
  city: string;
  state: string;
  zip: string;
}


// Usage:
// Waits 1 second and navigates to '/order'

const UserInfo = () => {
  const navigate = useNavigate();
  const navigateAfterDelay = (url: string, delay: number = 1000): void => {
  setTimeout(() => {
    navigate(url);
  }, delay);
};
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("CASH");
  const { userId } = getUserType();

  // Handle input changes
  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  // Checkout function
  const handleCheckout = async () => {
    const activeOrder = await OrderFetch();
    if (
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.state ||
      !shippingAddress.zip
    ) {
      toast.error("Please fill out all shipping details.");
      return;
    }

    try {
      const response = await fetch(
        `https://daleel-back.zeeploy.xyz/api/checkout/${activeOrder[0]?.id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({
            user: userId,
            order: activeOrder[0]?.id,
            payment_method: paymentMethod,
            shipping_address: `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.state}, ${shippingAddress.zip}`,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.error || "Checkout failed.");
        return;
      }

      await response.json();
      toast.success("Checkout successful!");
      
      navigateAfterDelay('/order'); 
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred during checkout.");
    }
  };

  return (
    <div className="user-info_container">
      <h2>Checkout</h2>
      <form>
        <h3>Shipping Address</h3>
        <div className="shipping-address_wrapper">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingAddress.address}
            onChange={handleAddressChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingAddress.city}
            onChange={handleAddressChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={shippingAddress.state}
            onChange={handleAddressChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            value={shippingAddress.zip}
            onChange={handleAddressChange}
            required
          />
        </div>

        <h3 className="payment-title">Payment Method</h3>
        <select
          className="payment-method-select"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <option value="CASH">Cash on Delivery</option>
          <option value="INSTAPAY">InstaPay</option>
        </select>

        <button type="button" className="checkout-btn" onClick={handleCheckout}>
          Complete Checkout
        </button>
      </form>
    </div>
  );
};

export default UserInfo;
