import { useState } from "react";
import { useCart, useWishlist } from "../../store/Store"; // Import useWishlist
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Heart, User, SignOut } from "phosphor-react"; // Add Heart icon for Wishlist
import SlidingCart from "./SlidingCart";
import "./Navbar2.css";
import { logout } from "../../utils/Api";
import logo from "../../assets/images/logoFina2.png";
import { getUserType } from "../../utils/getUserType"; // Import getUserType function
import { FC } from "react";

type NavbarProps = object;

interface CartItem {
  quantity?: number;
}

const Navbar2: FC<NavbarProps> = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("accessToken") // Store the token
  );
  const { userType } = getUserType();

  // const navigate = useNavigate();

  function toggleShowCart() {
    setShowCart(!showCart);
  }

  async function handleLogout() {
    try {
      await logout();
      localStorage.removeItem("accessToken"); // Remove the token
      setIsAuthenticated(false);
      //navigate("/login");
    } catch (error) {
      console.error("Error during logout", error);
    }
    navigate("/home2");
  }

  return (
    <header className={`header-shop ${showCart ? "visible" : ""}`}>
      <Navigations
        toggleShowCart={toggleShowCart}
        isAuthenticated={isAuthenticated}
        handleLogout={handleLogout}
        userType={userType} // Pass the userType prop
      />
      <SlidingCart toggleShowCart={toggleShowCart} />
      <CartSliderOverlay />
    </header>
  );
};

interface CartButtonProps {
  toggleShowCart: () => void;
}

const CartButton: FC<CartButtonProps> = ({ toggleShowCart }) => {
  const cart = useCart() || []; // Ensure cart is an array

  // Safely calculate total quantity
  const totalCartQty = (cart && Array.isArray(cart) ? cart : []).reduce(
    (totalQty, current: CartItem) => {
      return totalQty + (current.quantity || 0);
    },
    0
  );

  return (
    <span onClick={toggleShowCart} className="cart-icon">
      <ShoppingCart size={22} />
      <div className="cart-counter">{totalCartQty}</div>
    </span>
  );
};

const WishlistButton: FC = () => {
  const wishlist = useWishlist(); // Replace with your state management hook or prop

  // Calculate total items in the list
  const totalListItems = (wishlist && Array.isArray(wishlist) ? wishlist : [])
    .length;

  return (
    <Link to="/wishlist" className="wishlist-icon">
      <Heart size={22} />
      {totalListItems > 0 && (
        <div className="wishlist-counter">{totalListItems}</div>
      )}
    </Link>
  );
};

interface NavigationsProps {
  toggleShowCart: () => void;
  isAuthenticated: boolean;
  handleLogout: () => void;
  userType: string;
}

const Navigations: FC<NavigationsProps> = ({
  toggleShowCart,
  isAuthenticated,
  handleLogout,
  userType,
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleOpenNavigation() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div
      className={` container nav-container-shop ${isNavOpen ? "nav-open" : ""}`}
    >
      <span className="brand-name">
        <Link to="/" className="brand-link">
          <img src={logo} alt="Daleel Logo" className="brand-logo" />
          Daleel
        </Link>
      </span>
      <ul className="nav-link_container-shop">
        <li className="nav-link-shop">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link-shop" : "nav-link-shop"
            }
            to="/home2"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-link-shop">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link-shop" : "nav-link-shop"
            }
            to="/category"
          >
            Categories
          </NavLink>
        </li>
        <li className="nav-link-shop">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active nav-link-shop" : "nav-link-shop"
            }
            to="/explore/all"
          >
            Explore All
          </NavLink>
        </li>
        {userType !== "Vendor" && (
          <li className="nav-link-shop">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link-shop" : "nav-link-shop"
              }
              to="/order"
            >
              Orders
            </NavLink>
          </li>
        )}
        {userType !== "Vendor" && (
          <li className="nav-link-shop">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link-shop" : "nav-link-shop"
              }
              to="/"
            >
              Courses
            </NavLink>
          </li>
        )}

        {userType === "Vendor" && (
          <li className="nav-link-shop">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link-shop" : "nav-link-shop"
              }
              to="/vendordashboard"
            >
              VendorDash
            </NavLink>
          </li>
        )}
      </ul>
      <div className="nav-secondary_btn" onClick={handleOpenNavigation}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav-secondary">
        {isAuthenticated ? (
          <div className="nav-action">
            <SignOut size={22} onClick={handleLogout} className="logout-icon" />
            <span className="logout-text" onClick={handleLogout}>
              Logout
            </span>
          </div>
        ) : (
          <div className="nav-action login-register-link">
            <User className="icon-user" size={22} />
            <Link to="/login" className="login-link">
              Login
            </Link>
            <span className="divider">/</span>
            <Link to="/register" className="register-link">
              Register
            </Link>
          </div>
        )}
        {userType === "Customer" && (
          <CartButton toggleShowCart={toggleShowCart} />
        )}

        {userType === "Customer" && <WishlistButton />}
      </div>
      <div className="nav-overlay"></div>
    </div>
  );
};

const CartSliderOverlay: FC = () => {
  return <div className="cart-slide_overlay"></div>;
};

export default Navbar2;
