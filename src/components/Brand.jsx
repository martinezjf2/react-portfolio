import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function BrandAnimation() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li className="item" key={i}>
            <img src={`img/partners/${val}.png`} alt="partners brand" />
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
