import React, { useEffect, useState, ChangeEvent } from "react";
import ProductCard from "../component/explore/ProductCard";
import fetchFromApi from "../utils/fetchFromApi";
import SelectCategory from "../component/explore/SelectCategory";
import PriceFilter from "../component/explore/PriceFilter";
import "./ExploreProducts.css";
import { useParams, useNavigate } from "react-router-dom";
import Shimmer from "../component/shimmer/Shimmer";
import {  Product } from "../store/Store";



interface Category {
  id: string;
  name: string;
  value: string;
  label: string;
}

interface FetchResponse {
  results: Product[];
  count: number;
}

function ExploreProduct(): React.JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const { category } = useParams<{ category: string }>(); // Get category from URL
  const navigate = useNavigate();

  // Fetch categories on mount
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetchFromApi("categories");
        setCategories(res as Category[]); // Assuming res is an array of categories
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Fetch products when selectedCategory, currentPage, or priceFilter changes
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const params = {
          category:
            category === "all" ? "" : selectedCategory || category || "",
          page: currentPage,
          ordering:
            priceFilter === "low-to-high"
              ? "price"
              : priceFilter === "high-to-low"
              ? "-price"
              : "",
        };
        const res: FetchResponse = await fetchFromApi("products", params);
        setProducts(res.results || []);
        setTotalPages(Math.ceil(res.count / 10)); // Assuming 10 items per page
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [selectedCategory, currentPage, category, priceFilter]);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setCurrentPage(1); // Reset to first page
    navigate(`/explore/${selected}`); // Navigate to new category route
  };

  const handlePriceFilter = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPriceFilter(e.target.value);
  };

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <main className="product-main">
      <PriceFilter
        priceFilter={priceFilter}
        handlePriceFilter={handlePriceFilter}
      />
      <SelectCategory
        categories={categories}
        selectedCategory={selectedCategory || category || ""}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="products-container">
        {loading ? <Skeleton /> : <AllProducts products={products} />}
      </div>
      {products.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

function AllProducts({ products }: { products: Product[] }): React.JSX.Element {
  return products.length ? (
    <>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  ) : (
    <p className="no-product-found">No products found.</p>
  );
}

function Skeleton(): React.JSX.Element {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <Shimmer key={i} />
      ))}
    </>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps): React.JSX.Element {
  const getPageNumbers = (): number[] => {
    const range: number[] = [];
    for (
      let i = Math.max(1, currentPage - 2);
      i <= Math.min(totalPages, currentPage + 2);
      i++
    ) {
      range.push(i);
    }
    return range;
  };

  return (
    <div className="pagination2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default ExploreProduct;
