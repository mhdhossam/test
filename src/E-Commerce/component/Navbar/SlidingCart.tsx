import { ShoppingCart, X } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCartActions } from "../../store/Store";
import { useCart } from "../../store/Store";
import toast from "react-hot-toast";
import "./SlidingCart.css";
import { FC } from "react";

interface SlidingCartProps {
  toggleShowCart: () => void;
}

interface CartProduct {
  id: number | string;
  image?: string;
  title?: string;
  category?: string;
  quantity: number;
  price: number;
}

const SlidingCart: FC<SlidingCartProps> = ({ toggleShowCart }) => {
  const cart = useCart();
  const { addProductQuantity, removeFromCart, fetchCart } = useCartActions();

  useEffect(() => {
    fetchCart(); // Fetch cart on component mount
  }, [fetchCart]);

  console.log("Cart Data:", cart); // Debug cart data

  return (
    <div className="sliding-cart_container">
      <CartTop toggleShowCart={toggleShowCart} />
      <CartMain
        cart={cart}
        addProductQuantity={addProductQuantity}
        removeFromCart={removeFromCart}
      />
      <CartCheckOut cart={cart} toggleShowCart={toggleShowCart} />
    </div>
  );
};

interface CartTopProps {
  toggleShowCart: () => void;
}

const CartTop: FC<CartTopProps> = ({ toggleShowCart }) => {
  return (
    <div className="cart-top">
      <ShoppingCart size={22} />
      <h2>Your Shopping Cart</h2>
      <div className="close-shopping-cart" onClick={toggleShowCart}>
        <X size={22} />
      </div>
    </div>
  );
};

interface CartMainProps {
  cart: CartProduct[] | null;
  addProductQuantity: (id: number, quantity: number, price: number) => void;
  removeFromCart: (id: number) => void;
}

const CartMain: FC<CartMainProps> = ({
  cart,
  addProductQuantity,
  removeFromCart,
}) => {
  if (cart == null) {
    return (
      <div className="cart-main_container">
        <p style={{ textAlign: "center", fontSize: "1.6rem" }}>
          Your cart is empty :(
        </p>
      </div>
    );
  }

  return (
    <div className="cart-main_container">
      {cart.map((product) => (
        <CartProducts
          key={product.id}
          product={product}
          addProductQuantity={addProductQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

interface CartProductsProps {
  product: CartProduct;
  addProductQuantity: (id: number, quantity: number, price: number) => void;
  removeFromCart: (id: number) => void;
}

const CartProducts: FC<CartProductsProps> = ({
  product,
  addProductQuantity,
  removeFromCart,
}) => {
  function increaseQuantity() {
    console.log("Increasing quantity for:", product.id);
    addProductQuantity(Number(product.id), product.quantity + 1, product.price);
  }

  function decreaseQuantity() {
    console.log("Decreasing quantity for:", product.id);
    if (product.quantity > 1) {
      addProductQuantity(
        Number(product.id),
        product.quantity - 1,
        product.price
      );
    } else {
      removeFromCart(Number(product.id));
      toast.error("Removed from Cart");
    }
  }

  return (
    <div className="cart-product">
      <img crossOrigin="anonymous" src={product.image} alt={product.title || "Product Image"} />

      <div className="cart-product_info">
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p className="qty">
          Qty:
          <button className="qty-btn" onClick={increaseQuantity}>
            +
          </button>
          <span>{product.quantity}</span>
          <button className="qty-btn" onClick={decreaseQuantity}>
            -
          </button>
        </p>
      </div>
      <p className="cart-product_price">{product.price} EGP</p>
      <span
        className="cart-product_x"
        onClick={() => removeFromCart(Number(product.id))}
      >
        <X size={16} />
      </span>
    </div>
  );
};

interface CartCheckOutProps {
  cart: CartProduct[] | null;
  toggleShowCart: () => void;
}

const CartCheckOut: FC<CartCheckOutProps> = ({ cart, toggleShowCart }) => {
  let total_Price = 0;
  if (cart && Array.isArray(cart)) {
    for (let i = 0; i < cart.length; i++) {
      const current = cart[i];
      const itemTotal = (current.price || 0) * (current.quantity || 0);
      total_Price += itemTotal;
    }
  }

  return (
    <div className="cart-checkout_container">
      <h3>Checkout</h3>
      <p>{total_Price} EGP</p>
      <Link to="checkout" onClick={toggleShowCart}>
        Go to Checkout
      </Link>
    </div>
  );
};

export default SlidingCart;
