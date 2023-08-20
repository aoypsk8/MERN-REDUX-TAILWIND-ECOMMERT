import React from "react";
import error from "../assets/error.png"
const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full  mt-[100px]">
      <p className=" text-orange-400 text-3xl">Page Not Found </p>
      <img src={error} alt="error-robot" />
    </div>
  );
};

export default NotFound;
