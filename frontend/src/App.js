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
import DashBoard from "./Pages/Dashboard/Dashboard";
import AddProduct from "./Pages/Dashboard/ShopOwner/AddProducts";
import { useEffect } from "react";
import Cart from "./Pages/Cart/Cart";
import EditProduct from "./Pages/Dashboard/ShopOwner/EditProduct";
import Search from "./Pages/Search.js/Search";

function App() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);
  return (
    <Router>
      <Navbar />
      {user[0] ? (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/products/:category" element={<ByCategory />} />
            <Route path="/dashboard/add-product" element={<AddProduct />} />
            <Route path="/dashboard/edit-product" element={<EditProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      )}
      <Footer />
    </Router>
  );
}

export default App;
