import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "../data/data.json";
import {Navbar, PreNavbar, Slider, Offers, Heading, HotAccessoriesMenu, HotAccessories, ProductReviews, Videos, Banner, Footer,StarProducts} from '../components/index'
const AllRoutes = () => {
  return (
    <>
      <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProducts starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes>
          <Route
            exact
            path="/music"
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          />
          <Route
            exact
            path="/smartDevice"
            element={
              <HotAccessories
                smartDevice={data.hotAccessories.smartDevice}
                smartDeviceCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          />
          <Route
            exact
            path="/home"
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          />
          <Route
            exact
            path="/lifestyle"
            element={
              <HotAccessories
                lifestyle={data.hotAccessories.lifeStyle}
                lifestyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          />
          <Route
            exact
            path="/mobileAccessories"
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          />
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReviews productReviews={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner} />
        <Footer footer={data.footer} />
      </Router>
    </>
  );
};

export default AllRoutes;
