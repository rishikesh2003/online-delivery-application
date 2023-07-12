import HomeCarousel from "../../Components/HomeCarousel";
import { TextField, Button } from "@mui/material";
function Home() {
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
  return (
    <>
      <div className="search-box">
        <TextField
          id="search"
          label="Search for Products"
          fullWidth
          variant="outlined"
        />
        <Button variant="contained">Search</Button>
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
              <div key={img.p} className="category-card">
                <img src={"/images/category/" + img.src} alt={img.p} />
                <p>{img.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
