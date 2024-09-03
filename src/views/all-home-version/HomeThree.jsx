import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderThree";
import About from "../../components/about/AboutThree";
import Portfolio from "../../components/portfolio/PortfolioTwo";
import Skills from "../../components/skills/SkillsTwo";
import Video from "../../components/video/VideoTwo";
import Brand from "../../components/BrandAnimation";
import Testimonial from "../../components/testimonial/TestimonialTwo";
import News from "../../components/news/NewsTwo";
import CallToAction from "../../components/calltoactions/CallToActionTwo";
import Footer from "../../components/footer/Footer";

const HomeThree = () => {
  return (
    <div className="home-three">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      <Skills />
      {/* End Skills Section */}

      <Video />
      {/* End Video Section */}

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

      <div className="shane_tm_section">
        <div className="shane_tm_testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div className="left" data-aos="fade-up" data-aos-duration="1200">
                <div className="shane_tm_title">
                  <span>Testimonials</span>
                  <h3>What clients say about my portfolio template</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End  shane_tm_testimonials*/}

      <News />
      {/* End Blog Section */}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default HomeThree;
