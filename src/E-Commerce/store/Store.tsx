import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const API_BASE_URL = "https://daleel-back.zeeploy.xyz/api";
const API_BASE_URL2 = "https://daleel-back.zeeploy.xyz"; // Backend API Base URL

// Types

interface CartProduct extends Product {
  category?: string;
  image?: string;
}

// Removed WishlistProduct interface as it is equivalent to Product

interface CartState {
  cart: CartProduct[];
  wishlist: Product[];
  action: CartActions;
}
export interface Product {
  id: string | number;

  title?: string;

  price: number;

  quantity: number;

  product_category?: string;

  product_image?: string;
  description?: string;
  image?: string;
}
interface CartActions {
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (id: string | number) => Promise<void>;
  fetchCart: () => Promise<void>;
  addProductQuantity: (
    id: string | number,
    quantity: number,
    price: number,
    category?: string
  ) => Promise<void>;
  emptyCart: () => Promise<void>;
  fetchWishlist: () => Promise<void>;
  addToWishlist: (product: Product) => Promise<void>;
  removeFromWishlist: (productId: string | number) => Promise<void>;
}

// Zustand Store
const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
  cart: [],
  wishlist: [],
  action: {
    addToCart: async (product: Product) => {
      try {
        const payload = {
          product_id: product.id,
          price: product.price,
          quantity: product.quantity,
          category: product.product_category,
          image: `${API_BASE_URL2}${product.product_image}`
        };

        const response = await fetch(`${API_BASE_URL}/cart/add/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            errorData.message || "Failed to add product to cart."
          );
        }

        const updatedCart = await response.json();
        const formattedCart = updatedCart.order_items.map(
          (item: {
            id: string | number;
            product_name?: string;
            product_category?: string;
            product_image?: string;
            price: number;
            quantity: number;
          }) => ({
            id: item.id,
            title: item.product_name || "Unknown Product",
            category: item.product_category,
            image: item.product_image
              ? `${API_BASE_URL2}${item.product_image}`
              : "/default/image/path.png",
            price: item.price,
            quantity: item.quantity,
          })
        );

        set({ cart: formattedCart });
        toast.success("Product added to cart!");
      } catch (error) {
        console.error("Add to Cart Error:", error);
        toast.error("Failed to add product to cart");
      }
    },

    removeFromCart: async (id: string | number) => {
      try {
        const response = await fetch(`${API_BASE_URL}/cart/remove/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to remove product from cart.");
        }

        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        }));
        toast.success("Product removed from cart!");
      } catch (error) {
        console.error("Remove from Cart Error:", error);
        toast.error("Failed to remove product from cart");
      }
    },

    fetchCart: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/cart/view/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart.");
        }

        const cartData = await response.json();
        const formattedCart = cartData.order_items.map(
          (item: {
            id: string | number;
            product_name?: string;
            product_category?: string;
            product_image?: string;
            price: number;
            quantity: number;
          }) => ({
            id: item.id,
            title: item.product_name || "Unknown Product",
            category: item.product_category,
            image:`${API_BASE_URL2}${item.product_image}`,
            price: item.price,
            quantity: item.quantity,
          })
        );

        set({ cart: formattedCart });
      } catch (error) {
        console.error("Fetch Cart Error:", error);
        // Silently fail for fetch operations
      }
    },

    addProductQuantity: async (
      id: string | number,
      quantity: number,
      price: number,
      category?: string
    ) => {
      if (quantity < 1 || quantity > 20) {
        toast.error("Quantity must be between 1 and 20.");
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/cart/update/${id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ product_id: id, price, quantity, category }),
        });

        if (!response.ok) {
          throw new Error("Failed to update product quantity.");
        }

        // Refresh cart after update
        const { action } = get();
        await action.fetchCart();
        toast.success("Cart updated!");
      } catch (error) {
        console.error("Update Quantity Error:", error);
        toast.error("Failed to update quantity");
      }
    },

    emptyCart: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/cart/empty/`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to empty cart.");
        }

        set({ cart: [] });
        toast.success("Cart emptied!");
      } catch (error) {
        console.error("Empty Cart Error:", error);
        toast.error("Failed to empty cart");
      }
    },

    fetchWishlist: async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/favorites/view/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch wishlist.");
        }

        const wishlist = await response.json();
        set({ wishlist });
      } catch (error) {
        console.error("Fetch Wishlist Error:", error);
        // Silently fail for fetch operations
      }
    },

    addToWishlist: async (product: Product) => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/favorites/add/${product.id}/`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to add to wishlist.");
        }

        set((state) => ({
          wishlist: [...state.wishlist, product],
        }));
        toast.success("Product added to wishlist!");
      } catch (error) {
        console.error("Add to Wishlist Error:", error);
        toast.error("Failed to add to wishlist");
      }
    },

    removeFromWishlist: async (productId: string | number) => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/favorites/remove/${productId}/`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to remove from wishlist.");
        }

        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        }));
        toast.success("Product removed from wishlist!");
      } catch (error) {
        console.error("Remove from Wishlist Error:", error);
        toast.error("Failed to remove from wishlist");
      }
    },
  },
}),
    {
      name: 'daleel-store',
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
      }),
    }
  )
);

export const useCart = () => useCartStore((state) => state.cart);
export const useWishlist = () => useCartStore((state) => state.wishlist);
export const useCartActions = () => useCartStore((state) => state.action);
export const useWishlistActions = () => useCartStore((state) => state.action);

const fetchCart = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/cart/view/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch cart.");
    }

    const cartData = await response.json();
    const formattedCart = cartData.order_items.map(
      (item: {
        id: string | number;
        product_name?: string;
        product_category?: string;
        product_image?: string;
        price: number;
        quantity: number;
      }) => ({
        id: item.id,
        title: item.product_name || "Unknown Product",
        category: item.product_category,
        image: `${API_BASE_URL2}${item.product_image}`,
        price: item.price,
        quantity: item.quantity,
      })
    );

    useCartStore.setState({ cart: formattedCart });
  } catch (error) {
    console.error("Fetch Cart Error:", error);
    // Silently fail for fetch operations
  }
};
