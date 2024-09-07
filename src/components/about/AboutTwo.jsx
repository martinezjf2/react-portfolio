import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                  {/* <img src="/img/slider/jeff.png" alt="placeholder" /> */}


                  {/* <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/2.jpg)" }}
                  ></div> */}
                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/slider/3.png)" }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Creative Developer based in New York, USA</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    My greatest satisfaction comes from helping others grow and being part of their success stories.
                    I love tackling challenges with problem-solving techniques.
                    I’m the kind of person who makes the most of every moment, whether it’s
                    celebrating achievements with family and friends or hitting the gym to motivate my
                    brothers to push harder. I also value tough conversations and being there as a shoulder
                    to lean on when someone needs support.
                  </p>
                  
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/Jeffrey Martinez Resume.pdf" download>
                    Download CV
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
