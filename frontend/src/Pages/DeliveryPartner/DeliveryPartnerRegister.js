import { Button, TextField } from "@mui/material";
import { useState } from "react";

function DeliveryPartnerRegister() {
  const [deliveryPartner, setDeliveryPartner] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (deliveryPartner.password !== deliveryPartner.confirmPassword) {
      alert("Passwords won't match");
    } else {
      console.log(deliveryPartner);
    }
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Delivery Partner Register</h1>
        <div className="field-container">
          <TextField
            value={deliveryPartner.firstName}
            onChange={(e) => {
              setDeliveryPartner({ ...deliveryPartner, firstName: e.target.value });
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
            value={deliveryPartner.lastName}
            onChange={(e) => {
              setDeliveryPartner({ ...deliveryPartner, lastName: e.target.value });
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
            value={deliveryPartner.email}
            onChange={(e) => {
              setDeliveryPartner({ ...deliveryPartner, email: e.target.value });
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
            value={deliveryPartner.password}
            onChange={(e) => {
              setDeliveryPartner({ ...deliveryPartner, password: e.target.value });
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
            value={deliveryPartner.confirmPassword}
            onChange={(e) => {
              setDeliveryPartner({ ...deliveryPartner, confirmPassword: e.target.value });
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

export default DeliveryPartnerRegister;
