import { TextField, Button } from "@mui/material";
import { useState } from "react";
function CustomerLogin() {
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(customerLogin);
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Customer Login</h1>
        <div className="field-container">
          <TextField
            required
            value={customerLogin.email}
            onChange={(e) => {
              setCustomerLogin({ ...customerLogin, email: e.target.value });
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
            value={customerLogin.password}
            onChange={(e) => {
              setCustomerLogin({ ...customerLogin, password: e.target.value });
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

export default CustomerLogin;
