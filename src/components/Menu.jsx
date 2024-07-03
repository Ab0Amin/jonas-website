import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ setLanguageState }) {
  const [opened, setopended] = useState(false);
  const [opened2, setopended2] = useState(true);
  function changelang(e) {
    setLanguageState(e.target.value);
    setopended(false);
  }

  return (
    <section class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container header-container">
        <div class="navbar-header">
          {/* <!-- lOGO TEXT HERE --> */}
          <a href="index.html" class="navbar-brand">
            <i class="fa fa-h-square"></i>ealth Center
          </a>
        </div>

        {/* <!-- MENU LINKS --> */}
        <div
          className={opened2 ? `collapse navbar-collapse` : `navbar-collapse`}
        >
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#top" class="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="smoothScroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#team" class="smoothScroll">
                Doctors
              </a>
            </li>
            <li>
              <a href="#news" class="smoothScroll">
                News
              </a>
            </li>
            <li>
              <a href="#google-map" class="smoothScroll">
                Contact
              </a>
            </li>
            <li class="appointment-btn">
              <a href="#appointment">Make an appointment</a>
            </li>
          </ul>
        </div>
        <div className="lan-btn">
          <div className="language-menu">
            {opened ? (
              <ul
                name="langauges"
                id="myul"
                className="selLang bg-gradient-primary"
              >
                <li onClick={changelang} value={0}>
                  English
                </li>
                <li onClick={changelang} value={1}>
                  Deutsch
                </li>
                <li onClick={changelang} value={2}>
                  Arabic
                </li>
              </ul>
            ) : (
              <></>
            )}
            <FontAwesomeIcon
              className="iconlang"
              onClick={() => {
                opened ? setopended(false) : setopended(true);
              }}
              icon={faLanguage}
              size="2x"
            />
          </div>
          <button
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            onClick={() => setopended2(!opened2)}
          >
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
            <span class="icon icon-bar"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
