import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
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

        <div className="contact-us">
          <div className="head">
            <h1>Contact Us </h1>

            <p>
              contact us now to meet your needs and desire at embed digital
              solutions
            </p>
          </div>

          <div className="contact-display">
            <form>
              <input
                placeholder="your email address"
                type="email"
                name="email"
                required
              />

              <input type="text" placeholder="your name" />

              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="your message"
              />

              <button>Send Message</button>
            </form>
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

export default Contact;
