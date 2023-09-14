import React, { useState } from "react";

import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../api/authAction";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState({
    username: "",
    password: "",
    phone: "",
  });

  console.log(value);
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault(e);
    dispatch(registerUser(value.username, value.password,value.phone)).then((status) => {
      if (status == true) {
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    });
  };
  return (
    <div className="flex  justify-center items-center h-screen bg-slate-50">
      <div
        className="lg:w-[800px] lg:h-[600px] bg-white rounded-3xl  flex "
        style={{
          boxShadow: "0  5px 10px 2px rgba(186,229,247)",
        }}
      >
        <div className="lg:w-[60%] h-full flex flex-col  items-center">
          <p className="text-4xl font-medium pt-32">REGISTER !</p>
          <p className="text-base pt-2 pb-7">Register Your account</p>
          <form
            className="flex flex-col justify-between "
            onSubmit={handleLogin}
          >
            <div
              className="border-none bg-white rounded-3xl h-12 w-80 flex px-2 lg:mx-0 mx-6  "
              style={{
                boxShadow: "8px 0 15px rgba(111,206,231)",
              }}
            >
              <FaUser
                className="w-8 h-full flex justify-center items-center p-2 opacity-80"
                style={{ color: "rgba(111,206,231)" }}
              />
              <input
                required
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="Username"
                className=" items-center w-[85%]  outline-none text-base text-gray-400 focus:text-black  "
              />
            </div>
            <div
              className="border-none bg-white rounded-3xl h-12 w-80 flex px-3  mt-6 lg:mx-0 mx-6"
              style={{
                boxShadow: "8px 0 15px rgba(111,206,231)",
              }}
            >
              <RiLockPasswordLine
                className="w-6 h-full flex justify-center items-center py-2 mr-2 opacity-80 "
                style={{ color: "rgba(111,206,232)" }}
              />
              <input
                required
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="items-center rounded-3xl w-[90%] outline-none text-base text-gray-400 focus:text-black "
              />
            </div>
            <div
              className="border-none bg-white rounded-3xl h-12 w-80 flex px-2  mt-6  lg:mx-0 mx-6"
              style={{
                boxShadow: "8px 0 15px rgba(111,206,231)",
              }}
            >
              <BsTelephone
                className="w-8 h-full flex justify-center items-center p-2 "
                style={{ color: "rgba(111,206,231)" }}
              />
              <input
                required
                type="text"
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className=" items-center w-[85%]  outline-none text-base text-gray-400 focus:text-black  "
              />
            </div>

            {/* button */}
            <button
              className="mt-5  bg-gradient-to-r from-[#6FCEE8] to-[#0f73e4]  h-12 w-f rounded-3xl items-center flex justify-center hover:cursor-pointer lg:mx-0 mx-6 "
              style={{
                boxShadow: "8px 0 15px rgba(111,206,231)",
              }}
            >
              <p className="text-white font-bold">SIGN IN</p>
            </button>
          </form>

          <p className="lg:mt-3 my-3 text-[#76cbe2e0]">
            Have an account?{" "}
            <span
              className="text-[#3f99ff] hover:cursor-pointer"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
        <div className="w-[40%] h-full hidden lg:block">
          <img
            className="w-full  h-full rounded-r-3xl"
            src="https://img.freepik.com/free-photo/beautiful-girl-walks-with-surfboard-wild-beach-amazing-view-from-top_72229-1193.jpg?w=360&t=st=1692538628~exp=1692539228~hmac=94f2cbf3dcd3dda785c0d736d45758b1a91639ceb71da484fa7b0f34650da190"
            alt="123"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
