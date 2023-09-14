import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import UserRoute from "../pages/userRoute";
import UserWithoutRoute from "../pages/userWithoutRoute";
import UserPage from "../pages/UserPage";

const Router = () => {
  const Token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/homepage"
          element={
            <UserRoute>
              <HomePage />
            </UserRoute>
          }
        />

        <Route
          path="/user"
          element={
            <UserRoute>
              <UserPage />
            </UserRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
