import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShopOwnerDash() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [shopName, setShopName] = useState("");
  const user = useSelector((state) => state.user.user);
  async function handleDelete(id) {
    await axios.delete(
      "http://localhost:8080/api/shop-owners/delete-product/" + id
    );
    const res = await axios.get(
      "http://localhost:8080/api/shop-owners/get-products/" + user[0].email
    );
    await setProducts(res.data);
  }

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(
        "http://localhost:8080/api/shop-owners/get-products/" + user[0].email
      );
      await setProducts(res.data);
    }
    async function getShop() {
      const res = await axios.get(
        "http://localhost:8080/api/shop-owners/" + user[0].email
      );
      await setShopName(res.data.shopName);
    }
    getShop();
    getProducts();
  }, [user]);
  return (
    <>
      {shopName && (
        <h1 style={{ textAlign: "center", paddingTop: "20px" }}>{shopName}</h1>
      )}
      <h2 style={{ textAlign: "center", padding: "20px" }}>Your Products</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {products &&
          products.map((product) => (
            <div style={{ padding: "20px" }}>
              <Card style={{ maxWidth: "300px" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imgURL}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    Name: {product.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {product.description}
                  </Typography>
                  <Typography color="h6" gutterBottom>
                    Price: {`₹${product.price}`}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    Quantity: {product.quantity}
                  </Typography>
                </CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <CardActions>
                    <Button
                      variant="contained"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => {
                        navigate("/dashboard/edit-product", { state: product });
                      }}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default ShopOwnerDash;
