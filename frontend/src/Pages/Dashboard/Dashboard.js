import { useSelector } from "react-redux";
import CustomerDash from "../../Components/Dashboard/CustomerDash";
import DelPartnerDash from "../../Components/Dashboard/DelPartnerDash";
import ShopOwnerDash from "../../Components/Dashboard/ShopOwnerDash";

function DashBoard() {
  const user = useSelector((state) => state.user.user);
  const role = user[0].role;
  return role === "customer" ? (
    <CustomerDash />
  ) : role === "deliveryPartner" ? (
    <DelPartnerDash />
  ) : (
    <ShopOwnerDash />
  );
}

export default DashBoard;
