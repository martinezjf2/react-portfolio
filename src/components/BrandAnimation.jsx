import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partnerList = [
  { img: "1", animationDealay: "" },
  { img: "2", animationDealay: "30" },
  { img: "3", animationDealay: "60" },
  { img: "4", animationDealay: "90" },
  { img: "5", animationDealay: "120" },
  { img: "6", animationDealay: "150" },
  { img: "7", animationDealay: "180" },
  { img: "8", animationDealay: "210" },
];

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
            <img
              src={`img/partners/${val.img}.png`}
              alt="partners brand"
              data-aos="fade"
              data-aos-duration="1200"
              data-aos-delay={val.animationDealay}
            />
          </li>
        ))}
        {/* End single parter image */}
      </Slider>
    </ul>
  );
}
