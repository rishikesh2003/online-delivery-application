import { Button, TextField } from "@mui/material";
import { useState } from "react";

function CustomerRegister() {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (customer.password !== customer.confirmPassword) {
      alert("Passwords won't match");
    } else {
      console.log(customer);
    }
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Customer Register</h1>
        <div className="field-container">
          <TextField
            value={customer.firstName}
            onChange={(e) => {
              setCustomer({ ...customer, firstName: e.target.value });
            }}
            type="text"
            id="first-name"
            label="First Name"
            required
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={customer.lastName}
            onChange={(e) => {
              setCustomer({ ...customer, lastName: e.target.value });
            }}
            type="text"
            id="last-name"
            label="Last Name"
            required
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={customer.email}
            onChange={(e) => {
              setCustomer({ ...customer, email: e.target.value });
            }}
            type="email"
            id="email"
            label="Email"
            required
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={customer.password}
            onChange={(e) => {
              setCustomer({ ...customer, password: e.target.value });
            }}
            type="password"
            id="password"
            label="Password"
            required
            variant="filled"
            fullWidth
          />
        </div>
        <div className="field-container">
          <TextField
            value={customer.confirmPassword}
            onChange={(e) => {
              setCustomer({ ...customer, confirmPassword: e.target.value });
            }}
            type="password"
            id="confirm-password"
            label="Confirm password"
            required
            variant="filled"
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

export default CustomerRegister;
