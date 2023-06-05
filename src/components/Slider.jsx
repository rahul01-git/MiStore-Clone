import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css' 
export const Slider = ({ start }) => {
  return (
    <Carousel fade>
      {start.map((item,idx) => (
        <Carousel.Item key={idx}>
          <img src={item} className="d-block w-100" alt="item" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

