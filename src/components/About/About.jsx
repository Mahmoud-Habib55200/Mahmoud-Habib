import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2
        data-aos="zoom-in"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        About Me
      </h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src={ME}
              alt="AbouImage"
            />
          </div>
        </div>
        <div className="about_content" data-aos="fade-down-left" data-aos-duration='2000' >
          <div className="about_cards" >
            <article className="about-card">
              <FaAward className="about_icon" />
              <h5>Experiences</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about-card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>50+ worldwide</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small> 20+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am very pleased to present to you this portfolio that contains a
            set of projects that I have developed using various web
            technologies. I am an expert in using Reactjs, JavaScript, CSS,
            HTML5, Bootstrap, Tailwind CSS, and Material UI, and I have been
            able to develop many successful projects using these technologies. I
            am passionate about challenges and enjoy learning new things and
            continuously improving my skills. Additionally, I work hard to
            achieve the goals set for me, and I have a great deal of flexibility
            and ability to work independently or as part of a team. I hope you
            like this portfolio and find what interests you in it. Thank you
            very much for your interest and valuable time.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's Talk{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
