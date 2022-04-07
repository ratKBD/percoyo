import welcome from "../images/img-1.jpeg";
import cup from "../images/img-2.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";

export const Slider = () => {
  return (
    <div className="gallery">
      <Carousel>
        <div>
          <img className="img1" src={welcome} alt="" />
        </div>
        <div>
          <img className="img2" src={cup} alt="" />
        </div>
      </Carousel>
    </div>
  );
};
