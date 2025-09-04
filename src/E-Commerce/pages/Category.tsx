import { useNavigate } from "react-router-dom";
import "./Category.css";
import fetchFromApi from "../utils/fetchFromApi";
import { useEffect, useState } from "react";

// Define the structure of a category
interface Category {
  label: string;
}

export default function Category() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state for fetching categories
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res: Category[] = await fetchFromApi<Category[]>("categories");
        setCategories(res); // Expecting res as an array of categories
        setError(null);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Failed to load categories. Please try again.");
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryClick = (category: Category) => {
    navigate(`/explore/${category.label.toLowerCase()}`); // Navigate to the category route
  };

  return (
    <div className="category-container">
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        categories.map((category) => (
          <button
            key={category.label.toLowerCase()} // Use label in lowercase as the key
            className="category-btn"
            onClick={() => handleCategoryClick(category)}
          >
            {category.label}
          </button>
        ))
      )}
    </div>
  );
}
