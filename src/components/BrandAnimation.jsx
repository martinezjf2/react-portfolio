import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaReact,
  FaNode,
  FaSass,
  FaWordpress,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaSketch,
  // FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiShopify,
  SiGoogleanalytics,
  SiRubyonrails,
  SiZendesk,
  // SiKlaviyo,
  // SiConvertkit,
  // SiMjml,
  SiRubygems,
} from "react-icons/si";
// import { RiAmazonS3Line } from "react-icons/ri";

const partnerList = [
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiGoogleanalytics
          style={{ width: "100%", height: "100%", color: "#FFC107" }}
        />{" "}
        {/* Yellow */}
      </div>
    ),
    name: "Google Analytics",
    animationDelay: "",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiShopify
          style={{ width: "100%", height: "100%", color: "#7AB55C" }}
        />{" "}
        {/* Light Blue */}
      </div>
    ),
    name: "Shopify",
    animationDelay: "30",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaWordpress
          style={{ width: "100%", height: "100%", color: "#21759B" }}
        />{" "}
        {/* Blue */}
      </div>
    ),
    name: "WordPress",
    animationDelay: "90",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaReact style={{ width: "100%", height: "100%", color: "#61DBFB" }} />{" "}
        {/* Light Blue */}
      </div>
    ),
    name: "React",
    animationDelay: "120",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaSass style={{ width: "100%", height: "100%", color: "#CC6699" }} />{" "}
        {/* Pink */}
      </div>
    ),
    name: "Sass",
    animationDelay: "150",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiNextdotjs
          style={{ width: "100%", height: "100%", color: "#000000" }}
        />{" "}
        {/* Black */}
      </div>
    ),
    name: "Next.js",
    animationDelay: "210",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaNode style={{ width: "100%", height: "100%", color: "#8CC84B" }} />{" "}
        {/* Green */}
      </div>
    ),
    name: "Node.js",
    animationDelay: "270",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaJsSquare
          style={{ width: "100%", height: "100%", color: "#F7DF1E" }}
        />{" "}
        {/* Yellow */}
      </div>
    ),
    name: "JavaScript",
    animationDelay: "300",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaCss3Alt
          style={{ width: "100%", height: "100%", color: "#1572B6" }}
        />{" "}
        {/* Blue */}
      </div>
    ),
    name: "CSS3",
    animationDelay: "330",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaHtml5 style={{ width: "100%", height: "100%", color: "#E44D26" }} />{" "}
        {/* Red */}
      </div>
    ),
    name: "HTML5",
    animationDelay: "360",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiRubygems
          style={{ width: "100%", height: "100%", color: "#CC342D" }}
        />{" "}
        {/* Ruby */}
      </div>
    ),
    name: "Ruby",
    animationDelay: "390",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiRubyonrails
          style={{ width: "100%", height: "100%", color: "#CC0000" }}
        />{" "}
        {/* Ruby on Rails */}
      </div>
    ),
    name: "Ruby on Rails",
    animationDelay: "420",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaGithub style={{ width: "100%", height: "100%", color: "#181717" }} />{" "}
        {/* GitHub */}
      </div>
    ),
    name: "GitHub",
    animationDelay: "450",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaFigma style={{ width: "100%", height: "100%", color: "#F24E1E" }} />{" "}
        {/* Figma */}
      </div>
    ),
    name: "Figma",
    animationDelay: "480",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaSketch style={{ width: "100%", height: "100%", color: "#F7B500" }} />{" "}
        {/* Sketch */}
      </div>
    ),
    name: "Sketch",
    animationDelay: "510",
  },
  {
    icon: (
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SiZendesk
          style={{ width: "100%", height: "100%", color: "#03363D" }}
        />{" "}
        {/* Zendesk Support */}
      </div>
    ),
    name: "Zendesk Support",
    animationDelay: "540",
  },
  // {
  //   icon: (
  //     <div
  //       style={{
  //         width: "40px",
  //         height: "40px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiKlaviyo
  //         style={{ width: "100%", height: "100%", color: "#4DC528" }}
  //       />{" "}
  //       {/* Klaviyo */}
  //     </div>
  //   ),
  //   name: "Klaviyo",
  //   animationDelay: "570",
  // },
  // {
  //   icon: (
  //     <div
  //       style={{
  //         width: "40px",
  //         height: "40px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiMjml style={{ width: "100%", height: "100%", color: "#0068FF" }} />{" "}
  //       {/* MJML */}
  //     </div>
  //   ),
  //   name: "MJML",
  //   animationDelay: "600",
  // },
  // {
  //   icon: (
  //     <div
  //       style={{
  //         width: "40px",
  //         height: "40px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <RiAmazonS3Line
  //         style={{ width: "100%", height: "100%", color: "#FF9900" }}
  //       />{" "}
  //       {/* AWS S3 */}
  //     </div>
  //   ),
  //   name: "AWS S3",
  //   animationDelay: "630",
  // },
  // {
  //   icon: (
  //     <div
  //       style={{
  //         width: "40px",
  //         height: "40px",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <SiConvertkit
  //         style={{ width: "100%", height: "100%", color: "#FF6138" }}
  //       />{" "}
  //       {/* ConvertKit */}
  //     </div>
  //   ),
  //   name: "ConvertKit",
  //   animationDelay: "660",
  // },
];

export default function BrandAnimation() {
  var settings = {
    dots: false,
    arrows: false,
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
    <ul style={{ listStyle: "none", padding: 0 }}>
      <Slider {...settings}>
        {partnerList.map((val, i) => (
          <li
            className="item"
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#4b5563", // Customize color as needed
              animationDelay: `${val.animationDelay}ms`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "200px",
              }}
            >
              {val.icon}
              <p style={{ fontSize: "18px", marginTop: "8px", color: "#333" }}>
                {val.name}
              </p>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
}
