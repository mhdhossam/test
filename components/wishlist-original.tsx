"use client"

import type React from "react"
import { useEffect } from "react"
import { useWishlist, useWishlistActions, type Product } from "../store/Store"
import { Link } from "react-router-dom"
import "./Wishlist.css"
import "../component/explore/ProductCard.css"

// Define the Product interface to provide type safety
// interface Product {
//   id: string | number;
//   title: string | undefined;
//   description?: string;
//   price: number;
//   image?: string; // Add the image property
// }

// Define the WishlistItem interface to provide type safety

const Wishlist: React.FC = (): JSX.Element => {
  const API_BASE_URL2 = "https://daleel-back.zeeploy.xyz"
  const wishlist: Product[] = useWishlist() // Retrieve wishlist items from the store
  const { fetchWishlist, removeFromWishlist } = useWishlistActions() // Action to fetch and remove items

  useEffect(() => {
    fetchWishlist() // Fetch wishlist items on page load
  }, [fetchWishlist])
  //
  const handleRemove = (itemId: number): void => {
    removeFromWishlist(itemId)
  }

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-container empty">
        <h2>Your Wishlist is Empty</h2>
        <Link to="/explore/all" className="explore-link">
          Explore Products
        </Link>
      </div>
    )
  }

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      <div className="wishlist-card_wrapper">
        {wishlist.map((item) => (
          <div key={item.id} className="product-card_img">
            <Link to={`/product/${item.id}`} className="product-link">
              <img
                crossOrigin="anonymous"
                src={`${API_BASE_URL2}${item.image}` || "/default/image/path.png"} // Default image fallback
                alt={item.title || "Product Image"}
                className="wishlist-item-image"
              />
            </Link>
            <div className="product-card_description">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="price-remove">
                <div className="product-card_price">
                  <h4>{item.price} USD</h4>
                </div>
                <button className="remove-btn" onClick={() => handleRemove(Number(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
