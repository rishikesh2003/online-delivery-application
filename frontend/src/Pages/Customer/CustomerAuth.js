import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function CustomerAuth() {
  const navigate = useNavigate();
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [state, setState] = useState("login");

  function handleLogin(e) {
    e.preventDefault();
    console.log(customerLogin);
  }

  function handleRegister(e) {
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
          if (state === "login") {
            handleLogin(e);
          } else {
            handleRegister(e);
          }
        }}
      >
        <div className="button-header">
          <Button
            className="color-green"
            onClick={() => {
              setState("login");
            }}
          >
            Login
          </Button>
          |
          <Button
            className="color-green"
            onClick={() => {
              setState("register");
            }}
          >
            Register
          </Button>
        </div>

        <h1>Customer</h1>
        {state === "login" ? (
          <>
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
                variant="outlined"
                fullWidth
              />
            </div>
            <div className="field-container">
              <TextField
                required
                value={customerLogin.password}
                onChange={(e) => {
                  setCustomerLogin({
                    ...customerLogin,
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
              <Button
                className="bg-green"
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </div>
            <div className="button-header">
              <Button
                className="color-green"
                onClick={() => {
                  navigate("/del-partner-auth");
                }}
              >
                Delivery Partner?
              </Button>
              |
              <Button
                className="color-green"
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
                value={customer.firstName}
                onChange={(e) => {
                  setCustomer({ ...customer, firstName: e.target.value });
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
                value={customer.lastName}
                onChange={(e) => {
                  setCustomer({ ...customer, lastName: e.target.value });
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
                value={customer.email}
                onChange={(e) => {
                  setCustomer({ ...customer, email: e.target.value });
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
                value={customer.password}
                onChange={(e) => {
                  setCustomer({ ...customer, password: e.target.value });
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
                value={customer.confirmPassword}
                onChange={(e) => {
                  setCustomer({ ...customer, confirmPassword: e.target.value });
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
              <Button
                className="bg-green"
                variant="contained"
                type="submit"
                fullWidth
              >
                Register
              </Button>
            </div>
            <div className="button-header">
              <Button
                className="color-green"
                onClick={() => {
                  navigate("/del-partner-auth");
                }}
              >
                Delivery Partner?
              </Button>
              |
              <Button
                className="color-green"
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

export default CustomerAuth;
