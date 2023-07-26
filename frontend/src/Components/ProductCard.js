import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, TextField } from "@mui/material";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";

export default function ProductCard({ product }) {
  function handleAddToCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    product.cartQuantity = currentQuantity;
    console.log(product);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const [currentQuantity, setCurrentQuantity] = useState(1);
  return (
    <Card style={{ maxWidth: "300px" }}>
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
          {product.description}
        </Typography>

        <Typography color="h6" gutterBottom>
          {`₹${product.price}`}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {`${product.quantity}`}
        </Typography>

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
      </CardContent>

      <CardActions>
        <Button
          onClick={() => {
            handleAddToCart();
          }}
          size="small"
          color="primary"
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
