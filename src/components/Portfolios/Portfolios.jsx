import React from "react";
import "./Portfolios.css";
import chatGptImg from "../../img/ChatGPT OpenAI vector illustration design (1).jpg";
import paypal from "../../img/paypal.jpg";
import spaceX from "../../img/spacex.jpg";
import tesla from "../../img/tesla.jpg";
import theBoringCompany from "../../img/theboringcompany.jpg";
import twitter from "../../img/twitter.png";
const Portfolios = () => {
  return (
    <section id="portfolio">
      <div class="container">
        <h2 class="portfolio__section__title">Portfolios</h2>
        <div class="portfolio__block">
          <ul class="portfolio__block__article">
            <li>
              <img src={chatGptImg} alt="ERROR" class="portfolio__block__img" />
            </li>
            <li>
              <img src={paypal} alt="ERROR" class="portfolio__block__img" />
            </li>
            <li>
              <img src={spaceX} alt="ERROR" class="portfolio__block__img" />
              <hr />
            </li>
            <li>
              <img src={tesla} alt="ERROR" class="portfolio__block__img" />
            </li>
            <li>
              <img
                src={theBoringCompany}
                alt="ERROR"
                class="portfolio__block__img"
              />
            </li>
            <li>
              <hr />
              <img src={twitter} alt="ERROR" class="portfolio__block__img" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
