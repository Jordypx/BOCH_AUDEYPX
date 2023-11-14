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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    website: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // After successful submission, reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
      number: "",
      website: "",
      // other form fields
    });

    try {
      const response = await fetch(
        "https://embedigital.com.ng/api/custom/getquotes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.status === 200) {
        setIsFormSubmitted(true);
        console.log("Email sent successfully");
        setTimeout(() => {
          setIsFormSubmitted(false);
        }, 3000);
      } else {
        console.error("Error sending the email");
        // You can display an error message to the user here.
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors here.
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
      </div>
      <div className="quote-body">
        <div className="quote-container">
          {isFormSubmitted && (
            <p className="text-xl text-center text-white font-bold">
              Mail has been successfully sent!
            </p>
          )}
          <form id="contact" onSubmit={handleSubmit}>
            <h3>Contact us for custom quote</h3>
            <h4>Please input details below</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                name="name"
                tabIndex="1"
                required
                autoFocus
                onChange={handleChange}
                value={formData.name}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Phone Number (optional)"
                type="tel"
                tabIndex="3"
                name="number"
                onChange={handleChange}
                value={formData.number}
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Web Site (optional)"
                type="url"
                name="website"
                tabIndex="4"
                onChange={handleChange}
                value={formData.website}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                tabIndex="5"
                name="message"
                required
                onChange={handleChange}
                value={formData.message}
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
        <p className="copyright">© 2024 Embed Digital Solutions</p>
      </footer>
    </div>
  );
};

export default Quotes;
