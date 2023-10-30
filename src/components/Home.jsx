import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`header_bg ${isOpen ? "menu-open" : ""}`}>
        <header className="flex justify-between gap-5 items-center p-5">
          <div className="embed">
            <h1 className=" logo text-lg font-semibold">Embed Digital</h1>
          </div>

          <div className="list-menu-II">
            <ul className="flex gap-10 items-center font-semibold">
              <li className="">
                <Link to="/">Home</Link>
              </li>
              <li className="">
                <Link to="/about">About</Link>
              </li>
              <li className="">
                <Link to="/services">Services</Link>
              </li>
              <li className="">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="">
                <Link to="/quotes">
                  <button>Get Quote</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="react_icon-hamburger" onClick={toggleMenu}>
            <div className="icon">
              {isOpen ? (
                <HiOutlineMenuAlt3 />
              ) : (
                <div
                  className={`list-ttr ${isOpen ? "slide-in" : "slide-out"}`}
                >
                  <div className="close-icon">
                    <AiOutlineClose />
                  </div>

                  <ul className="flex gap-10 items-center font-semibold">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="">
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li className="">
                      <Link to="/quotes">
                        <button>Get Quote</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="hero-image">
          <div className="explore_companies_way">
          <div className="text_explorer p-4">
            <div className="demo">
              <h1 className=" text-2xl">
                Democratising Access To Affordable Digital Platforms
              </h1>

              <p className="hero-paragraph">
                Embed Digital Solutions (EDS) deploys Digital Insurance
                solutions to deliver a competitive advantage within the
                insurance and health services value chain, by taking into
                account the needs of every stakeholder within the Ecosystem. Our
                cooperate Objective is to democratise access to affordable
                digital platforms for optimized financial performance for the
                benefit of all stakeholders.
              </p>
            </div>

            <div className="hero-btn">
              <button>Consult now</button>
            </div>
          </div>

          {/* <div className="img-home-progress">
            <div className="desk">
              <img src="../cyber101 (1).png" alt="cyber" />
            </div>
          </div> */}
          </div>
        </div>
      </div>

      <div className="it-solutions_s">
        <div className="text-flex-lonf">
          <div className="solutions_imgs_text">
            <h1 className="">DIGITAL SOLUTIONS ON ONE PLATFORM</h1>

            <p>
              Our low code and prepackaged platform is designed to ensure
              standard day-to-day <br /> insurance operations seamlessly. With
              minimal configurations, our platform enables insurers to achieve
              faster time-to-value by reducing the implementation time with
              these solutions.
            </p>

            <div className="hero-btn mt-4">
              <button>Consult now</button>
            </div>
          </div>

          <div className="solutions_img">
            <div className="img-solu">
              <img className="" src="../pngtree-business-analysis.png" alt="" />
            </div>
          </div>
        </div>

        <div className="service_list mt-20 mb-28">
          <div className="head-text-servies">
            <h1>What Are Our Platforms Key Features</h1>
          </div>

          <div className="key-features">
            <div className="features-text">
              <div className="">
                <p>Low code No code</p>
              </div>
            </div>
            <div className="features-text">
              AI & BI ENABLED DIGITAL ECOSYSTEMS&nbsp;
            </div>
            <div className="features-text">
              DIGITILIZING CUSTOMER JOURNEY&nbsp;
            </div>
            <div className="features-text">
              FLEXIBE AND MODULAR PRODUCT DESIGN&nbsp;
            </div>
            <div className="features-text">
              OMNI CHANNEL CUSTOMER EXPERIENCE AND APIs&nbsp;
            </div>
            <div className="features-text">Software As A Service Provider</div>
            <div className="features-text">Swift And Easy Deployment</div>
            <div className="features-text">
              Scalable And Reliable Cloud Architecture
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="flex justify-between">
          <div className="">
            <div className="logo-head">
              <h1>Embed Digital</h1>

              <p></p>
            </div>
            <div className="icons">
              <div className="text-xl">
                <BiLogoFacebook />
              </div>
              <div className="text-xl">
                <FaInstagram />
              </div>
              <div className="text-xl">
                <FaLinkedinIn />
              </div>
              <div className="text-xl">
                <FaTwitter />
              </div>
            </div>
          </div>

          <div className="links_footer">
            <div className="first-link mr-2 mt-1.5">
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
                <li>
                  <Link>
                    <button>Get Quote</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
