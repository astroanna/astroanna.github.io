import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFire
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:annagassen@me.com">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/annagassen/">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/astroanna/">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.firecode.io/pages/profile/23762">
        <FaFire />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
