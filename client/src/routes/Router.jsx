import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import UserRoute from "../pages/userRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/homepage"
          element={
            <UserRoute>
              <HomePage />
            </UserRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
