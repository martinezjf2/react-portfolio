import React from "react";
// import Preview from "../views/Preview";
// import HomeOne from "../views/all-home-version/HomeOne";
import HomeTwo from "../views/all-home-version/HomeTwo";
// import HomeThree from "../views/all-home-version/HomeThree";
// import HomeFour from "../views/all-home-version/HomeFour";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";

const AllRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeTwo />} />
        {/* <Route path="/home-one" element={<HomeOne />} />
        <Route path="/home-two" element={<HomeTwo />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/home-four" element={<HomeFour />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRouter;
