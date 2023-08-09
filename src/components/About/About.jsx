import React from "react";
import "./About.css";
import profile from "../../img/profile.jpg";
import insta from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";
import google from "../../icons/google.svg";
import linkedin from "../../icons/linkedin.svg";
import twitter from "../../icons/twitter.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__block_top">
          <h2 className="about__block_top__title">Elon Musk</h2>
          <p className="about__block_top__descr">
            Ceo/Enterpreuner/Engineer/Inventor
          </p>
        </div>
        <div className="about__block_bottom">
          <div className="profile">
            <img src={profile} alt="error" />
          </div>
          <ul className="about__block_bottom__social">
            <li>
              <a href="#">
                <img src={insta} alt="error" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="error" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={google} alt="error" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="error" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="error" />
              </a>
            </li>
          </ul>
          <p className="about__block_bottom__descr">
            Seeking a challenging executive position to leverage my expertise in
            technology, renewable energy, and space exploration to make a
            profound impact on society and shape the future of humanity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
