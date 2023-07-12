import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryPartnerAuth from "./Pages/DeliveryPartner/DeliveryPartnerAuth";
import ShopAuth from "./Pages/Shop/ShopAuth";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import CustomerAuth from "./Pages/Customer/CustomerAuth";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Navbar />
      {isLoggedIn ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customer-auth" element={<CustomerAuth />} />
            <Route path="/del-partner-auth" element={<DeliveryPartnerAuth />} />
            <Route path="/shop-auth" element={<ShopAuth />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
      <Footer />
    </Router>
  );
}

export default App;
