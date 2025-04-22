<script lang="ts">
  import { onMount } from 'svelte';
  import { push } from 'svelte-spa-router';
  import { gsap } from 'gsap';

  let panels: HTMLElement[];
  let panelContainers: HTMLElement[];

  onMount(() => {
    panels = Array.from(document.querySelectorAll('.rotating-panel'));
    panelContainers = Array.from(document.querySelectorAll('.panel-container'));

    function calculateRotationPoints(container: HTMLElement) {
      const containerRect = container.getBoundingClientRect();
      return {
        start: containerRect.top + window.scrollY - window.innerHeight,
        end: containerRect.bottom + window.scrollY
      };
    }

    function handleScroll() {
      const scrollPosition = window.scrollY;
      
      panels.forEach((panel, index) => {
        const container = panelContainers[index];
        const points = calculateRotationPoints(container);
        
        const progress = Math.max(0, Math.min(1, 
          (scrollPosition - points.start) / (points.end - points.start)
        ));
        
        const rotation = 90 - (progress * 180);
        const translateZ = Math.abs(rotation) * -1;
        
        gsap.to(panel, {
          transform: `translateX(-50%) translateZ(${translateZ}px) rotateY(${rotation}deg)`,
          opacity: 1 - (Math.abs(rotation) / 90) * 0.3,
          duration: 0.1,
          ease: "none"
        });
      });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="projects">
  <nav class="navbar">
    <div class="nav-content">
      <div class="logo">ZB</div>
      <ul class="nav-links">
        <li><button on:click={() => push('/')}>Home</button></li>
        <li><button class="active">Projects</button></li>
      </ul>
    </div>
  </nav>

  <header class="projects-header">
    <div class="header-content">
      <h1>My Projects</h1>
      <p>Discover some of my recent work and personal projects</p>
    </div>
  </header>

  <div class="panels-container">
    <section class="panel-container">
      <div class="rotating-panel">
        <div class="panel-content">
          <h2>Project One</h2>
          <div class="project-card">
            <h3>Interactive Web App</h3>
            <p>A modern web application built with React and Node.js</p>
            <a href="https://github.com/ZackBudai/project-one" class="project-link" target="_blank" rel="noopener noreferrer">
              View Project <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="spacer"></section>

    <section class="panel-container">
      <div class="rotating-panel">
        <div class="panel-content">
          <h2>Project Two</h2>
          <div class="project-card">
            <h3>E-commerce Platform</h3>
            <p>Full-stack e-commerce solution with modern technologies</p>
            <a href="https://github.com/ZackBudai/project-two" class="project-link" target="_blank" rel="noopener noreferrer">
              View Project <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="spacer"></section>

    <section class="panel-container">
      <div class="rotating-panel">
        <div class="panel-content">
          <h2>Project Three</h2>
          <div class="project-card">
            <h3>Mobile App</h3>
            <p>Cross-platform mobile application built with React Native</p>
            <a href="https://github.com/ZackBudai/project-three" class="project-link" target="_blank" rel="noopener noreferrer">
              View Project <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .projects {
    min-height: 100vh;
  }

  .projects-header {
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
    color: white;
    margin-bottom: 4rem;
  }

  .header-content {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .header-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .header-content p {
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .panels-container {
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }

  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(5px);
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links button {
    background: none;
    border: none;
    color: var(--text-color);
    font-weight: 500;
    cursor: pointer;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .nav-links button:hover,
  .nav-links button.active {
    color: var(--primary-color);
  }

  .spacer {
    height: 25vh; /* Increased from 15vh for more spacing */
  }

  .panel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    perspective: 2000px;
    perspective-origin: center;
    position: relative;
  }

  .rotating-panel {
    width: 90%;
    max-width: 1000px;
    min-height: 500px;
    background-color: var(--panel-bg);
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    transform-style: preserve-3d;
    position: absolute;
    left: 50%;
    transform-origin: center;
    transform: translateX(-50%) rotateY(90deg);
  }

  .panel-content {
    padding: 3rem;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  .project-card {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .panels-container {
      padding: 0 1rem;
    }

    .projects-header {
      height: 30vh;
    }

    .header-content h1 {
      font-size: 2.5rem;
    }
  }
</style>