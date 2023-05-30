import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import data from "./data/data.json";

export default function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct}/>
    </Router>
  );
}
