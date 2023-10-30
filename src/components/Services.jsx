import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`header_bg ${isOpen ? "menu-open" : ""}`}>
        <header className="flex justify-between gap-5 items-center p-5">
          <div className="">
            <h1 className="text-white text-lg font-semibold">Embed Digital</h1>
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

        <div className="key-features-pa">
          <div className="head">
            <h1>Platforms Key Features</h1>
          </div>

          <div className="services-key">
            <div className="features-boxes">
              <div className="features">
                <div className="">
                  <h1>1</h1>
                </div>

                <div className="">
                  <p>swift and easy development</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>2</h1>
                </div>

                <div className="">
                  <p>insurance industry expertise</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>3</h1>
                </div>

                <div className="">
                  <p>software as a services provider</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>4</h1>
                </div>

                <div className="">
                  <p>enterprise data warehouse</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>5</h1>
                </div>

                <div className="">
                  <p>big data bi</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>6</h1>
                </div>

                <div className="">
                  <p>omni channel customer experience and apis</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>7</h1>
                </div>

                <div className="">
                  <p>flexible and modular product design</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>8</h1>
                </div>

                <div className="">
                  <p>policy and claim management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solutions-cases">
          <div className="headies">
            <h1>EDS STANDARD PLATFORM SOLUTION</h1>
          </div>

          <div className="license-cases">
            <div className="case">
              <ul>
                <li>Automated Underwriting</li>
                <li>Digital Management</li>
                <li>Agent Management</li>
                <li>Group Underwriting</li>
                <li>Extended Warranty</li>
                <li>Motor Telematics</li>
              </ul>
            </div>

            <div className="cases-used">
              <ul>
                <li>Wellness program</li>
                <li>Electronic</li>
                <li>SME Health</li>
                <li>Digital Broker</li>
                <li>E-Wallet</li>
                <li>Embeded Insurance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="table-container">
        <div className="structure">
          <h1>PERPETUAL LICENSE STRUCTURE</h1>
        </div>
        <table>
          <tr>
            <th>Modules</th>
            <th>user</th>
            <th>industry</th>
          </tr>
          <tr>
            <td>Automated UW</td>
            <td>Insurer</td>
            <td>Life & General</td>
          </tr>
          <tr>
            <td>Digital Claims Management</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Digital Claims Management</td>
            <td>Insurer</td>
            <td>Life</td>
          </tr>
          <tr>
            <td>Agent Management</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Agent Management</td>
            <td>Insurer</td>
            <td>Life</td>
          </tr>
          <tr>
            <td>Group UW</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Group UW</td>
            <td>Insurer</td>
            <td>Life</td>
          </tr>
          <tr>
            <td>Renewal Management</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Policy Servicing</td>
            <td>Insurer</td>
            <td>Life&General</td>
          </tr>
          <tr>
            <td>Policy Management</td>
            <td>Insurer</td>
            <td>Life&General</td>
          </tr>
          <tr>
            <td>Policy Management</td>
            <td>Insurer</td>
            <td>Life</td>
          </tr>
          <tr>
            <td>Digital Claims Management</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Motor Telematics</td>
            <td>Insurer</td>
            <td>General</td>
          </tr>
          <tr>
            <td>Wellness Program</td>
            <td>Insurer</td>
            <td>Life</td>
          </tr>
        </table>
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

export default Services;
