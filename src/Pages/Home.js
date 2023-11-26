import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ButtonContainer from "../components/ButtonContainer";

export default function Home() {
  return (
    <div className="home-container" id="home-container">
      <div
        className="background-rect"
        style={{ backgroundColor: "rgb(230, 218, 206)" }}
      ></div>

      <div className="content-container">
        <div
          className="content-rect"
          style={{ backgroundColor: "rgb(244, 236, 230)" }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/76401788?v=4"
            alt=""
          />
          <h1>
            Kutman <br /> Eshenkulov
          </h1>
          <div className="line"></div>
          <ButtonContainer className="content-button" />
          <h2>SOFTWARE ENGINEER</h2>

          <div className="content-contact">
            <ul className="mt-2">
              <a
                href="https://www.instagram.com/_.kutman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.pinterest.com/kutmanesenkulov/_saved/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a
                href="https://www.facebook.com/kutman.eshenkulov.50/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.linkedin.com/in/kutman-eshenkulov-186842233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </ul>
          </div>
        </div>
        <div className="content">
          <h1>
            <div className="slide"></div>Hello
          </h1>

          <h2>Here's who I am & what I do</h2>

          <ButtonContainer className="button-container" />

          <p className="description">
            My name is Kutman. I am student at Ala-Too University, Computer
            Science Department. My hobby is reading books, watching films and
            learging something new.
            <br />
            <br />I think that I'm an analytical, dependable, and responsible
            person.
          </p>
        </div>
      </div>
    </div>
  );
}
