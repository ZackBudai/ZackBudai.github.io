<script>
  const featuredProjects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. Explain what problems it solves and what technologies you used.',
      image: '/project1.jpg',
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight your role and the impact it had.',
      image: '/project2.jpg',
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Project 3',
      description: 'Details about your third project. Mention any interesting challenges you faced.',
      image: '/project3.jpg',
      link: 'https://github.com/yourusername/project3'
    }
  ];
</script>

<svelte:head>
  <title>Your Name - Portfolio</title>
  <meta name="description" content="Welcome to my portfolio website. I'm a developer passionate about creating amazing web applications." />
</svelte:head>

<div class="animate-fade-in">
  <!-- Hero Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-center text-center">
        <h1 class="text-5xl font-bold text-gray-900 mb-6">Hi, I'm Your Name</h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl">
          I'm a passionate developer specializing in web development. I love creating beautiful, functional, and user-friendly applications.
        </p>
        <div class="flex space-x-4">
          <a href="/projects" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View My Work
          </a>
          <a href="/contact" class="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Projects -->
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each featuredProjects as project}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
              <p class="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} class="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl mb-2">💻</div>
          <h3 class="font-semibold">Frontend</h3>
          <p class="text-gray-600">React, Vue, Svelte</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">⚡</div>
          <h3 class="font-semibold">Backend</h3>
          <p class="text-gray-600">Node.js, Python, Java</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">🎨</div>
          <h3 class="font-semibold">Design</h3>
          <p class="text-gray-600">UI/UX, Figma, Adobe XD</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">🛠️</div>
          <h3 class="font-semibold">Tools</h3>
          <p class="text-gray-600">Git, Docker, AWS</p>
        </div>
      </div>
    </div>
  </section>
</div>
