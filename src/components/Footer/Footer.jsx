import React from "react";
import "./Footer.css";
import printerIcon from "../../icons/🦆 icon _printer_.svg";
import telephoneIcon from "../../icons/🦆 icon _phone telephone_.svg";
import mailIcon from "../../icons/🦆 icon _mail_.svg";
import worldIcon from "../../icons/🦆 icon _world_.svg";
import localIcon from "../../icons/🦆 icon _local_.svg";

const Footer = () => {
  return (
    <section id="contact">
      <div class="container">
        <h2 class="contact__section__title">Contact</h2>
        <div class="contact__block">
          <div class="contact__block__left">
            <div class="contact__block__left__article">
              <div className="contact__block__left__article__block">
                <img src={telephoneIcon} alt="error" />
                <span class="contact__block__left__descr">
                  {" "}
                  +880 - 12345 - 67890
                </span>
              </div>
              <div className="contact__block__left__article__block">
                <img src={printerIcon} alt="error" />
                <span class="contact__block__left__descr">
                  {" "}
                  +880 - 12345 - 67890
                </span>
              </div>
              <div className="contact__block__left__article__block">
                <img src={mailIcon} alt="error" />
                <span class="contact__block__left__descr">
                  {" "}
                  emailid@domain.com
                </span>
              </div>
              <div className="contact__block__left__article__block">
                <img src={worldIcon} alt="error" />
                <span class="contact__block__left__descr">
                  {" "}
                  websiteaddresslink.com
                </span>
              </div>
              <div className="contact__block__left__article__block">
                <img src={localIcon} alt="error" />
                <span class="contact__block__left__descr">
                  {" "}
                  25/A New Eskaton Road, Maghbazar
                </span>
              </div>
            </div>
          </div>
          <div class="contact__block__right">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Subject" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Message" />
            <button class="contact__block__right__btn">Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
