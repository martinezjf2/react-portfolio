import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialTwo() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
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
              I want to recognize Jeffrey Martinez for his outstanding contributions as a technical coach and community builder.
              In my capacity as Jeffrey's direct manager, though our time working together has been relatively short,
              I have witnessed his exceptional talent and dedication.
              <br></br><br></br>
              Jeffrey has been instrumental in fostering a supportive learning environment for
              aspiring developers through his role as a technical coach. He has organized events
              aimed at preparing students for the SE program, demonstrating both his technical
              expertise and his ability to build community.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/1.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Cody Green</span>
                </h3>
                <h3 className="job">
                  <span>Technical Faculty Manager</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
              Jeffrey is one of the most consistently positive and upbeat people I have ever worked with.
              I was his team lead, and we collaborated on documentation, training materials, and best practices
              for supporting software engineering students.
              <br></br><br></br>
              Jeffrey is adaptable, curious, and a team player. He is always ready to jump in and help students and coaches,
              try new strategies, and offer a fresh perspective during planning sessions.
              Whether working 1:1 or 1:many with students, Jeffrey approaches teaching with a sense of
              humor and an ability to make technical concepts simple and accessible. Students consistently give him
              favorable reviews, and he would be an asset to any team.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/2.jpg"
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
              What truly sets Jeffrey apart is his exceptional talent as a technical coach. He has an innate ability to explain complex concepts in a clear and concise manner, making him an invaluable resource for team members seeking guidance and mentorship. Jeffrey's patience, approachability, and genuine interest in the success of others have created a nurturing environment where individuals can thrive and reach their full potential. I have witnessed firsthand the positive impact he has had on the professional growth of several team members, myself included.
              <br></br><br></br>
              Beyond his technical prowess and coaching abilities, Jeffrey's strong leadership skills have been instrumental in driving successful projects and fostering collaboration within our team. He is an excellent communicator, adept at facilitating effective cross-functional communication and ensuring alignment between team members. His natural ability to motivate and inspire others has helped foster a culture of professionalism and excellence.
            </p>
            <div className="author">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/about/3.jpg"
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
      </Slider>
    </ul>
  );
}
