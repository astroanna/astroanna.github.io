import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";
import resume from "../assets/Anna_Gassen_Resume.pdf"

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm currently a senior computer science major at Seattle University,
          acting as the product lead for my capstone project. I'm also a
          Helpdesk IT Tech at Seattle U's law school, and am in my third year
          as Triangle Club's (LGBTQ+) treasurer. I'm a mentee in Out In Tech's
          New York mentorship program, through which I am focusing on personal
          coding projects.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>(415) 415-4154</span>
              <br />
              <span>annagassen@me.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resume} className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
