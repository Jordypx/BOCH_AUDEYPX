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
      <div className="header_bg">
        <div className="flex justify-between p-4 items-center">
          <header className="logo text-lg font-semibold">
            <Link to="/">
              <h1 className=" logo text-lg font-semibold" >Embed Digital</h1>
            </Link>
          </header>

          <div className="icon">
            <div
              className={`hamicon ${isOpen ? "hide" : ""}`}
              onClick={toggleMenu}
            >
              <HiOutlineMenuAlt3 />
            </div>
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

          <div className={`menu_dropdown ${isOpen ? "open" : ""}`}>
            {isOpen && (
              <div>
                <div className="close-icon" onClick={toggleMenu}>
                  <AiOutlineClose />
                </div>

                <div>
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
              </div>
            )}
          </div>
        </div>

        <div className="hero-image">
          <div className="explore_companies_way">
            <div className="text_explorer p-3">
              <div className="demo">
                <h1 className=" text-2xl">
                  Democratising Access To Affordable Digital Platforms
                </h1>

                <p className="hero-paragraph">
                  Embed Digital Solutions (EDS) deploys Digital Insurance
                  solutions to deliver a competitive advantage within the
                  insurance and health services value chain, by taking into
                  account the needs of every stakeholder within the Ecosystem.
                  Our cooperate Objective is to democratise access to affordable
                  digital platforms for optimized financial performance for the
                  benefit of all stakeholders.
                </p>
              </div>

              <div className="changed_btn mt-4">
                <Link to="/contact">
                  <button className="btn_click">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="it-solutions_s">
        <div className="text-flex-lonf">
          <div className="solutions_imgs_text">
            <h1 className="">Digital Solutions On One Platform</h1>
            <p>
              Our low code and prepackaged platform is designed to ensure
              standard day-to-day <br /> insurance operations seamlessly. With
              minimal configurations, our platform enables insurers to achieve
              faster time-to-value by reducing the implementation time with
              these solutions.
            </p>
            <div className="hero-btn mt-4">
              <Link to="/quotes">
                <button>Get Quote</button>
              </Link>
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
            <h1>Our Key Features</h1>
          </div>

          <div className="key-features">
            <div className="features-text">
              <div className="">
                <p>Low code No code</p>
              </div>
            </div>
            <div className="features-text">
              AI & BI Enabled Digital Ecosystems&nbsp;
            </div>
            <div className="features-text">
              Digitalizing Customer Journey&nbsp;
            </div>
            <div className="features-text">
              Flexible And Modular Product Design&nbsp;
            </div>
            <div className="features-text">
              Omni Channel Customer Experience And APIs&nbsp;
            </div>
            <div className="features-text">Software As A Service Provider</div>
            <div className="features-text">Swift And Easy Deployment</div>
            <div className="features-text">
              Scalable And Reliable Cloud Architecture
            </div>
          </div>
        </div>
      </div>
      <div className="table-section">
        <div className="head-text-servies">
          <h1>Our Platform Solution</h1>
        </div>

        <table className="pricing-table">
          <tbody>
            <tr>
              <td width="30%" className="pricing-table-text">
                <h2>Select the package that best suits your needs.</h2>
              </td>
              <td className="bg-td" width="20%">
                <div className="pricing-table-item">
                  <div className="pricing-table-item-head">
                    <p>Lite Essential</p>
                  </div>
                </div>
              </td>
              <td className="bg-td" width="20%">
                <div className="pricing-table-item">
                  <div className="pricing-table-item-head">
                    <p>Lite Pro</p>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="pricing-table-list">
              <td>Digital Quotations & Illustrations</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Individual Retail Business</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Policy Acquisition</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Abandoned Cart</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Document Uploads & View</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Online Policy Issuance</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Basic Renewal Underwriting</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10060;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Multiple Notifications</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Endorsements Non-Financial</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Customer Complaints And Feedback</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Claims FNOL</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Claims Surveys</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10060;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
            <tr className="pricing-table-list">
              <td>Business Reporting & Analytics</td>
              <td>
                <span className="glyphicon glyphicon-ok"> &#10004;</span>
              </td>
              <td>
                <span className="glyphicon glyphicon-ok">&#10004;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer>
        <div className="flex justify-between">
          <div className="">
            <div className="logo-head">
              <Link to="/">
                <h1>Embed Digital</h1>
              </Link>
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
          </div>
        </div>
      </footer>

      <header className="">
        <Link to="/">
          <h1>Embed Digital</h1>
        </Link>
      </header>
    </div>
  );
};

export default Home;
