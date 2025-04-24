import React from "react";
import App from "../App";
import { Route, Routes } from "react-router-dom";

export default function LpRoutes() {
  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<App />} /> */}
        <Route exact path="/test-avner" element={<App />} />
        
      </Routes>
      <div>LpRoutes</div>
    </>
  );
}
