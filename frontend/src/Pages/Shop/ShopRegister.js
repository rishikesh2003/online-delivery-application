import { Button, TextField } from "@mui/material";
import { useState } from "react";

function ShopRegister() {
  const [shopOwner, setShopOwner] = useState({
    firstName: "",
    lastName: "",
    shopName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (shopOwner.password !== shopOwner.confirmPassword) {
      alert("Passwords won't match");
    } else {
      console.log(shopOwner);
    }
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Shop Owner Register</h1>
        <div className="field-container">
          <TextField
            value={shopOwner.firstName}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, firstName: e.target.value });
            }}
            type="text"
            id="first-name"
            label="First Name"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={shopOwner.lastName}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, lastName: e.target.value });
            }}
            type="text"
            id="last-name"
            label="Last Name"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={shopOwner.shopName}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, shopName: e.target.value });
            }}
            type="text"
            id="shop-name"
            label="Shop Name"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={shopOwner.email}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, email: e.target.value });
            }}
            type="email"
            id="email"
            label="Email"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={shopOwner.password}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, password: e.target.value });
            }}
            type="password"
            id="password"
            label="Password"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={shopOwner.confirmPassword}
            onChange={(e) => {
              setShopOwner({ ...shopOwner, confirmPassword: e.target.value });
            }}
            type="password"
            id="confirm-password"
            label="Confirm password"
            required
            variant="outlined"
            fullWidth
          />
        </div>
        <div className="field-container">
          <Button variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShopRegister;
