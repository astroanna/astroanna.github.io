import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Seattle University</h3>
          <p className="info">
            IT Helpdesk Technician
            <span>&bull;</span>
            <em className="date">Feb 2017 - Present</em>
          </p>

          <ul type="disc">
            <li>
              Assisted customers in troubleshooting Seattle U systems and
              personal device issues.
            </li>
            <li>
              Instructed customers on how to use Seattle U technologies crucial
              to the Law School’s operation, such as internet, email, student
              accounts, printing, and test taking software.
            </li>
            <li>
              Provided friendly customer service both over the phone and in
              person.
            </li>
          </ul>

        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Lawrence Berkeley National Laboratory</h3>
          <p className="info">
            Computer Systems Engineer 1
            <span>&bull;</span>
            <em className="date">Jun - Sept 2018</em>
          </p>

          <ul type="disc">
            <li>
              Developed a data visualization demo in Unity for the Oculus Rift
              and Touch using C# and the Oculus SDK.
            </li>
            <li>
              Completely managed my own project by defining the scope, setting
              goals, learning new technologies such as Unity, and collaborating
              with Berkeley Lab scientists.
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
);

export default Work;
