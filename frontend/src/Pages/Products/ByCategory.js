import { useLocation } from "react-router-dom";

function ByCategory() {
  const state = useLocation();
  const { category } = state.state;
  return <h1>{category}</h1>;
}

export default ByCategory;
