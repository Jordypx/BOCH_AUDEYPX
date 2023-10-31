import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`header_bg ${isOpen ? "menu-open" : ""}`}>
        <header className="flex justify-between gap-5 items-center p-5 mover">
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

        <div className="aboutus-header">
          <div className="how-embed-works">
            <div className="embed-works">
              <h1>How We Work</h1>

              <p>
                Embed Digital Solutions (EDS) deploys Digital Insurance
                solutions to deliver a competitive advantage within the
                insurance and health services value chain, by taking into
                account the needs of every stakeholder within the Ecosystem.
              </p>
            </div>
          </div>

          <div className="brand-distruptive">
            <h1>About Embed Digital</h1>

            <p>
              We are a pan-African software development and technological
              Business Solutions provider, that is shaping the future of
              automated digital technology by providing a new service that
              galvanizes and propels our client operational into a new era of
              sustainable growth. It unlocks endless possibilities in corporate
              efficiencies, and value creation whilst triggering a new level of
              customer satisfaction index in the insurance and other related
              service value chain whilst democratizing access to affordable
              Platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="bio">
        <div className="team-lead">
          <h1>Our Team Lead</h1>
        </div>
        <div className="bio-image-section">
          <div className="">
            <div className="bio-img">
              <img src="../steve.png" alt="" />
            </div>

            <div className="bio-text">
              <h1>Steve Ajdua</h1>

              <p>Country Business Manager</p>
              <div>(Nigeria & Africa Region)</div>
            </div>
          </div>

          <div className="bio-para-steve">
            <p>
              Steve Ajudua is an Actuary and the Country Business Manager(
              Nigeria and Africa Region) who has garnered over 25 years of
              experience in the financial services industry, Risk management,
              and digital technology. He is an Actuary and a Certified Insurance
              and Marketing Professional. He led the team at Coronation
              Financial Distribution, a company under the Coronation Group to
              set up their digital platform Architecture for Financial services
              sales and distribution. Before joining the Coronation Ecosystem,
              he worked with African Alliance as the GM of Business Development
              and was also the GM/Chief Marketing Office with Law Union & Rock
              (Now Tangerine Insurance)
            </p>

            <div>
              Steve is a serial subject matter expert in Digital technology,
              Sales, business development, Corporate Strategy, Risk
              Underwriting, Customer Experience, Claims, reinsurance and
              solutions development.
            </div>
          </div>
        </div>
      </div>

      <div className="affiliates">
        <div className="move-affiiates">
          <div className="foreign-head">
            <h1>Our Foreign Affiliates</h1>
          </div>

          <div className="oracle-partner">
            <div className="oracle-img">
              <img src="../kisspng-oracle.png" alt="" />
            </div>

            <div className="oracle-text">
              <p>
                Ozoned Digital has been selected as an implementation partner
                for Oracle OIPA for MENA Region including Pakistan
              </p>
              <p>
                Ozoned Digital is working with Oracle on a strategic
                collaboration to jointly package a go-to-market solution for
                MENA using Ozoned and Oracle platforms
              </p>
              <p>
                We have recently won the contract for the digital transformation
                for Jubilee Holdings (Kenya, Uganda and Tanzania-6 Companies in
                all).
              </p>
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

export default AboutUs;
