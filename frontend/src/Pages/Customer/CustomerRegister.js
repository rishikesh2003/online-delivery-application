import { Button, TextField } from "@mui/material";

function CustomerRegister() {
  return (
    <div className="flex-center-full-hw">
      <form>
        <h1>Customer Register</h1>
        <div className="field-container">
          <TextField
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
