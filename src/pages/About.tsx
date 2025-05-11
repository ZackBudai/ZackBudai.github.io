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
          <p>Innovating at the Intersection of Hardware and Software Security</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="glass-panel">
          <div className="content-section">
            <div className="about-content">
              <p>
                I am a Computer Scientist and Electrical Engineer with a profound passion for cybersecurity and technological innovation.
                My journey in technology began with a fascination for understanding how systems work, both in hardware and software,
                which led me to pursue a challenging dual degree in Computer Science and Electrical Engineering at Griffith University.
              </p>
              
              <p>
                My expertise in cybersecurity has been proven through numerous achievements, including leading a team to victory in
                national-level cybersecurity competitions like CyberTaipan. I continue to actively engage in Capture The Flag (CTF)
                competitions with the team I founded in high school, constantly pushing the boundaries of my knowledge in areas like
                reverse engineering and cryptography. In 2025, I'm proud to represent Queensland in the WorldSkills national championships
                for programming, showcasing my commitment to excellence in software development.
              </p>

              <p>
                What truly sets me apart is my specialized interest in IoT and RF technology security. The rapidly evolving landscape
                of wireless technologies presents unique challenges at the intersection of hardware and software security - exactly
                where my dual degree positions me to make significant contributions. I'm particularly drawn to exploring vulnerabilities
                and developing secure solutions in wireless communications, combining my understanding of both electronic systems and
                software architecture.
              </p>

              <p>
                My decision to pursue both Electrical Engineering and Computer Science was strategic - I recognized early that the
                future of cybersecurity lies in understanding both the hardware and software aspects of systems. This comprehensive
                understanding allows me to approach security challenges from multiple angles, whether it's analyzing RF protocols
                for vulnerabilities or implementing cryptographic solutions in embedded systems.
              </p>

              <p>
                Looking ahead, I aim to be more than just a security professional - I want to be an innovator who creates and
                implements novel security solutions. My goal is to contribute to the field of wireless technology security,
                particularly in developing robust security frameworks for emerging IoT and RF technologies. I believe my unique
                combination of skills and passionate drive for innovation positions me perfectly to tackle these future challenges.
              </p>
            </div>
            
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
