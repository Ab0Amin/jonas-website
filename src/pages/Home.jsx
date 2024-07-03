import React, { useEffect } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import About from "../components/About";
import Team from "../components/Teams";
import News from "../components/News";
import Appointment from "../components/Appointment";
import Maps from "../components/Maps";
import Footer from "../components/Footer";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/animate.css";
import "../assets/css/owl.carousel.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/tooplate-style.css";
// import ImportScript from "../hooks/ImportScript";?

export default function Home({ setLanguageState, languageState }) {
  // ImportScript("../js/script.js");

  return (
    <div>
      {/* <!-- PRE LOADER --> */}
      {/* <section class="preloader">
            <div class="spinner">
              <span class="spinner-rotate"></span>
            </div>
          </section> */}

      {/* <!-- HEADER --> */}

      <Header />

      {/* <!-- MENU --> */}
      <Menu setLanguageState={setLanguageState} />

      {/* <!-- HOME --> */}
      <Hero></Hero>

      {/* <!-- ABOUT --> */}
      <About></About>
      {/* <!-- TEAM --> */}
      <Team></Team>

      {/* <!-- NEWS --> */}
      <News></News>

      {/* <!-- MAKE AN APPOINTMENT --> */}
      <Appointment></Appointment>
      {/* <!-- GOOGLE MAP --> */}
      <Maps></Maps>
      {/* <!-- FOOTER --> */}
      <Footer></Footer>
    </div>
  );
}
