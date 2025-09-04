import toast from "react-hot-toast";

const OrderFetch = async (): Promise<any | null> => {
  try {
    const response = await fetch(
      "https://daleel-back.zeeploy.xyz/api/orders/",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching active order:", errorData);
      toast.error(errorData.error || "Failed to fetch active order.");
      return null;
    }

    const data = await response.json();
    return data; // Returns the active order details
  } catch (error: unknown) {
    console.error("Error fetching active order:", error);
    toast.error("An unexpected error occurred.");
    return null;
  }
};

export default OrderFetch;
