import NavMenu from '../components/NavMenu';
import ScrollIndicator from '../components/ScrollIndicator';

export const Academics = () => {
  return (
    <div className="projects scrollable-content">
      <NavMenu />
      <div className="projects-header">
        <div className="header-content">
          <h1>Academics</h1>
          <p>Education, Certifications, and Academic Achievements</p>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="glass-panel">
          <div className="content-section">
            {/* Tertiary Education Section */}
            <div className="education-section">
              <h2>Tertiary Education</h2>
              <div className="timeline-item">
                <div className="timeline-date">2023 - 2026</div>
                <div className="timeline-content">
                  <h3>Griffith University</h3>
                  <p>Dual Degree</p>
                  <ul>
                    <li>Bachelor of Computer Science (Data Science and Artificial Intelligence)</li>
                    <li>Bachelor of Engineering (Electrical and Electronic Engineering)</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h3>Griffith GUEST Program</h3>
                  <ul>
                    <li>1711ICT Introduction to Robotics</li>
                    <li>1022ENG Engineering Design Practice</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* QCE Section */}
            <div className="education-section">
              <h2>Queensland Certificate of Education (QCE)</h2>
              <div className="timeline-item">
                <div className="timeline-date">2018 - 2022</div>
                <div className="timeline-content">
                  <h3>Merrimac State High School</h3>
                  <p>Accelerated High School QCE and ATAR Graduate</p>
                  <ul>
                    <li>Academic Honours achieved in all years</li>
                    <li>Completed advanced academic program</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certificates and Courses Section */}
            <div className="education-section">
              <h2>Certificates and Courses</h2>
              <div className="timeline-item">
                <div className="timeline-date">2022</div>
                <div className="timeline-content">
                  <h3>TAFE Queensland</h3>
                  <p>Use 3D Scanning to Create VR/AR Experiences</p>
                  <ul>
                    <li>Short Course focusing on VR/AR technology</li>
                    <li>Practical experience with 3D scanning techniques</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">2021</div>
                <div className="timeline-content">
                  <h3>Certificate II in Engineering Pathways</h3>
                  <ul>
                    <li>Foundation engineering skills and knowledge</li>
                    <li>Practical engineering workshop experience</li>
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
