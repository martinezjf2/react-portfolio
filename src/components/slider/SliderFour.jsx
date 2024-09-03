import React from "react";
import Particles from "react-tsparticles";
import TextLoop from "react-text-loop";

const Slider = () => {
  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="frame-layout__particles">
          <Particles
            id="tsparticles"
            options={{
              backgroundMode: {
                enable: true,
                zIndex: 1,
              },
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              fpsLimit: 70,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.4,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ddd",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 30,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 6,
                },
              },

              detectRetina: true,
            }}
          />
        </div>
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/3.jpg)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  Bostami
                  <br />
                </span>{" "}
                <TextLoop>
                  <span className="loop-text">Web Developer</span>
                  <span className="loop-text"> UI/UX Designer.</span>
                  <span className="loop-text"> Content Creator.</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                based in USA.
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
