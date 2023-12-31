import { useNavigate } from "react-router-dom";
import HomeCarousel from "../../Components/HomeCarousel";
import { TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Brands from "../../Components/Brands";
function Home() {
  const [search, setSearch] = useState();
  const images = [
    { src: "fruitsandveg.webp", p: "Fruits & Vegetables" },
    { src: "snacksandbiscuits.jpg", p: "Snacks & Biscuits" },
    { src: "instantfood.jpg", p: "Instant Food" },
    { src: "diaryandbread.jpg", p: "Dairy & Bread" },
    { src: "chocoandice.jpg", p: "Chocolates & Icecreams" },
    { src: "riceattadal.jpg", p: "Rice, Atta, Dal" },
    { src: "teaandcoffee.jpg", p: "Tea & Coffee" },
    { src: "eggsmeatfish.jpg", p: "Eggs, Meat & Fish" },
    { src: "oilmasala.webp", p: "Oil, Masala, Sauces" },
    { src: "drinksandjuices.jpg", p: "Drinks & Juices" },
    { src: "petsupply.jpg", p: "Pet Supplies" },
    { src: "healthandnutri.jpg", p: "Health & Nutrition" },
    { src: "bfood.jpg", p: "Breakfast Food" },
    { src: "babycare.jpg", p: "Baby Care " },
    { src: "clandhouse.webp", p: "Cleaning & Household" },
    { src: "handpcare.jpg", p: "Hygiene & Personal care" },
    { src: "bathandbody.jpg", p: "Bath & Body" },
    { src: "bandmakeup.webp", p: "Beauty & Makeup" },
    { src: "kandhome.jpg", p: "Kitchen & Home" },
  ];
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.length !== 0) {
      if (user[0].role === "deliveryPartner") {
        navigate("/dashboard");
      } else if (user[0].role === "shop") {
        navigate("/dashboard");
      }
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    }
  }, [user, navigate]);
  return (
    <>
      <div className="search-box">
        <TextField
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          id="search"
          label="Search for Products"
          fullWidth
          variant="outlined"
        />
        <Button
          onClick={() => {
            navigate("/search", { state: search });
          }}
          variant="contained"
        >
          Search
        </Button>
      </div>
      <div className="showcase">
        <HomeCarousel />
        <div className="category-container">
          <h1
            style={{
              color: "#862b0d",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            <i>Shop By category</i>
          </h1>
          <div className="categories">
            {images.map((img) => (
              <div
                onClick={() => {
                  navigate(
                    `/products/${img.p
                      .split(" ")
                      .join("-")
                      .toLocaleLowerCase()
                      .split("&")
                      .join("and")}`,
                    { state: { category: img.p } }
                  );
                }}
                key={img.p}
                className="category-card"
              >
                <img src={"/images/category/" + img.src} alt={img.p} />
                <p>{img.p}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="brands">
          <h1>Our Top Brands</h1>
          <div className="brands-img">
            <Brands />
          </div>
        </div>
        <div className="text-banner">
          <h2>Get your groceries delivered as fast as today</h2>

          {user[0] ? (
            <Button
              onClick={() => {
                navigate("/daily-deals");
              }}
              variant="contained"
            >
              Shop now
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/customer-auth");
              }}
              variant="contained"
            >
              Sign in to Shop
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
