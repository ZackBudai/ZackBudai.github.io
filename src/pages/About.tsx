import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* About Hero Section */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="heading">About Me</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about my background, skills, and what drives me as a developer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-gray-600 mb-4">
                I started my journey in web development with a passion for creating beautiful and functional websites. 
                Over the years, I've worked on various projects ranging from small business websites to complex web applications.
              </p>
              <p className="text-gray-600 mb-4">
                My approach to development is centered around user experience, performance, and clean code. 
                I believe in creating solutions that not only look great but also provide value to the end user.
              </p>
              <p className="text-gray-600">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing my knowledge with the developer community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/placeholder.svg"
                  alt="About Me"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading">Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              I specialize in building modern web applications using the latest technologies and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>HTML5, CSS3, JavaScript (ES6+)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>React, Redux, Context API</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>TypeScript, Next.js</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Tailwind CSS, Styled Components</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Responsive Design, CSS Grid, Flexbox</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Node.js, Express</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>RESTful APIs, GraphQL</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>MongoDB, PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Authentication, Authorization</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Serverless Functions, AWS</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Git, GitHub, GitLab</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Webpack, Vite, Babel</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Jest, React Testing Library</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>CI/CD, GitHub Actions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Docker, Kubernetes</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Communication</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Time Management</span>
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  <span>Continuous Learning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading">Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My professional journey and the roles I've held throughout my career.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                title: 'Senior Web Developer',
                company: 'Tech Company',
                period: '2020 - Present',
                description: 'Leading the development of modern web applications using React, TypeScript, and Node.js. Implementing best practices for code quality, testing, and deployment.',
              },
              {
                title: 'Web Developer',
                company: 'Digital Agency',
                period: '2018 - 2020',
                description: 'Developed and maintained client websites, focusing on responsive design and user experience. Worked with various technologies including React, Vue.js, and PHP.',
              },
              {
                title: 'Junior Developer',
                company: 'Startup',
                period: '2016 - 2018',
                description: 'Started my career working on small projects and gradually took on more complex tasks. Learned fundamental web development skills and best practices.',
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm mb-6 relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg"></div>
                <div className="pl-4">
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <div className="flex flex-wrap items-center text-gray-600 mb-2">
                    <span className="mr-4">{experience.company}</span>
                    <span>{experience.period}</span>
                  </div>
                  <p className="text-gray-600">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 