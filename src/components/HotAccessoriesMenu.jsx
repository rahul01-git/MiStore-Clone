import { NavLink } from "react-router-dom";
import '../styles/HotAccessoriesMenu.css'
export const HotAccessoriesMenu = () => {
  return (
    <div className="hotAccessoriesMenu">
      <NavLink className="hotAccessoriesLink" to="/music">
        Music
      </NavLink>
      <NavLink className="hotAccessoriesLink" to="/smartDevice">
        Smart Devices
      </NavLink>
      <NavLink className="hotAccessoriesLink" to="/home">
        Home
      </NavLink>
      <NavLink className="hotAccessoriesLink" to="/lifestyle">
        Lifestyle
      </NavLink>
      <NavLink className="hotAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </NavLink>
    </div>
  );
};
