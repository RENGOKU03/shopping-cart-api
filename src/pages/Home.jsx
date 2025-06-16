import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {loading ? (
        <div className="text-2xl font-semibold text-center col-span-full">
          Loading...
        </div>
      ) : products && products.length > 0 ? (
        products.map((product, index) => <Card key={index} product={product} />)
      ) : (
        <div className="text-2xl font-semibold text-center col-span-full">
          No products found.
        </div>
      )}
    </div>
  );
};

export default Home;
