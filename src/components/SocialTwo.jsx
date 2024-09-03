import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/jeffrey.martinez.90813/",
  },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/martinezjf2/",
  },
  {
    iconName: "linkedin",
    link: "https://www.tiktok.com/",
  },
  {
    iconName: "medium",
    link: "https://www.tiktok.com/",
  }
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
