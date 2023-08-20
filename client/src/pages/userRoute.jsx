import React from "react";
import { useNavigate } from "react-router-dom";

const UserRoute = ({ children }) => {
  const Token = localStorage.getItem("token");
  const navigate = useNavigate()
  return Token ? (
    children
  ) : (
    <div  className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <p className="text-2xl"> Please Login First</p>
      </div>
      <div onClick={()=>navigate("/")} className="hover:cursor-pointer text-3xl font-semibold">Back to Login Page</div>
    </div>
  );
};

export default UserRoute;
