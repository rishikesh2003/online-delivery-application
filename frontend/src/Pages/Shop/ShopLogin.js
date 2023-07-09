import { TextField, Button } from "@mui/material";
import { useState } from "react";
function ShopLogin() {
  const [shopOwnerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(shopOwnerLogin);
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Shop Owner Login</h1>
        <div className="field-container">
          <TextField
            required
            value={shopOwnerLogin.email}
            onChange={(e) => {
              setCustomerLogin({ ...shopOwnerLogin, email: e.target.value });
            }}
            type="email"
            id="email"
            label="Email"
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            required
            value={shopOwnerLogin.password}
            onChange={(e) => {
              setCustomerLogin({ ...shopOwnerLogin, password: e.target.value });
            }}
            type="password"
            id="password"
            label="Password"
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ShopLogin;
