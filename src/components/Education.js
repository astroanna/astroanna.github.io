import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Seattle University</h3>
          <p className="info">
            BSc in Computer Science
            <span>&bull;</span>
            <em className="date">June 2019</em>
          </p>

          <ul>
            <li>
              3.8/4.0 GPA
            </li>
            <li>
              <em>Member,</em> Dean's List all completed quarters
            </li>
            <li>
              <em>Member and Recipient,</em> Core Honors Program & Scholarship
            </li>
            <li>
              <em>Recipient,</em> Trustee's Scholarship
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
);

export default Education;
