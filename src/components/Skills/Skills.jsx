import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="skills__section__title">Skills</h2>
        <div className="skills__block">
          <div className="skills__article">
            <h2 className="skills__title">Professional</h2>
            <ul className="skills__item">
              <div className="skills__data">
                <li className="skills__descr">Innovation</li>
                <li className="skills__percentage">90%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Project management</li>
                <li className="skills__percentage">85%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Public speaking</li>
                <li className="skills__percentage">98%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Leadership</li>
                <li className="skills__percentage">89%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
            </ul>
          </div>

          <div className="skills__article">
            <h2 className="skills__title">Languages</h2>
            <ul className="skills__item">
              <div className="skills__data">
                <li className="skills__descr">English(Native)</li>
                <li className="skills__percentage">100%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Spanish</li>
                <li className="skills__percentage">85%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Kyrgyz</li>
                <li className="skills__percentage">1%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">French</li>
                <li className="skills__percentage">89%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
            </ul>
          </div>

          <div className="skills__article">
            <h2 className="skills__title">Personal</h2>
            <ul className="skills__item">
              <div className="skills__data">
                <li className="skills__descr">Punctual</li>
                <li className="skills__percentage">90%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Communicative</li>
                <li className="skills__percentage">67%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Analytical skill</li>
                <li className="skills__percentage">99%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
              <div className="skills__data">
                <li className="skills__descr">Leadership</li>
                <li className="skills__percentage">89%</li>
              </div>
              <input
                type="range"
                className="slider"
                min="0"
                max="100"
                value="50"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
