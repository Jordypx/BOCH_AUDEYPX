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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        console.log("Email sent successfully");
        // You can display a success message to the user here.
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="header_bg">
        <header className="flex justify-between p-4 items-center">
          <div className="embed flex">
            <Link to="/">
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

        <div className="contact-us">
          <div className="head">
            <h1>Contact Us </h1>

            <p>
              contact us now to meet your needs and desire at embed digital
              solutions
            </p>
          </div>

          <div className="contact-display">
            <form onSubmit={handleSubmit}>
              <input
                placeholder="your email address"
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />

              <input
                type="text"
                name="name"
                placeholder="your name"
                onChange={handleChange}
                value={formData.name}
                required
              />

              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                placeholder="your message"
                onChange={handleChange}
                value={formData.message}
                required
              />

              <div className="btn-message">
                <button type="submit">Send Message</button>
              </div>
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

export default Contact;
