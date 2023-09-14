import React from "react";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div className="flex">
      {/* <NavBar /> */}
      <Slider />
      <div className="w-full">Dashboard Page</div>
    </div>
  );
};

export default HomePage;
