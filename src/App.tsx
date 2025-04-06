import React from 'react';
import './App.css';
import './styles/global.css';
import { motion } from 'framer-motion';
import Carousel from './components/Carousel/Carousel';
import { projects } from './components/Projects/ProjectsData';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <header>
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            position: 'fixed',
            width: '100%',
            zIndex: 100,
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(33, 37, 41, 0.8)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
          >
            Portfolio
          </motion.div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.1, color: 'var(--primary-color)' }}
              style={{ color: 'var(--light-color)' }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#about" 
              whileHover={{ scale: 1.1, color: 'var(--primary-color)' }}
              style={{ color: 'var(--light-color)' }}
            >
              About
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.1, color: 'var(--primary-color)' }}
              style={{ color: 'var(--light-color)' }}
            >
              Contact
            </motion.a>
          </div>
        </motion.nav>
      </header>

      <main>
        {/* Hero Section */}
        <section 
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem'
          }}
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              marginBottom: '1.5rem',
              background: 'linear-gradient(45deg, var(--primary-color), #66b3ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}
          >
            Developer & Engineer
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              maxWidth: '800px',
              marginBottom: '2.5rem',
              color: 'var(--secondary-color)'
            }}
          >
            Crafting elegant solutions through code. Building modern web experiences with TypeScript and React.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 2rem',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.8rem 2rem',
                backgroundColor: 'transparent',
                color: 'var(--light-color)',
                borderRadius: '4px',
                border: '1px solid var(--secondary-color)',
                fontWeight: '600',
                fontSize: '1rem'
              }}
            >
              About Me
            </motion.a>
          </motion.div>
        </section>

        {/* Projects Section with 3D Carousel */}
        <section className="section" id="projects" style={{ minHeight: '150vh' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
              My Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ 
                fontSize: '1.1rem', 
                color: 'var(--secondary-color)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Scroll down to explore my projects in a 3D carousel. Each project showcases different skills and technologies.
            </motion.p>
          </div>
          
          <div style={{ height: '100vh' }}>
            <Carousel projects={projects} />
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Contact Section */}
        <section className="section" id="contact">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ 
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Get In Touch</h2>
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'var(--secondary-color)',
                marginBottom: '2.5rem'
              }}>
                Interested in working together? Feel free to reach out to me through any of the platforms below.
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                <motion.a
                  href="mailto:your.email@example.com"
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'var(--light-color)'
                  }}
                >
                  <div style={{ 
                    fontSize: '2rem', 
                    marginBottom: '0.5rem',
                    backgroundColor: 'rgba(0, 112, 243, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    ✉️
                  </div>
                  <span>Email</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'var(--light-color)'
                  }}
                >
                  <div style={{ 
                    fontSize: '2rem', 
                    marginBottom: '0.5rem',
                    backgroundColor: 'rgba(0, 112, 243, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🐱
                  </div>
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'var(--light-color)'
                  }}
                >
                  <div style={{ 
                    fontSize: '2rem', 
                    marginBottom: '0.5rem',
                    backgroundColor: 'rgba(0, 112, 243, 0.1)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    🔗
                  </div>
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer style={{ 
        textAlign: 'center',
        padding: '2rem 0',
        backgroundColor: 'var(--dark-color)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{ color: 'var(--secondary-color)' }}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
