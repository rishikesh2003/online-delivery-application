import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomerLogin from "./Pages/Customer/CustomerLogin";
import CustomerRegister from "./Pages/Customer/CustomerRegister";
import DeliveryPartnerLogin from "./Pages/DeliveryPartner/DeliveryPartnerLogin";
import DeliveryPartnerRegister from "./Pages/DeliveryPartner/DeliveryPartnerRegister";
import ShopLogin from "./Pages/Shop/ShopLogin";
import ShopRegister from "./Pages/Shop/ShopRegister";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<CustomerLogin />} />
          <Route path="/customer-register" element={<CustomerRegister />} />
          <Route path="/del-partner-login" element={<DeliveryPartnerLogin />} />
          <Route
            path="/del-partner-register"
            element={<DeliveryPartnerRegister />}
          />
          <Route path="/shop-login" element={<ShopLogin />} />
          <Route path="/shop-register" element={<ShopRegister />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
