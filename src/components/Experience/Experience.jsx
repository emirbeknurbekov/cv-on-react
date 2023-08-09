import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <div class="container">
        <h2 class="experience__title">Professional Experience</h2>
        <div class="experience__block">
          <div class="experience__block_left">
            <div class="experience__block_left_top">
              <div class="experience__block_left_title">
                <h2>Chief Executive Officer</h2>
              </div>
              <div class="experience__block_left_descr">
                <p>Tesla Inc. (2004 - Present)</p>
                <p>
                  Pioneered the development and production of high-performance,
                  sustainable electric vehicles, including the Tesla Roadster,
                  Model S, Model 3, Model X, and Model Y.
                </p>
              </div>
            </div>
            <div class="experience__block_left_bottom">
              <div class="experience__block_left_title">
                <h2>Chief Executive Officer and Chief Technology Officer</h2>
              </div>
              <div class="experience__block_left_descr">
                <p>SpaceX (2002 - Present)</p>
                <p>
                  Successfully developed and launched the Falcon 1, Falcon 9,
                  Falcon Heavy, and Starship rockets, revolutionizing the space
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div class="experience__block_right">
            <div class="experience__block_right_top">
              <div class="experience__block_right_title">
                <h2>Founder</h2>
              </div>
              <div class="experience__block_right_descr">
                <p>The Boring Company (2016 - Present)</p>
                <p>
                  Established The Boring Company to revolutionize transportation
                  by constructing tunnels for high-speed travel.
                </p>
              </div>
            </div>

            <div class="experience__block_right_bottom">
              <div class="experience__block_right_title">
                <h2>Co-Founder</h2>
              </div>
              <div class="experience__block_right_descr">
                <p>Neuralink (2016 - Present)</p>
                <p>
                  Co-founded Neuralink to develop brain-machine interface
                  technology with the aim of enhancing human capabilities and
                  treating neurological conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
