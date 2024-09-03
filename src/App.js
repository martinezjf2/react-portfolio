import React, { useEffect } from "react";
import AllRouter from "./router/AllRouter";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    document.body.classList.add("loaded");
  }, []);
  return (
    <div className="shane_tm_all_wrap">
      <ScrollToTop />
      <AllRouter />
    </div>
  );
};

export default App;
