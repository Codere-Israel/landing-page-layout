import React from "react";
import App from "../App";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "../components/PageNotFound";
import Root from "../components/Root";

export default function LpRoutes() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/page-not-found" element={<PageNotFound />} />
        <Route exact path={`${location.pathname}`} element={<App />} />
      </Routes>
    </>
  );
}
