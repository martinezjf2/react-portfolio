import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="texts">
            <p>
              I want to recognize Jeffrey Martinez for his outstanding
              contributions as a technical coach and community builder. In my
              capacity as Jeffrey's direct manager, though our time working
              together has been relatively short, I have witnessed his
              exceptional talent and dedication.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/cody.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Cody Green</span>
                </h3>
                <h3 className="job">
                  <span>Technical Faculty Manager @ Flatiron School</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              Jeffrey is one of the most consistently positive and upbeat people
              I have ever worked with. I was his team lead, and we collaborated
              on documentation, training materials, and best practices for
              supporting software engineering students.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/dom.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Dominique De Leon</span>
                </h3>
                <h3 className="job">
                  <span>Former Tech Lead @ Flatiron School</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              What truly sets Jeffrey apart is his exceptional talent as a
              technical coach. He has an innate ability to explain complex
              concepts in a clear and concise manner, making him an invaluable
              resource for team members seeking guidance and mentorship.
              Jeffrey's patience, approachability, and genuine interest in the
              success of others have created a nurturing environment where
              individuals can thrive and reach their full potential. I have
              witnessed firsthand the positive impact he has had on the
              professional growth of several team members, myself included.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/luis.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Luis Dejesus Castro</span>
                </h3>
                <h3 className="job">
                  <span>Technical Coach @ Flatiron School</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              Jeffrey has been an integral part of the Technical Coach Team. He
              has helped hundreds of students work through road blocks and
              become confident software engineers. Jeffrey is not only smart and
              technically strong, he is incredibly patient and always approaches
              challenges with positivity. I can't wait to see where Jeffrey goes
              and hope that we'll be able to work together again!
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/may.jpeg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>May Cheung</span>
                </h3>
                <h3 className="job">
                  <span>Senior Director of Instruction @ Flatiron School</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
      </Slider>
    </ul>
  );
}
