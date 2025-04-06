<script>
  const experiences = [
    {
      company: 'Company 1',
      position: 'Senior Developer',
      period: '2020 - Present',
      description: 'Description of your role and achievements at Company 1.'
    },
    {
      company: 'Company 2',
      position: 'Full Stack Developer',
      period: '2018 - 2020',
      description: 'Description of your role and achievements at Company 2.'
    },
    {
      company: 'Company 3',
      position: 'Junior Developer',
      period: '2016 - 2018',
      description: 'Description of your role and achievements at Company 3.'
    }
  ];

  const education = [
    {
      school: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      period: '2012 - 2016',
      description: 'Relevant coursework and achievements during your studies.'
    }
  ];
</script>

<svelte:head>
  <title>About Me - Your Name</title>
  <meta name="description" content="Learn more about my background, experience, and skills." />
</svelte:head>

<div class="animate-fade-in">
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">About Me</h1>
        <p class="mb-4">
          Welcome to my portfolio website! I am a passionate developer with expertise in web development.
        </p>
        <p class="mb-4">
          I specialize in building modern web applications using technologies like SvelteKit, React, and Node.js.
        </p>
        <p class="mb-4">
          Feel free to explore my projects and get in touch if you have any questions or opportunities.
        </p>
        
        <!-- Bio Section -->
        <div class="mb-16">
          <h2 class="text-2xl font-semibold mb-4">Who I Am</h2>
          <p class="text-gray-600 mb-4">
            I'm a passionate developer with a strong background in web development and a keen eye for creating beautiful, functional applications. With over X years of experience in the industry, I've worked on various projects ranging from small business websites to large-scale enterprise applications.
          </p>
          <p class="text-gray-600">
            My journey in tech started when [your story here]. Since then, I've been constantly learning and improving my skills to stay at the forefront of web development.
          </p>
        </div>

        <!-- Experience Section -->
        <div class="mb-16">
          <h2 class="text-2xl font-semibold mb-8">Work Experience</h2>
          <div class="space-y-8">
            {#each experiences as exp}
              <div class="border-l-4 border-blue-500 pl-4">
                <h3 class="text-xl font-semibold">{exp.position}</h3>
                <p class="text-gray-600">{exp.company}</p>
                <p class="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p class="text-gray-600">{exp.description}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Education Section -->
        <div class="mb-16">
          <h2 class="text-2xl font-semibold mb-8">Education</h2>
          <div class="space-y-8">
            {#each education as edu}
              <div class="border-l-4 border-blue-500 pl-4">
                <h3 class="text-xl font-semibold">{edu.degree}</h3>
                <p class="text-gray-600">{edu.school}</p>
                <p class="text-sm text-gray-500 mb-2">{edu.period}</p>
                <p class="text-gray-600">{edu.description}</p>
              </div>
            {/each}
          </div>
        </div>

        <!-- Skills Section -->
        <div>
          <h2 class="text-2xl font-semibold mb-8">Skills & Expertise</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Frontend</h3>
              <ul class="text-gray-600">
                <li>React / Vue / Svelte</li>
                <li>HTML5 / CSS3</li>
                <li>JavaScript / TypeScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Backend</h3>
              <ul class="text-gray-600">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL / NoSQL</li>
              </ul>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Tools & Others</h3>
              <ul class="text-gray-600">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> 