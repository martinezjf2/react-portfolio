import React from "react";

const Footer = () => {
  return (
    <>
      <div className="shane_tm_section">
        <div className="shane_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} by{" "}
                <a
                  href="https://jeffreys-portfolio.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jeffrey Martinez
                </a>
                . All rights reserved.
              </p>
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End shane_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
