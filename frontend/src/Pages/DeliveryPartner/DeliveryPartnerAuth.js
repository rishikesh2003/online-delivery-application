import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DeliveryPartnerAuth() {
  const navigate = useNavigate();
  const [state, setState] = useState("login");

  const [deliveryPartnerLogin, setDeliveryPartnerLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    console.log(deliveryPartnerLogin);
  }

  const [deliveryPartner, setDeliveryPartner] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegister(e) {
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
          if (state === "login") {
            handleLogin(e);
          } else {
            handleRegister(e);
          }
        }}
      >
        <div className="button-header">
          <Button
            onClick={() => {
              setState("login");
            }}
          >
            Login
          </Button>
          |
          <Button
            onClick={() => {
              setState("register");
            }}
          >
            Register
          </Button>
        </div>
        <h1>Delivery Partner</h1>

        {state === "login" ? (
          <>
            <div className="field-container">
              <TextField
                required
                value={deliveryPartnerLogin.email}
                onChange={(e) => {
                  setDeliveryPartnerLogin({
                    ...deliveryPartnerLogin,
                    email: e.target.value,
                  });
                }}
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="field-container">
              <TextField
                required
                value={deliveryPartnerLogin.password}
                onChange={(e) => {
                  setDeliveryPartnerLogin({
                    ...deliveryPartnerLogin,
                    password: e.target.value,
                  });
                }}
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="field-container">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>

            <div className="field-container">
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </div>
            <div className="button-header">
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Customer?
              </Button>
              |
              <Button
                onClick={() => {
                  navigate("/shop-auth");
                }}
              >
                Shop Owner?
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="field-container">
              <TextField
                value={deliveryPartner.firstName}
                onChange={(e) => {
                  setDeliveryPartner({
                    ...deliveryPartner,
                    firstName: e.target.value,
                  });
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
                  setDeliveryPartner({
                    ...deliveryPartner,
                    lastName: e.target.value,
                  });
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
                  setDeliveryPartner({
                    ...deliveryPartner,
                    email: e.target.value,
                  });
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
                  setDeliveryPartner({
                    ...deliveryPartner,
                    password: e.target.value,
                  });
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
                  setDeliveryPartner({
                    ...deliveryPartner,
                    confirmPassword: e.target.value,
                  });
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
            <div className="button-header">
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Customer
              </Button>
              |
              <Button
                onClick={() => {
                  navigate("/shop-auth");
                }}
              >
                Shop Owner?
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default DeliveryPartnerAuth;
