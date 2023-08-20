import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginUser } from "../../api/authAction";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberme, setRememberme] = useState(false);

  const [value, setValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault(e);
    dispatch(loginUser(value.username, value.password)).then((status) => {
      if (status == true) {
        setTimeout(() => {
          navigate("/homepage");
        }, 4000);
      }
    });
  };
  return (
    <div className="flex  justify-center items-center h-screen bg-slate-50">
      <div
        className="w-[800px] h-[600px] bg-white rounded-3xl  flex "
        style={{
          boxShadow: "0  5px 10px 2px rgba(186,229,247)",
        }}
      >
        <div className="w-[60%] h-full flex flex-col  items-center">
          <p className="text-4xl font-medium pt-32">LOGIN !</p>
          <p className="text-base pt-2 pb-7">Sign into Your account</p>
          <form
            className="flex flex-col justify-between "
            onSubmit={handleLogin}
          >
            <div
              className="border-none bg-white rounded-3xl h-12 w-80 flex px-2   "
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
              className="border-none bg-white rounded-3xl h-12 w-80 flex px-3  mt-6 "
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
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="items-center rounded-3xl w-[90%] outline-none text-base text-gray-400 focus:text-black "
              />
            </div>

            <div className="flex justify-between mt-4">
              <div className="flex justify-center items-center">
                <div
                  className="px-2  hover:cursor-pointer"
                  style={{ color: "rgba(111,206,232)" }}
                  onClick={() => setRememberme(!rememberme)}
                >
                  {rememberme ? (
                    <AiFillCheckCircle />
                  ) : (
                    <AiOutlineCheckCircle />
                  )}
                </div>
                <p
                  className="text-[#4c92a5]  hover:cursor-pointer"
                  onClick={() => setRememberme(!rememberme)}
                >
                  Remember me
                </p>
              </div>
              <p className="text-[#4c92a5] hover:cursor-pointer">
                Forgot password?
              </p>
            </div>
            {/* button */}
            <button
              className="mt-5  bg-gradient-to-r from-[#6FCEE8] to-[#0f73e4]  h-12 w-f rounded-3xl items-center flex justify-center hover:cursor-pointer "
              style={{
                boxShadow: "8px 0 15px rgba(111,206,231)",
              }}
            >
              <p className="text-white font-bold">SIGN IN</p>
            </button>
          </form>

          <p className="mt-3 text-[#76cbe2e0]">
            Dont't have an account?{" "}
            <span
              className="text-[#3f99ff] hover:cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Create
            </span>
          </p>
        </div>
        <div className="w-[40%] h-full">
          <img
            className="w-full  h-full rounded-r-3xl"
            src="https://img.freepik.com/free-photo/professional-cyclist-woman_23-2149703291.jpg?w=360&t=st=1692511736~exp=1692512336~hmac=dba36c011345ba5889c072533df7d878fc09491216801f78faa0bd9824a30ecf"
            alt="123"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
