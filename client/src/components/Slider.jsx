import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsFillBoxSeamFill, BsPeople, BsPeopleFill } from "react-icons/bs";
import { BsCart3 } from "react-icons/bs";
import { BiSolidMessageDetail, BiLogOut } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import logo from "../assets/logo.gif";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { logoutUser } from "../api/authAction";

import Swal from "sweetalert2";

const Slider = () => {
  const dispatch = useDispatch();
  const [isTrue, setIsTure] = useState(false);
  const navigate = useNavigate();
  const handleShow = () => {
    setIsTure(!isTrue);
    console.log(isTrue);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout !",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logoutUser()).then((status) => {
          if (status == true) {
            setTimeout(() => {
              navigate("/");
              WindowRefresh();
            }, 3000);
          }
        });
      }
    });
  };
  return (
    <div
      className={`${
        isTrue ? "w-[300px]" : "w-16 lg:w-[300px]"
      } h-screen relative flex flex-col items-center transition-width duration-500`}
    >
      <div className="w-full h-full hidden lg:block">
        <div className="w-full px-3 ">
          {/* logo */}
          <div className="w-full  h-32  flex items-center justify-center relative">
            <img
              src={logo}
              alt="logo"
              className=" h-[150%]  absolute left-[-20px]"
            />
            <p className="pl-16">Smart Water </p>
          </div>
          {/* menu of slider */}
          <div
            className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg "
            onClick={() => navigate("/homepage")}
          >
            <RxDashboard className="w-5 h-5 " />
            <p className="text-base pl-4 ">Dashboard</p>
          </div>
          <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
            <BsCart3 className="w-5 h-5" />
            <p className="text-base pl-4 ">Order</p>
          </div>
          <div
            className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg "
            onClick={() => navigate("/product")}
          >
            <BsFillBoxSeamFill className="w-5 h-5" />
            <p className="text-base pl-4 ">Product</p>
          </div>
          <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
            <BsPeopleFill className="w-5 h-5" />
            <p className="text-base pl-4 ">Customer</p>
          </div>
          <div
            className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg "
            onClick={() => navigate("/user")}
          >
            <BsPeople className="w-5 h-5" />
            <p className="text-base pl-4 ">User</p>
          </div>
          <div className="w-full h-12 flex items-center p-4 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg ">
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
        <div
          className="w-full h-12 flex items-center p-4 mt-3 text-gray-500 hover:text-blue-400  cursor-pointer hover:bg-blue-100 rounded-lg "
          onClick={handleLogout}
        >
          <BiLogOut className="w-5 h-5" />
          <p className="text-base pl-4 ">Logout</p>
        </div>
      </div>
      <div
        className={`${
          isTrue ? "w-full" : "w-12"
        }  h-full block  lg:hidden absolute `}
      >
        <div className="w-full h-12 flex justify-center items-center mt-2 text-gray-500 ">
          {isTrue ? (
            <MdOutlineCancel
              className=" w-[50px] h-[70%] "
              onClick={handleShow}
            />
          ) : (
            <HiOutlineMenuAlt1
              className=" w-[50px] h-[70%] "
              onClick={handleShow}
            />
          )}
        </div>

        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500 `}
          onClick={() => navigate("/homepage")}
        >
          <RxDashboard className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            Dashboard
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
        >
          <BsCart3 className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            Order
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
          onClick={() => navigate("/product")}
        >
          <BsFillBoxSeamFill className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            Product
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
        >
          <BsPeopleFill className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2 `}>
            Customer
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
          onClick={() => navigate("/user")}
        >
          <BsPeople className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            User
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
        >
          <FiSettings className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            Setting
          </p>
        </div>
        <div
          className={`w-full h-12 flex justify-start items-center px-3 mt-2 text-gray-500`}
          onClick={handleLogout}
        >
          <BiLogOut className=" w-[50px] h-[30px] " />
          <p className={` ${isTrue ? "block" : "hidden"} text-base pl-2`}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
