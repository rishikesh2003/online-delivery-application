import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DeliveryPartnerAuth from "./Pages/DeliveryPartner/DeliveryPartnerAuth";
import ShopAuth from "./Pages/Shop/ShopAuth";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import CustomerAuth from "./Pages/Customer/CustomerAuth";
import ForgotPass from "./Pages/ForgotPass/ForgotPass";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useSelector } from "react-redux";
import Logout from "./Pages/Logout/Logout";
import ByCategory from "./Pages/Products/ByCategory";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <Router>
      <Navbar />
      {user[0] ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products/:category" element={<ByCategory />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ByCategory />} />
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
