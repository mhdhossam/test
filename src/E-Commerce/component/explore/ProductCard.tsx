
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useCartActions } from "../../store/Store";
import { Heart } from "phosphor-react"; // Import Heart icon for Wishlist
import { getUserType } from "../../utils/getUserType"; // Import getUserType function
import "./ProductCard.css";
import { FC } from "react";
import { Product } from "../../store/Store";
// interface Product {
//   id: string | number;
//   title: string;
//   description?: string;
//   image?: string;
//   price: string | number;
// }

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart, addToWishlist } = useCartActions(); // Add wishlist action

  // Get user type using the getUserType function
  const { userType } = getUserType();

  // Handle Add to Cart
  function handleAddToCart() {
    addToCart(product);
    toast.success("Added to Cart");
  }

  // Handle Add to Wishlist
  function handleAddToWishlist() {
    addToWishlist(product);
    toast.success("Added to Wishlist");
  }

  return (
    <div className="product-card_wrapper">
      <Link to={`/product/${product.id}/`}>
        <div className="product-card_img">
          <img crossOrigin="anonymous"src={product?.image} alt={product.title} />
        </div>
      </Link>
      <div className="product-card_description">
        <h3>{product.title}</h3>
        <p>{product?.description}</p>
        <span className="product-card_bottom">
          {userType !== "Vendor" && (
            <button className="add-cart_btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          )}

          {userType !== "Vendor" && (
            <button className="wishlist_btn" onClick={handleAddToWishlist}>
              <Heart size={20} /> {/* Wishlist Icon */}
            </button>
          )}

          <b className="product-card_price">{product?.price}</b>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
