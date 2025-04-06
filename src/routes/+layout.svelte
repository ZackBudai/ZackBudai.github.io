<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<div class="min-h-screen bg-gray-100">
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <a href="{base}/" class="flex items-center py-4">
              <span class="font-semibold text-gray-500 text-lg">Your Name</span>
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a href="{base}/" class="py-4 px-2 text-gray-500 hover:text-gray-900">Home</a>
            <a href="{base}/projects" class="py-4 px-2 text-gray-500 hover:text-gray-900">Projects</a>
            <a href="{base}/about" class="py-4 px-2 text-gray-500 hover:text-gray-900">About</a>
            <a href="{base}/contact" class="py-4 px-2 text-gray-500 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>

  <footer class="bg-white shadow-lg mt-8">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-center space-x-4">
        <a href="https://github.com/yourusername" class="text-gray-500 hover:text-gray-900">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" class="text-gray-500 hover:text-gray-900">LinkedIn</a>
        <a href="https://twitter.com/yourusername" class="text-gray-500 hover:text-gray-900">Twitter</a>
      </div>
      <div class="text-center mt-4 text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </div>
  </footer>
</div> 