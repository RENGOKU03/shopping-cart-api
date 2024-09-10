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
    <div className="home-container">
      {loading ? "Loading" : null}
      {products && products.length > 0
        ? products.map((product, index) => (
            <Card key={index} product={product} />
          ))
        : "Loading"}
    </div>
  );
};

export default Home;
