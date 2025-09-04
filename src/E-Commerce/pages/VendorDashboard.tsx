import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./VendorDashboard.css";
import "./../component/Navbar/SlidingCart.css";
import Pagination from "../component/pagination/pagination";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  sold_count: number;
  image: string;
  vendor_name: string;
}

const VendorDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentEditProduct, setCurrentEditProduct] = useState<Product | null>(
    null
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 5;

  const navigate = useNavigate();
  const API_BASE_URL = "https://daleel-back.zeeploy.xyz";

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/vendor/dashboard/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      const productsWithVendorId = response.data.map((product: Product) => ({
        ...product,
        vendorId: localStorage.getItem("user_id"),
      }));

      setProducts(productsWithVendorId);
      setError(null);
    } catch {
      setError("Failed to fetch products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditClick = (product: Product) => {
    setCurrentEditProduct(product);
    setSelectedFile(null);
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (currentEditProduct) {
      setCurrentEditProduct({
        ...currentEditProduct,
        [name]: name === "price" || name === "stock" ? Number(value) : value,
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const updateProduct = async (
    productId: number,
    productData: Product,
    file: File | null
  ) => {
    try {
      const formData = new FormData();

      const fieldOrder = [
        { key: "title", value: productData.title },
        { key: "category", value: productData.category },
        { key: "price", value: productData.price },
        { key: "stock", value: productData.stock },
      ];

      fieldOrder.forEach((field) => {
        if (field.value !== undefined) {
          formData.append(field.key, String(field.value));
        }
      });

      if (file) {
        formData.append("image", file);
      }

      setLoading(true);
      await axios.patch(
        `${API_BASE_URL}/api/store/product/update/${productId}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      alert("Product updated successfully!");
      fetchProducts();
      setCurrentEditProduct(null);
    } catch {
      alert("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
      setSelectedFile(null);
    }
  };

  const deleteProduct = async (productId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    setLoading(true);
    try {
      await axios.delete(
        `${API_BASE_URL}/api/store/product/delete/${productId}/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      alert("Product deleted successfully!");
      fetchProducts();
    } catch {
      alert("Failed to delete product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const vendorName = products.length > 0 ? products[0].vendor_name : "";

  return (
    <div className="vendor-dashboard">
      <div className="dashboard-header">
        <h2>
          Welcome, <span>{vendorName}</span>
        </h2>
        <p>Manage your products efficiently</p>
        <button
          className="action-btn"
          onClick={() => {
            setCurrentEditProduct(null);
            navigate("/productform");
          }}
        >
          Add New Product
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Sold Count</th>
              <th>Actions</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id}>
                {currentEditProduct && currentEditProduct.id === product.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        name="title"
                        value={currentEditProduct.title || ""}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="price"
                        value={currentEditProduct.price || ""}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="stock"
                        value={currentEditProduct.stock || ""}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="category"
                        value={currentEditProduct.category || ""}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>{product.sold_count}</td>
                    <td>
                      <button
                        className="action-btn save-btn"
                        onClick={() =>
                          updateProduct(
                            currentEditProduct.id,
                            currentEditProduct,
                            selectedFile
                          )
                        }
                      >
                        Save
                      </button>
                      <button
                        className="action-btn cancel-btn"
                        onClick={() => setCurrentEditProduct(null)}
                      >
                        Cancel
                      </button>
                    </td>
                    <td>
                      <input type="file" onChange={handleFileChange} />
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.title}</td>
                    <td>{product.price} EGP</td>
                    <td>{product.stock}</td>
                    <td>{product.category}</td>
                    <td>{product.sold_count}</td>
                    <td>
                      <button
                        className="action-btn edit-btn"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <img
                      crossOrigin="anonymous"
                        src={`${API_BASE_URL}${product.image}`}
                        alt="product"
                        className="cart-img"
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default VendorDashboard;
