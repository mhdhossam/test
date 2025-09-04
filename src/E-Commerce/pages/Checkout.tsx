import "./Checkout.css";
import UserInfo from "../component/checkout/UserInfo";
import OrderSummary from "../component/checkout/OrderSummary";

const Checkout: React.FC = () => {
  return (
    <div className="container checkout-container">
      <UserInfo />
      <OrderSummary />
    </div>
  );
};

export default Checkout;
