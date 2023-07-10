import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryPartnerLogin from "./Pages/DeliveryPartner/DeliveryPartnerLogin";
import ShopLogin from "./Pages/Shop/ShopLogin";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import CustomerAuth from "./Pages/Customer/CustomerAuth";

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
          <Route path="/del-partner-auth" element={<DeliveryPartnerLogin />} />
          <Route path="/shop-auth" element={<ShopLogin />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
