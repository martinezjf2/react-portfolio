import React from "react";
import HomeTwo from "../views/all-home-version/HomeTwo";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
