import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderTwo";
import About from "../../components/about/AboutTwo";
import Portfolio from "../../components/portfolio/PortfolioTwo";
// import Skills from "../../components/skills/SkillsTwo";
// import Video from "../../components/video/VideoTwo";
import Brand from "../../components/BrandAnimation";
// import Testimonial from "../../components/testimonial/TestimonialTwo";
// import Blog from "../../components/news/Blog";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";

const HomeTwo = () => {
  return (
    <div className="home-two">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <div className="shane_tm_section">
        <div className="shane_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End shane_tm_partners */}

      <About />
      {/* End About Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      {/* <Skills /> */}
      {/* End Skills Section */}

      {/* <Video /> */}
      {/* End Video Section */}

      {/* Testimonials Section */}
      {/* <div className="shane_tm_section" id="testimonials">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="shane_tm_title">
                  <span>Testimonials</span>
                  <h3>What do people think of me and my personality</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End  shane_tm_testimonials*/}

      {/* <Blog /> */}
      {/* End Blog Section */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeTwo;
