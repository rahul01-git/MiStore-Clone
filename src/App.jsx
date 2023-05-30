import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider";
import { banner } from "./data/data.json";

export default function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={banner.start} />
    </Router>
  );
}
