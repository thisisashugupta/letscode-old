import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";

import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}
