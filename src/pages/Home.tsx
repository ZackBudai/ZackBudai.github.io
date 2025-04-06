import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
                Web Developer & Designer
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                I create beautiful, responsive websites and web applications with a focus on user experience and performance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img
                  src="/images/placeholder.svg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading">My Skills</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I specialize in building modern web applications using the latest technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'HTML/CSS', icon: '💻' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'React', icon: '⚛️' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Tailwind CSS', icon: '🎨' },
              { name: 'Git', icon: '📦' },
              { name: 'Responsive Design', icon: '📱' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Project 1',
                description: 'A responsive web application built with React and TypeScript.',
                image: '/images/project1.jpg',
                link: '/projects',
              },
              {
                title: 'Project 2',
                description: 'An e-commerce platform with a focus on user experience.',
                image: '/images/project2.jpg',
                link: '/projects',
              },
              {
                title: 'Project 3',
                description: 'A data visualization dashboard for real-time analytics.',
                image: '/images/project3.jpg',
                link: '/projects',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link to={project.link} className="text-primary font-medium hover:underline">
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how I can help bring your ideas to life.
            </p>
            <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 