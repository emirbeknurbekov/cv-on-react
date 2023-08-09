import React from "react";
import "./Education.css";
import educationImg from "../../img/education__img.jpg";
import sideLine from "../../icons/Side Line.svg";
const Education = () => {
  return (
    <section id="education">
      <div class="container">
        <h2 class="education__section__title">Education</h2>
        <div class="education__block">
          <div class="education__line_left">
            <img src={sideLine} alt="error" class="education__line" />
          </div>
          <div class="education__block__content">
            <div class="education__block__content__item">
              <h3 class="education__title">High School</h3>
              <div class="education__title_second">
                Pretoria Boys South Africa
              </div>
              <div class="education__descr">
                Musk attended Pretoria Boys High School, a renowned secondary
                school in Pretoria, South Africa.
              </div>
            </div>

            <div class="education__block__content__item">
              <h3 class="education__title">University</h3>
              <div class="education__title_second">
                Queen's University Ohaio,Canada
              </div>
              <div class="education__descr">
                After completing high school, Musk moved to Canada to attend
                Queen's University in Kingston, Ontario.
              </div>
            </div>

            <div class="education__block__content__item">
              <h3 class="education__title">University of Pennsylvania</h3>
              <div class="education__title_second">Philadelphia, USA</div>
              <div class="education__descr">
                He pursued a dual Bachelor of Science degree in Physics and
                Economics, graduating in 1997.
              </div>
            </div>
          </div>
          <img src={educationImg} alt="error" class="education__img" />
        </div>
      </div>
    </section>
  );
};

export default Education;
