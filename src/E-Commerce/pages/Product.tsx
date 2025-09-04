import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchFromApi from "../utils/fetchFromApi";
import ProductView from "../component/product/ProductView";

interface ProductData {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  image?: string;
  is_in_stock?: boolean;
  [key: string]: unknown; // Allows additional properties for flexibility
}

function Product() {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Product ID is undefined");
      setLoading(false);
      return;
    }

    async function fetchProductData() {
      try {
        setError(null);
        const data: ProductData = await fetchFromApi<ProductData>(`products/${id}`);
        setProductData(data);
      } catch  {
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    }

    fetchProductData();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!productData) return <p>Product not found.</p>;

  return (
    <div>
      <ProductView productData={productData} />
    </div>
  );
}

export default Product;
