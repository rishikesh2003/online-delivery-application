import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";

function ByCategory() {
  const state = useLocation();
  const { category } = state.state;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        "http://localhost:8080/api/products/" + category
      );

      console.log(res.data);
      await setProducts(res.data);
    }
    getProducts();
  }, [category]);
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "20px" }}>{category}</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {products &&
          products.map((product) => <ProductCard product={product} />)}
      </div>
    </>
  );
}

export default ByCategory;
