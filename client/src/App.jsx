import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Root from "./routes/root";
import Contact from "./routes/contact";

import { Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <h1>hello men</h1>
      <Routes>
        <Route exact path="/">
          <Root />
        </Route>
        <Route path="/about">
          <Contact />
        </Route>
        {/* <Route path="/:user"> <User /></Route>
        <Route>{/* <NoMatch /> </Route> */}
      </Routes>
    </>
  );
}
