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
      <div className={`header_bg ${isOpen ? "menu-open" : ""}`}>
        <header className="flex justify-between gap-5 items-center p-5">
          <div className="embed">
            <h1 className="text-lg font-semibold">Embed Digital</h1>
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
      </div>
      <div className="quote-body">
        <div class="quote-container">
          <form id="contact" action="" method="post">
            <h3>Contact us for custom quote</h3>
            <h4>Please input details below</h4>
            <fieldset>
              <input placeholder="Your name" type="text" tabindex="1" required autofocus />
            </fieldset>
            <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Web Site (optional)" type="url" tabindex="4" required />
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
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

export default Quotes;
