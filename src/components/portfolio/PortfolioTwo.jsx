import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = [
  "All",
  "Landing",
  "Email",
  "Newsletter",
  "Fullstack",
  "Shopify",
];

const portfolioItems = [
  {
    img: "/img/portfolio/realestate.png",
    title: "Portos",
    meta: "Landing",
    portfolioLink: "https://jeffrey-portos-landing-page.netlify.app/",
  },
  {
    img: "/img/portfolio/dvc.png",
    title: "DVC Newsletter Email",
    meta: "Newsletter",
    portfolioLink: "https://jeffrey-dvc-newletter-email.netlify.app",
  },
  {
    img: "/img/portfolio/seguidores.png",
    title: "Spanish Ministry",
    meta: "Fullstack",
    portfolioLink: "https://www.seguidoresdejesus.com",
  },
  {
    img: "/img/portfolio/sweetwater.png",
    title: "Sweetwater Receipt",
    meta: "Email",
    portfolioLink: "https://jeffreysweetwater-transactional-email.netlify.app",
  },
  {
    img: "/img/portfolio/guild.png",
    title: "Guild Education",
    meta: "Fullstack",
    portfolioLink: "https://guild-education-replica.herokuapp.com",
  },
  {
    img: "/img/portfolio/soccer.png",
    title: "Soccer.com",
    meta: "Email",
    portfolioLink: "https://jeffrey-soccer-promotional-email.netlify.app",
  },
  {
    img: "/img/portfolio/mixtiles.png",
    title: "Mixtiles Email",
    meta: "Email",
    portfolioLink: "https://jeffrey-mixtiles-promotional-email.netlify.app",
  },
  {
    img: "/img/portfolio/sketch.png",
    title: "Sketch Release",
    meta: "Email",
    portfolioLink: "https://jeffrey-sketch-release-email.netlify.app",
  },
];

const Portfolio = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredItems =
    selectedTab === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.meta === selectedTab);

  return (
    <div className="shane_tm_section" id="portfolio">
      <div className="shane_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="shane_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Creative Portfolio</h3>
                </div>
              </div>
            </div>
            {/* End shane_tm_title */}

            <div className="portfolio_filter">
              <Tabs onSelect={(index) => setSelectedTab(tabList[index])}>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

                <div className="portfolio_list has-effect">
                  <Gallery>
                    <ul className="gallery_zoom">
                      {filteredItems.length > 0 ? (
                        filteredItems.map((val, i) => (
                          <li
                            key={i}
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            data-aos-delay={val.delayAnimation}
                            style={{
                              opacity: 0,
                              transform: "translateY(20px)",
                              animation: `fadeIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards ${
                                i * 0.15
                              }s`,
                            }}
                          >
                            <div
                              className="inner"
                              style={{
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              <div className="entry shane_tm_portfolio_animation_wrap">
                                <Item
                                  original={val.img}
                                  thumbnail={val.img}
                                  width={1000}
                                  height={1000}
                                >
                                  {({ ref, open }) => (
                                    <img
                                      src={val.img}
                                      alt="portfolio"
                                      role="button"
                                      ref={ref}
                                      onClick={open}
                                    />
                                  )}
                                </Item>
                              </div>
                              <div className="mobile_title">
                                <h3>
                                  <a
                                    href={val.portfolioLink}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                  >
                                    {val.title}
                                  </a>
                                </h3>
                                <span>{val.meta}</span>
                              </div>
                            </div>
                          </li>
                        ))
                      ) : (
                        <p>Coming Soon...</p>
                      )}
                    </ul>
                  </Gallery>
                  {/* End filtered portfolio items */}
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
