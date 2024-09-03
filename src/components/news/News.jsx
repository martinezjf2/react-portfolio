import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <div className="shane_tm_section" id="news">
      <div className="shane_tm_news">
        <div className="container">
          <div className="shane_tm_title">
            <span>News</span>
            <h3>Latest News</h3>
          </div>
          {/* End shane_tm_title */}
          <div className="news_list">
            <ul>
              <li>
                <div className="list_inner">
                  <div className="image" onClick={toggleModalOne}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalOne}>
                      Developers watch out for these burnout symptoms
                    </h3>
                    <p className="date">
                      By <a href="#">Alex Watson</a> <span>20 May 2020</span>
                    </p>
                  </div>
                  {/* End details */}

                  {/* Start Modal */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModalOne}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close icon */}

                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/1.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}

                          <div className="details">
                            <h3 className="title">
                              How to be appreciated for your hard work as a
                              developer
                            </h3>
                            <p className="date">
                              By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span>
                            </p>
                          </div>
                          {/* End details */}

                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* End description */}
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                          </div>
                          {/* End news share */}
                        </div>
                      </div>
                      {/* End box inner */}
                    </div>
                    {/* End modal box news */}
                  </Modal>
                  {/* End modal */}
                </div>
              </li>
              {/* End single blog */}

              <li>
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwo}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/2.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalTwo}>
                      How to be appreciated for your hard work as a developer
                    </h3>
                    <p className="date">
                      By <a href="#">Brook Kennedy</a>{" "}
                      <span>07 April 2020</span>
                    </p>
                  </div>
                  {/* End details */}

                  <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close modal */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/2.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              How to be appreciated for your hard work as a
                              developer
                            </h3>
                            <p className="date">
                              By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span>
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* End description */}
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                          </div>
                          {/* End news share */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                  {/* End modal */}
                </div>
                {/* End list inner */}
              </li>
              {/* End single blog */}

              <li>
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThree}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/3.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalThree}>
                      How designers and developers can collaborate better
                    </h3>
                    <p className="date">
                      By <a href="#">Paola Atkins</a> <span>02 March 2020</span>
                    </p>
                  </div>
                  {/* END DETAILS */}

                  {/* Start Modal */}
                  <Modal
                    isOpen={isOpen3}
                    onRequestClose={toggleModalThree}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button
                        className="close-modal"
                        onClick={toggleModalThree}
                      >
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE MODAL */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/3.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <h3 className="title">
                              How to be appreciated for your hard work as a
                              developer
                            </h3>
                            <p className="date">
                              By <a href="#">Brook Kennedy</a>{" "}
                              <span>07 April 2020</span>
                            </p>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                {/* END LIST INNER */}
              </li>
              {/* End single blog */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
