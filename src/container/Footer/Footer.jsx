import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">201 W 25th St, Sapa, Shege 720, Nigeria</p>
        <p className="p__opensans">+234 902-346-3644</p>
        <p className="p__opensans">+234 913-680-5599</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "Revenge might probably be the only dish best served cold."
        </p>
        <img src={images.spoon} alt="spoon_img" style={{ marginTop: "15px" }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 Am - 10:00 Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 Am - 09:00 Pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Ratatouille. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
