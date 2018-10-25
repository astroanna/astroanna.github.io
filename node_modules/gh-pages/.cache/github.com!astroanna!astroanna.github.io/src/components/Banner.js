import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Anna Gassen.</h1>
      <h3>
        I'm a senior <span>computer science</span>,
        <span>student</span> and IT tech working on
        <a className="smoothscroll" href="#portfolio">
          {" "}
          awesome projects
        </a>{" "}
        and learning as much as I can. Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
