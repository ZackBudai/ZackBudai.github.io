import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
            About Me
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
              I'm a passionate software engineer with expertise in building modern web applications.
              With a strong foundation in full-stack development, I create elegant solutions to complex problems.
            </p>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Skills & Technologies</h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "NoSQL", 
                  "Git", "AWS", "Docker", "GraphQL", "REST API", "CSS/SCSS", "HTML5"].map((skill) => (
                  <motion.span
                    key={skill}
                    style={{
                      padding: '0.5rem 1rem',
                      backgroundColor: 'rgba(0, 112, 243, 0.1)',
                      borderRadius: '50px',
                      color: 'var(--primary-color)',
                      border: '1px solid var(--primary-color)',
                      fontSize: '0.9rem'
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'var(--primary-color)', 
                      color: 'white' 
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Experience</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Senior Developer</h4>
                  <p style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Tech Company • 2023 - Present</p>
                  <p>Led the development of a high-traffic web application, improving performance by 40%.</p>
                </div>
                
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Full Stack Developer</h4>
                  <p style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Agency XYZ • 2020 - 2023</p>
                  <p>Developed and maintained multiple client projects using modern JavaScript frameworks.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Education</h3>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>BSc in Computer Science</h4>
                <p style={{ color: 'var(--secondary-color)' }}>University of Technology • 2016 - 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;