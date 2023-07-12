import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import b1 from "../images/banners/banner1.webp";
import b2 from "../images/banners/banner2.webp";
import b3 from "../images/banners/banner3.webp";

function HomeCarousel() {
  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      infiniteLoop={true}
      interval={1800}
      showThumbs={false}
      showStatus={false}
      stopOnHover={false}
    >
      <div>
        <img src={b1} alt="carousel" />
      </div>
      <div>
        <img src={b2} alt="carousel" />
      </div>
      <div>
        <img src={b3} alt="carousel" />
      </div>
    </Carousel>
  );
}

export default HomeCarousel;
