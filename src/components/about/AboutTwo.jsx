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
                    I'm a developer who loves bringing creative ideas to life
                    through web applications. Whether learning a new language or
                    enhancing projects with user-friendly features, I’m always
                    looking to push my limits.
                  </p>
                  <p style={{ paddingTop: "20px" }}>
                    Outside of coding, I enjoy spending time with my family,
                    visiting amusement parks, exploring new places, and relaxing
                    by playing guitar outdoors.
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
