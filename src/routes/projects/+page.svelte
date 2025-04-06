<script>
  import { base } from '$app/paths';
  const projects = [
    {
      title: 'Project 1',
      description: 'A comprehensive description of your first project. Explain the problem it solves, your role, and the technologies used.',
      image: '/images/project1.jpg',
      link: 'https://github.com/yourusername/project1',
      technologies: ['React', 'Node.js', 'MongoDB'],
      features: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description'
      ]
    },
    {
      title: 'Project 2',
      description: 'Detailed description of your second project. Include the challenges faced and how you overcame them.',
      image: '/images/project2.jpg',
      link: 'https://github.com/yourusername/project2',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      features: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description'
      ]
    },
    {
      title: 'Project 3',
      description: 'In-depth description of your third project. Highlight the impact and results achieved.',
      image: '/images/project3.jpg',
      link: 'https://github.com/yourusername/project3',
      technologies: ['SvelteKit', 'PostgreSQL', 'Docker'],
      features: [
        'Feature 1 description',
        'Feature 2 description',
        'Feature 3 description'
      ]
    }
  ];
</script>

<svelte:head>
  <title>Projects - Your Name</title>
  <meta name="description" content="Explore my portfolio of web development projects." />
</svelte:head>

<div class="animate-fade-in">
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12">My Projects</h1>
      
      <div class="space-y-20">
        {#each projects as project}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/2">
                <img src={project.image} alt={project.title} class="w-full h-64 object-cover" />
              </div>
              <div class="p-8 md:w-1/2">
                <h2 class="text-2xl font-bold mb-4">{project.title}</h2>
                <p class="text-gray-600 mb-6">{project.description}</p>
                
                <div class="mb-6">
                  <h3 class="font-semibold mb-2">Technologies Used:</h3>
                  <div class="flex flex-wrap gap-2">
                    {#each project.technologies as tech}
                      <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    {/each}
                  </div>
                </div>

                <div class="mb-6">
                  <h3 class="font-semibold mb-2">Key Features:</h3>
                  <ul class="list-disc list-inside text-gray-600">
                    {#each project.features as feature}
                      <li>{feature}</li>
                    {/each}
                  </ul>
                </div>

                <a
                  href={project.link}
                  class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div> 