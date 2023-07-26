import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton, TextField } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import axios from "axios";

function Cart() {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const user = useSelector((state) => state.user.user);
  const isCart =
    window.location.href.split("/")[
      window.location.href.split("/").length - 1
    ] === "cart"
      ? true
      : false;
  async function handleDelete(id) {
    await axios.delete(
      "http://localhost:8080/api/shop-owners/delete-product/" + id
    );
  }

  function handleRemoveFromCart(id) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const newCart = cart.filter((prod) => prod.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setProducts(newCart);
    let t = 0;
    newCart.forEach((c) => {
      t += c.price * c.cartQuantity;
    });
    setTotalPrice(t);
  }

  function handleAddToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    product.cartQuantity = currentQuantity;
    console.log(product);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setProducts(cart);
    let t = 0;
    cart.forEach((c) => {
      t += c.price * c.cartQuantity;
    });
    setTotalPrice(t);
  }

  const [currentQuantity, setCurrentQuantity] = useState(1);
  useEffect(() => {
    function getProducts() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setProducts(cart);
      let t = 0;
      cart.forEach((c) => {
        t += c.price * c.cartQuantity;
      });
      setTotalPrice(t);
    }
    getProducts();
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "20px" }}>Your Products</h1>
      <h2 style={{ textAlign: "center" }}>Total : ₹{totalPrice}</h2>
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
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imgURL}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {`₹${product.price}`}
                  </Typography>
                  {isCart ? (
                    <div>{product.cartQuantity}</div>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 8,
                      }}
                    >
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setCurrentQuantity(currentQuantity - 1);
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <TextField
                        type="text"
                        variant="outlined"
                        size="small"
                        value={currentQuantity}
                        inputProps={{ min: 1, step: 1, max: product.quantity }}
                        style={{ width: 60, margin: "0", padding: "6px" }}
                      />
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setCurrentQuantity(currentQuantity + 1);
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  )}
                </CardContent>
                {isCart ? (
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                ) : user.length === 0 ? (
                  <CardActions>
                    <Button
                      onClick={() => {
                        handleAddToCart();
                      }}
                      size="small"
                      color="primary"
                      // onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                ) : user[0]?.role === "customer" ? (
                  <CardActions>
                    <Button
                      onClick={() => {
                        handleAddToCart();
                      }}
                      size="small"
                      color="primary"
                      // onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                ) : (
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                )}
              </Card>
            </div>
          ))}
      </div>
      <center>
        <Button variant="contained">Order now</Button>
      </center>
      <br />
    </>
  );
}

export default Cart;
