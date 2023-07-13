import { useDispatch } from "react-redux";
import { logoutUser } from "../../Slice/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logoutUser());
    navigate("/");
  }, [dispatch, navigate]);
  return <></>;
}

export default Logout;
