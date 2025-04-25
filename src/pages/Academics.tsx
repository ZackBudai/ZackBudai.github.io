import React from 'react';

const Academics: React.FC = () => {
  return (
    <div className="page-container">
      <div className="glass-panel">
        <h1>Academics</h1>
        <div className="content-section">
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h3>Georgia Institute of Technology</h3>
                <p>Master of Science in Computer Science</p>
                <ul>
                  <li>Specialization in Machine Learning</li>
                  <li>Research focus on AI and Computer Vision</li>
                  <li>GPA: 4.0</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2019 - 2023</div>
              <div className="timeline-content">
                <h3>University of California, Berkeley</h3>
                <p>Bachelor of Science in Computer Science</p>
                <ul>
                  <li>Minor in Mathematics</li>
                  <li>Dean's List: All Semesters</li>
                  <li>GPA: 3.95</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h2>Academic Achievements</h2>
            <ul>
              <li>Published paper on "Deep Learning Applications in Computer Vision" at ICML 2023</li>
              <li>Teaching Assistant for Advanced Algorithms (CS 170)</li>
              <li>President of Computer Science Honor Society</li>
              <li>Won 1st place in University Hackathon 2022</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
