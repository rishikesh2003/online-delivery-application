import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";

function Search() {
  const [products, setProducts] = useState([]);

  const state = useLocation().state;
  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("http://localhost:8080/api/products/");
      const prod = await res.data.filter((p) =>
        p.name.toLowerCase().includes(state)
      );
      setProducts(prod);
    }
    getProducts();
  }, [state]);
  return (
    <>
      {products.length === 0 ? (
        <h1 style={{ textAlign: "center", padding: "20px" }}>
          No Results Found
        </h1>
      ) : (
        <></>
      )}
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

export default Search;
