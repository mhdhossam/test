import React from "react";
import { useCart } from "../../store/Store";
import "./OrderSummary.css";



interface Product {
  id: number;
  image: string;
  title: string;
  quantity: number;
  price: number;
}

const OrderSummary: React.FC = () => {
  const rawCart = useCart(); // Assuming useCart() returns RawProduct[] or undefined
  const cart: Product[] = Array.isArray(rawCart)
    ? rawCart.map((item) => ({
        id: typeof item.id === "string" ? parseInt(item.id, 10) : item.id,
        title: item.title || "Unknown Product",
        price: item.price || 0,
        quantity: item.quantity || 1, // Default quantity to 1
        image: item.image || "/default/image/path.png", // Default image path
      }))
    : []; // Fallback to an empty array if useCart returns undefined

  const allSoloProducts = cart.map((product) => (
    <SoloBill product={product} key={product.id} />
  ));

  const totalPrice = cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

  if (cart.length === 0) {
    return (
      <div className="order-summary_container">
        <h3 className="order-s">Order Summary</h3>
        <p className="empty-cart">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="order-summary_container">
      <h3 className="order-s">Order Summary</h3>
      <div className="order-summary">{allSoloProducts}</div>
      <div className="order-total solo-bill">
        <p className="total-order">Total</p>
        <span>{totalPrice.toFixed(2)} EGP</span>
      </div>
    </div>
  );
};

interface SoloBillProps {
  product: Product;
}

const SoloBill: React.FC<SoloBillProps> = ({ product }) => {
  return (
    <div className="solo-bill">
      <div className="cart-product">
        <img
        crossOrigin="anonymous"
          src={product.image}
          alt={product.title}
          className="cart-product-image"
        />
        <div className="cart-product_info">
          <h3>{product.title}</h3>
          <div className="cart-product_details">
            <p>Quantity: {product.quantity}</p>
            <span>{(product.quantity * product.price).toFixed(2)} EGP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
