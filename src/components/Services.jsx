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
      <div className="header_bg">
        <div className="flex justify-between p-4 items-center">
          <header className="logo text-lg font-semibold">
            <Link to="/">
              <h1>Embed Digital</h1>
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
                  <p>Swift and Easy Development</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>2</h1>
                </div>

                <div className="">
                  <p>Insurance Industry Expertise</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>3</h1>
                </div>

                <div className="">
                  <p>Software as a Service Provider</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>4</h1>
                </div>

                <div className="">
                  <p>Enterprise Data Warehouse</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>5</h1>
                </div>

                <div className="">
                  <p>Big Data Bi</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>6</h1>
                </div>

                <div className="">
                  <p>Omni Channel Customer Experience and APIs</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>7</h1>
                </div>

                <div className="">
                  <p>Flexible and Modular Product Design</p>
                </div>
              </div>
              <div className="features">
                <div className="">
                  <h1>8</h1>
                </div>

                <div className="">
                  <p>Policy and Claim Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="solutions-cases">
          <div className="headies">
            <h1>EDS Standard Platform Solution</h1>
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
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>MODULES</th>
              <th>USER</th>
              <th>INDUSTRY</th>
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
          </tbody>
        </table>
      </div>

      {/* 
      <div class="table-service-container">
<h1>Responsive Table</h1>
  <table class="rwd-table">
    <tbody>
      <tr>
        <th>Supplier Code</th>
        <th>Supplier Name</th>
        <th>Invoice Number</th>
        <th>Invoice Date</th>
        <th>Due Date</th>
        <th>Net Amount</th>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          UPS5005
        </td>
        <td data-th="Supplier Name">
          UPS
        </td>
        <td data-th="Invoice Number">
          ASDF19218
        </td>
        <td data-th="Invoice Date">
          06/25/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $8,322.12
        </td>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          UPS3449
        </td>
        <td data-th="Supplier Name">
          UPS South Inc.
        </td>
        <td data-th="Invoice Number">
          ASDF29301
        </td>
        <td data-th="Invoice Date">
          6/24/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $3,255.49
        </td>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          BOX5599
        </td>
        <td data-th="Supplier Name">
          BOX Pro West
        </td>
        <td data-th="Invoice Number">
          ASDF43000
        </td>
        <td data-th="Invoice Date">
          6/27/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $45,255.49
        </td>
      </tr>
      <tr>
        <td data-th="Supplier Code">
          PAN9999
        </td>
        <td data-th="Supplier Name">
          Pan Providers and Co.
        </td>
        <td data-th="Invoice Number">
          ASDF33433
        </td>
        <td data-th="Invoice Date">
          6/29/2016
        </td>
        <td data-th="Due Date">
          12/25/2016
        </td>
        <td data-th="Net Amount">
          $12,335.69
        </td>
      </tr>
    </tbody>
  </table>
</div> */}

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

        <p className="copyright">© 2024 Embed Digital Solutions</p>
      </footer>
    </div>
  );
};

export default Services;
