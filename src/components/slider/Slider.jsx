import React from "react";

const Slider = () => {
  return (
    <>
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/4.jpg)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Ave</span> Brook<span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Independent Web Developer
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};

export default Slider;
