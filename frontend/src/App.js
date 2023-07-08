import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerLogin from "./Pages/Customer/CustomerLogin";
import CustomerRegister from "./Pages/Customer/CustomerRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
