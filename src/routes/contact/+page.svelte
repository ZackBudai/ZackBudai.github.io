<script>
  import { base } from '$app/paths';
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  function handleSubmit() {
    // Here you would typically handle the form submission
    // For example, sending an email or storing in a database
    console.log('Form submitted:', formData);
    // Reset form
    formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
</script>

<svelte:head>
  <title>Contact - Your Name</title>
  <meta name="description" content="Get in touch with me for collaboration or opportunities." />
</svelte:head>

<div class="animate-fade-in">
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Contact Information</h2>
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold mb-2">Email</h3>
                <a href="mailto:your.email@example.com" class="text-blue-600 hover:text-blue-800">
                  your.email@example.com
                </a>
              </div>
              <div>
                <h3 class="font-semibold mb-2">Location</h3>
                <p class="text-gray-600">Your City, Country</p>
              </div>
              <div>
                <h3 class="font-semibold mb-2">Social Media</h3>
                <div class="flex space-x-4">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-semibold mb-6">Send a Message</h2>
            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  bind:value={formData.name}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  bind:value={formData.email}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  bind:value={formData.subject}
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  bind:value={formData.message}
                  required
                  rows="5"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div> 