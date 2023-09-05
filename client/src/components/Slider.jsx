import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsFillBoxSeamFill, BsPeopleFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BiSolidMessageDetail ,BiLogOut} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/logo.gif";
const Slider = () => {
  return (
    <div className=" w-72 h-screen bg-white">
      <div className="w-full px-3">
        {/* logo */}
        <div className="w-full h-32  flex items-center justify-center relative">
          <img
            src={logo}
            alt="logo"
            className=" h-[150%]  absolute left-[-10px]"
          />
          <p className="pl-20">Smart Water </p>
        </div>
        {/* menu of slider */}
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <RxDashboard className="w-5 h-5 " />
          <p className="text-base pl-4 ">Dashboard</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <BsCart3 className="w-5 h-5" />
          <p className="text-base pl-4 ">Order</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <BsFillBoxSeamFill className="w-5 h-5" />
          <p className="text-base pl-4 ">Product</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <BsPeopleFill className="w-5 h-5" />
          <p className="text-base pl-4 ">Customer</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <BiSolidMessageDetail className="w-5 h-5" />
          <p className="text-base pl-4 ">Messager</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
          <FiSettings className="w-5 h-5" />
          <p className="text-base pl-4 ">Setting</p>
        </div>
      </div>
      <div className="w-full h-52 px-10  mt-10">
        <div className="w-full h-full flex flex-col items-center bg-blue-50 p-4 rounded-xl">
          <p>Shooping your product</p>
          <p>To get new service</p>
        </div>
      </div>
      <div className="w-full h-12 flex items-center p-4 mt-3 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
        <BiLogOut className="w-5 h-5" />
        <p className="text-base pl-4 ">Logout</p>
      </div>
    </div>
  );
};

export default Slider;
