import { TextField, Button } from "@mui/material";
import { useState } from "react";
function DeliveryPartnerLogin() {
  const [deliveryPartnerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(deliveryPartnerLogin);
  }
  return (
    <div className="flex-center-full-hw">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>DeliveryPartner Login</h1>
        <div className="field-container">
          <TextField
            required
            value={deliveryPartnerLogin.email}
            onChange={(e) => {
              setCustomerLogin({
                ...deliveryPartnerLogin,
                email: e.target.value,
              });
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
            value={deliveryPartnerLogin.password}
            onChange={(e) => {
              setCustomerLogin({
                ...deliveryPartnerLogin,
                password: e.target.value,
              });
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

export default DeliveryPartnerLogin;
