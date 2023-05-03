import React from "react";
import "./Footer.css";
import { FaFacebook, FaGoogle, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center pt-4 pb-1"> Pure Korean Foods</h3>
      <div className="footerNavContainer">
        <ul className="footerNav">
          <li>Home</li>
          <li>About us</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="socialNavContainer">
        <ul className="socialNav">
          <li>
            <FaFacebook></FaFacebook>
          </li>
          <li>
            <FaGoogle></FaGoogle>
          </li>
          <li>
            <FaLinkedinIn></FaLinkedinIn>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
