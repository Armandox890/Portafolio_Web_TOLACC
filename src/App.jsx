/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Luis Armando Casimiro Caselin",
  title: "Mecatronic Engineer, an enthusiastic and self-taught boy ",
  email: "LuisArmandoCasimiroCaselin@studentambassadors.com",
  gitHub: "Armandox890",
  instagram: "armandox_890",
  linkedIn: "luis-armando-casimiro-caselin-5a099b262/",
  medium: "",
  twitter: "arbook_academy",
  youTube: "https://www.youtube.com/@ARBOOK_Academy",
};

const primaryColor = "#5CEDAE";
const secondaryColor = "#09E8D5";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
