import React from "react";
import { useCartActions } from "../../store/Store";
import toast from "react-hot-toast";
import "./ProductView.css";
import { getUserType } from "../../utils/getUserType";

interface ProductData {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  image?: string;
  is_in_stock?: boolean;
}

interface ProductViewProps {
  productData: ProductData;
}

const ProductView: React.FC<ProductViewProps> = ({ productData }) => {
  const { addToCart } = useCartActions();
  // Get the user type
  const { userType } = getUserType(); // Destructure the userType

  // Check if productData is valid
  if (!productData || Object.keys(productData).length === 0) {
    return <p>Loading product details...</p>; // Placeholder while loading
  }

  function handleAddToCart() {
    addToCart({ ...productData, quantity: 1 });
    toast.success("Added to Cart");
  }

  return (
    <div className="product-container">
      <div className="product-img_wrapper">
        {productData.image ? (
          <img crossOrigin="anonymous" src={productData.image} alt={productData.title || "Product"} />
        ) : (
          <img src="/placeholder.jpg" alt="No image available" />
        )}
      </div>
      <div className="product-info">
        <h2 className="product-name">
          {productData.title || "Untitled Product"}
        </h2>
        <p className="product-price">{productData.price || "0.00"} EGP</p>
        <p className="product-description">
          {productData.description || "No description available"}
        </p>

        {/* Conditionally render the button for Customer */}
        {userType !== "Vendor" && (
          <button
            className="product-cart_btn"
            onClick={handleAddToCart}
            disabled={!productData.is_in_stock}
          >
            {productData.is_in_stock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductView;
