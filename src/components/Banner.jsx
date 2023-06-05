import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Banner = ({banner}) => {
  return <Carousel fade> 
  {
    banner.end.map((item,idx)=>(
        <Carousel.Item key={item.image} interval={1000} id="banner" keyboard={true}>
            <img src={item.image} alt={`${idx} banner`} className="d-block w-100" id="bannerImage"/>
            <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.source}</p>
                <u>Read more</u>
            </Carousel.Caption>
        </Carousel.Item>
    ))
  }
  </Carousel>;
};

export default Banner;
