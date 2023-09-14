import React from "react";
import { useNavigate } from "react-router-dom";

const UserWithoutRoute = ({ children }) => {
  const Token = localStorage.getItem("token");
  const navigate = useNavigate();
  return Token ? (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <p className="text-2xl"> you login already Please back to home page </p>
      </div>
      <div
        onClick={() => navigate("/homepage")}
        className="hover:cursor-pointer text-3xl font-semibold"
      >
        Back to Login Page
      </div>
    </div>
  ) : (
    children
  );
};

export default UserWithoutRoute;
