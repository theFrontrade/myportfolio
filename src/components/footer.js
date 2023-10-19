import React from "react";

const Footer = () => {
  const date = new Date();
  console.log(date);
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="flex">
          <div className="footer-left">
            <h5 className="dev-widget">
              Copyright - &copy; {date.getFullYear()}{" "}
            </h5>
          </div>
          <div className="footer-center flex centralized-h centralized-v">
            <h5>Projects</h5>
            <span>|</span>
            <h5>About</h5>
            <span>|</span>
            <h5>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRspgtcsjqHFSZVTTdPNKNJcfDbMvpwgKbbVSZfcQKrgLnxcjKPQTwBWFxbWzGphfhtKNDG"
                rel="noreferrer"
                target="_blank"
              >
                Hire me
              </a>
            </h5>
          </div>
          <div className="footer-right">
            <div className="flex">
              <div className="social flex">
                <a href="https://twitter.com/thefrontrade">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/thefrontrade">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/thefrontrade">
                  <i className="fab fa-github"></i>
                </a>
              </div>
              <button>
                <a href="SamuelAdeniyiResume.pdf" rel="noreferrer" download>
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
