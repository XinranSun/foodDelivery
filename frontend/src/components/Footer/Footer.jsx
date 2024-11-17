import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rerum aut laboriosam, ipsa eum
            natus minus itaque aliquam reiciendis iusto
            illum, nostrum quasi saepe voluptatibus rem
            assumenda tempora nam fugiat nesciunt?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>home</li>
            <li>about us</li>
            <li>delivery</li>
            <li>provacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>get in touch</h2>
          <ul>
            <li>+ 1800652770</li>
            <li>sxr473@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p >
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
