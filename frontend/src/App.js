import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryPartnerAuth from "./Pages/DeliveryPartner/DeliveryPartnerAuth";
import ShopLogin from "./Pages/Shop/ShopLogin";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import CustomerAuth from "./Pages/Customer/CustomerAuth";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";

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
          <Route path="/" element={<CustomerAuth />} />
          <Route path="/del-partner-auth" element={<DeliveryPartnerAuth />} />
          <Route path="/shop-auth" element={<ShopLogin />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
