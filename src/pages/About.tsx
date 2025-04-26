import React from 'react';
import NavMenu from '../components/NavMenu';
import ScrollIndicator from '../components/ScrollIndicator';

const About: React.FC = () => {
  return (
    <div className="projects scrollable-content">
      <NavMenu />
      <div className="projects-header">
        <div className="header-content">
          <h1>About Me</h1>
          <p>Innovating at the intersection of Hardware and Software</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="glass-panel">
          <div className="content-section">
            <p>
              I am a computer scientist and electrical engineer passionate about creating elegant solutions to complex problems.
              With a strong foundation in both software and hardware development, and a drive for innovation, I continuously
              explore new technologies and methodologies to enhance my capabilities across multiple disciplines.
            </p>
            
            <div className="skills-section">
              <h2>Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>SQL</li>
                    <li>C, C++, C#</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Web Development</h3>
                  <ul>
                    <li>HTML5, CSS</li>
                    <li>JavaScript (JSON)</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Data & Databases</h3>
                  <ul>
                    <li>Apache Spark (PySpark)</li>
                    <li>Pandas</li>
                    <li>Databricks</li>
                    <li>MySQL, SQLite</li>
                    <li>PostgreSQL, SMSS</li>
                  </ul>
                </div>
                
                <div className="skill-category">
                  <h3>Development Tools</h3>
                  <ul>
                    <li>VSCode</li>
                    <li>GitHub, Git</li>
                    <li>Bitbucket</li>
                    <li>Microsoft Office (Online)</li>
                    <li>Trello</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3>Platforms</h3>
                  <ul>
                    <li>Windows</li>
                    <li>Linux (Ubuntu, Kali, Parrot, Debian)</li>
                    <li>MacOS</li>
                    <li>iOS, Android</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3>Hardware & Engineering</h3>
                  <ul>
                    <li>Soldering Circuits</li>
                    <li>3D Modelling & Printing</li>
                    <li>Arduino</li>
                    <li>Raspberry Pi</li>
                    <li>VEX Robotics</li>
                  </ul>
                </div>

                <div className="skill-category">
                  <h3>Additional Tools</h3>
                  <ul>
                    <li>Adobe CC</li>
                    <li>Unity</li>
                    <li>OS Image Virtualisation</li>
                    <li>VMware, VirtualBox</li>
                    <li>Discord</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default About;
