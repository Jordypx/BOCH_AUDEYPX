import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Quotes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="header_bg">
        <header className="flex justify-between p-4 items-center">
          <div className="embed flex">
            <Link to="">
              <h1 className=" logo text-lg font-semibold">Embed Digital</h1>
            </Link>
          </div>

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
        </header>
      </div>
      <div className="quote-body">
        <div className="quote-container">
          <form id="contact" action="" method="post">
            <h3>Contact us for custom quote</h3>
            <h4>Please input details below</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex="1"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabIndex="3"
                required
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Web Site (optional)"
                type="url"
                tabIndex="4"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabIndex="5"
                required
              ></textarea>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Submit
              </button>
            </fieldset>
          </form>
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
    </div>
  );
};

export default Quotes;
