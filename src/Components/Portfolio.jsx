/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Solid.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MLSA Culture & Christmas LATAM 2023 🎉",
    description:
      "Meet the MLSA's of each Latin American country, discover more about their regional traditions and fascinating curiosities. This is a relaxed YouTube chat, perfect for those who love culture and want to expand their horizons",
    url: "https://www.youtube.com/watch?v=tCgH2YPLucI",
  },
  {
    title: "🌳ARBOOK Academy🍎",
    description:
      "Do you have any doubt after classes? Are the topics difficult? Don't you understand them? Do you want to improve your knowledge and study better? Welcome to ARBOOK Academy! The place you can't stop learning 😉. In this channel you'll find math, algebra, physics and aritmetic videos with clear explications to put in action the theory with exercises. Tips to have better study sessions!",
    url: "https://www.youtube.com/@ARBOOK_Academy",
  },
  {
    title: "🐺 Lobomentoría 🐺",
    description:
      "It's a voluntary accompaniment process carried out by 'Lobomentoras' and 'Lobomentores' to students who require it, in the disciplinary areas, exchange and induction into university life. I'm a 'lobomentor', a student in advanced semesters, who accompanies new students to facilitate their academic and social integration into university life, characterized by my skills of tolerance, empathy, active listening and leadership.",
    url: "https://www.lobomentores.buap.mx/",
  },
  {
    title: "🔩 SolidWORKS Certifications ⚙",
    description:
      "I really love CAD (Computer Asisted Design), it's a extraordinary world where your imagination don't has limits: you can create the mechanic part of your preference. About this, I improve my skills in this area and get 3 certifications in the software 'SolidWORKS': CSWA (Certified SOLIDWORKS Associate in Mechanical Design), CSWA - Sustainability and CSWP (Certified SOLIDWORKS Professional in Mechanical Design).",
  },

  {
    title: "🔩 CSWA ⚙",
    description:
      "The CSWA certification is proof of my SolidWORKS expertise with cutting-edge skills that businesses seek out and reward.",
    url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ZYAQX93KM5",
  },

  {
    title: "🔩 CSWA-Sustainability ⚙",
    description:
      "The completion of the Certified SolidWORKS Associate Sustainability (CSWA-Sustainability) exam shows that I have successfully demonstrated my understanding of the principles of environmental assessment and sustainable design.",
    url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-A3DGHU6PQ2",
  },

  {
    title: "🔩 CSWP ⚙",
    description:
      "With this certification I've proven my ability to design and analyze parametric parts and moveable assemblies using a variety of complex features in SolidWORKS software: SolidWORKS Essentials, SolidWORKS Drawings, Advanced Part Modeling, and Advanced Assembly Modeling.",
    url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-JZBRVEPYCG",
  },

  {
    title: "💼Business for All Program 2023📈",
    description:
      "In this competitive scholarship program, I enhance my career prospects with courses delivered by industry experts to develop my skills and build business knowledge to learn the essentials of marketing, finance, negotiation, customer relation, and leadership skills.",
    url: "https://certificate.hbsp.harvard.edu/verify/8bd6dcc37691",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
