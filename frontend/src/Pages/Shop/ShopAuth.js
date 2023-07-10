import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function ShopAuth() {
  const navigate = useNavigate();
  const [state, setState] = useState("login");

  const [shopOwnerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    console.log(shopOwnerLogin);
  }

  const [shopOwner, setShopOwner] = useState({
    firstName: "",
    lastName: "",
    shopName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegister(e) {
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
        <h1>Shop Owner</h1>
        {state === "login" ? (
          <>
            <div className="field-container">
              <TextField
                required
                value={shopOwnerLogin.email}
                onChange={(e) => {
                  setCustomerLogin({
                    ...shopOwnerLogin,
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
                value={shopOwnerLogin.password}
                onChange={(e) => {
                  setCustomerLogin({
                    ...shopOwnerLogin,
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
                  navigate("/customer-auth");
                }}
              >
                Customer?
              </Button>
              |
              <Button
                className="color-green"
                onClick={() => {
                  navigate("/del-partner-auth");
                }}
              >
                Delivery Partner?
              </Button>
            </div>
          </>
        ) : (
          <>
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
                  setShopOwner({
                    ...shopOwner,
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
                  navigate("/customer-auth");
                }}
              >
                Customer?
              </Button>
              |
              <Button
                className="color-green"
                onClick={() => {
                  navigate("/del-partner-auth");
                }}
              >
                Delivery Partner?
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ShopAuth;
