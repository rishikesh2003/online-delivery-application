import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const notify = (message) => toast.success(message);

  const [product, setProduct] = useState({
    name: "",
    prodCategory: "",
    description: "",
    quantity: 0,
    price: 0,
    imgURL: "",
  });
  const category = [
    { content: "Fruits & Vegetables" },
    { content: "Snacks & Biscuits" },
    { content: "Instant Food" },
    { content: "Dairy & Bread" },
    { content: "Chocolates & Icecreams" },
    { content: "Rice, Atta, Dal" },
    { content: "Tea & Coffee" },
    { content: "Eggs, Meat & Fish" },
    { content: "Oil, Masala, Sauces" },
    { content: "Drinks & Juices" },
    { content: "Pet Supplies" },
    { content: "Health & Nutrition" },
    { content: "Breakfast Food" },
    { content: "Baby Care " },
    { content: "Cleaning & Household" },
    { content: "Hygiene & Personal care" },
    { content: "Bath & Body" },
    { content: "Beauty & Makeup" },
    { content: "Kitchen & Home" },
  ];
  const user = useSelector((state) => state.user.user);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:8080/api/shop-owners/create-product/${user[0].email}`,
      {
        name: product.name,
        imgURL: product.imgURL,
        category: product.prodCategory,
        price: product.price,
        quantity: product.quantity,
        description: product.description,
      }
    );
    await console.log(res);
    await notify("Product added successfully");
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="add-prod-form"
      >
        <div>
          <h1>Add Product</h1>
          <div className="field-container">
            <TextField
              value={product.name}
              onChange={(e) => {
                setProduct({ ...product, name: e.target.value });
              }}
              fullWidth
              variant="outlined"
              required
              label="Product Name"
            />
          </div>
          <div className="field-container">
            <label>Product Image*</label>
            <TextField
              onChange={(event) => {
                setProduct({ ...product, imgURL: event.target.value });
              }}
              type="text"
              fullWidth
              variant="outlined"
            />
          </div>
          <div className="field-container">
            <FormControl fullWidth required>
              <InputLabel>Choose Category</InputLabel>
              <Select
                value={product.prodCategory}
                onChange={(e) => {
                  setProduct({ ...product, prodCategory: e.target.value });
                }}
                label="Choose Category"
              >
                {category.map((c) => (
                  <MenuItem key={c.content} value={c.content}>
                    {c.content}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="field-container">
            <TextField
              value={product.description}
              onChange={(e) => {
                setProduct({ ...product, description: e.target.value });
              }}
              fullWidth
              multiline
              required
              minRows={5}
              variant="outlined"
              label="Product Description"
            />
          </div>
          <div className="field-container">
            <TextField
              value={product.price}
              onChange={(e) => {
                setProduct({ ...product, price: Number(e.target.value) });
              }}
              required
              variant="outlined"
              label="Price(in Rs.)"
              fullWidth
            />
          </div>
          <div className="field-container">
            <TextField
              value={product.quantity}
              onChange={(e) => {
                setProduct({ ...product, quantity: e.target.value });
              }}
              type="text"
              required
              variant="outlined"
              label="Quantity"
              fullWidth
            />
          </div>
        </div>
        <div className="field-container">
          <Button
            fullWidth
            type="submit"
            variant="contained"
            className="bg-green"
          >
            Add Product
          </Button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AddProduct;
