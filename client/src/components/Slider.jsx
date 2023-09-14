import React from "react";
import { RxDashboard } from "react-icons/rx";
import { BsFillBoxSeamFill, BsPeople, BsPeopleFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BiSolidMessageDetail ,BiLogOut} from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/logo.gif";
import { useNavigate } from "react-router-dom";
const Slider = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-[300px] h-screen ">
      <div className="w-full px-3">
        {/* logo */}
        <div className="w-full h-32  flex items-center justify-center relative">
          <img
            src={logo}
            alt="logo"
            className=" h-[150%]  absolute left-[-20px]"
          />
          <p className="pl-16">Smart Water </p>
        </div>
        {/* menu of slider */}
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg " onClick={()=>navigate('/homepage')}>
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
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg "  onClick={()=>navigate('/user')}>
          <BsPeople className="w-5 h-5" />
          <p className="text-base pl-4 ">User</p>
        </div>
        <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg " >
          <FiSettings className="w-5 h-5" />
          <p className="text-base pl-4 ">Setting</p>
        </div>
      </div>
      <div className="w-full h-52 px-5  mt-10">
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
