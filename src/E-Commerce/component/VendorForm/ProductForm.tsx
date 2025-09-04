import { useState, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ProductForm.css";

interface Category {
  id: number;
  label: string;
}

const CreateProductForm: FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const API_BASE_URL = "https://daleel-back.zeeploy.xyz";
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/categories`);
        setCategories(response.data); // Set categories from API response
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleCategoryChange = (category: string) => {
    setFormData((prevData) => ({
      ...prevData,
      category,
    }));
    setShowCategoryList(false); // Hide category list after selection
  };

  const toggleCategoryList = () => {
    setShowCategoryList(!showCategoryList);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key as keyof typeof formData]);
      }
      if (image) {
        form.append("image", image);
      }

      await axios.post(`${API_BASE_URL}/api/store/product/create/`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccessMessage("Product created successfully!");
      setFormData({
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
      });
      setImage(null);

      // Navigate to /vendordashboard after product creation
      navigate("/vendordashboard");
    } catch (error: any) {
      console.error(
        "Error creating product:",
        error.response?.data || error.message
      );
      setErrorMessage("Failed to create product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-form-container">
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <button
            type="button"
            onClick={toggleCategoryList}
            className="category-toggle-btn"
          >
            {formData.category || "Select Category"}
          </button>

          {showCategoryList && (
            <div className="category-list">
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() =>
                        handleCategoryChange(category.label.toLowerCase())
                      }
                    >
                      {category.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>

        <button className="form-btn" type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
