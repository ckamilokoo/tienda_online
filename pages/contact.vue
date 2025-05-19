<template>
  <div class="container mx-auto p-8">
    <!-- Banner de contacto -->
    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xl p-8 mb-10 text-white">
      <h1 class="text-4xl font-bold mb-4">Contacto</h1>
      <p class="text-lg max-w-2xl">Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier duda, sugerencia o consulta sobre nuestros productos.</p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-10">
      <!-- Formulario de contacto -->
      <div class="bg-white rounded-lg shadow-lg p-8 order-2 md:order-1">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Envíanos un mensaje</h2>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            >
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="4" 
              class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition transform hover:scale-105 flex items-center justify-center"
          >
            <span>Enviar mensaje</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11h2a1 1 0 00.894-.553l7-14A1 1 0 0017.894 1.19L10.894 2.553z" />
            </svg>
          </button>
        </form>
        
        <div v-if="formSubmitted" class="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
          ¡Gracias por tu mensaje! Te responderemos lo antes posible.
        </div>
      </div>
      
      <!-- Información de contacto y redes sociales -->
      <div class="order-1 md:order-2">
        <!-- Información de contacto -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Información de contacto
          </h2>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p class="font-medium text-gray-800">Email:</p>
                <a href="mailto:info@fashionstore.com" class="text-indigo-600 hover:text-indigo-800 transition">info@fashionstore.com</a>
              </div>
            </div>
            
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <p class="font-medium text-gray-800">Teléfono:</p>
                <a href="tel:+15551234567" class="text-indigo-600 hover:text-indigo-800 transition">+1 (555) 123-4567</a>
              </div>
            </div>
            
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p class="font-medium text-gray-800">Dirección:</p>
                <p class="text-gray-600">Calle Principal 123, Ciudad</p>
                <p class="text-gray-600">CP 12345, País</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p class="font-medium text-gray-800">Horario de atención:</p>
                <p class="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
                <p class="text-gray-600">Sábados: 10:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Redes sociales -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Síguenos en redes sociales
          </h2>
          
          <div class="grid grid-cols-3 gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              <svg class="h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span class="mt-2 font-medium">Facebook</span>
            </a>
            
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              <svg class="h-8 w-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
              </svg>
              <span class="mt-2 font-medium">Instagram</span>
            </a>
            
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition transform hover:scale-105">
              <svg class="h-8 w-8 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
              <span class="mt-2 font-medium">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mapa de ubicación -->
    <div class="mt-10 bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
        Nuestra ubicación
      </h2>
      
      <div class="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        <!-- Aquí iría un mapa real, por ahora usamos un placeholder -->
        <div class="w-full h-full flex items-center justify-center bg-gray-300">
          <p class="text-gray-600 text-center p-4">
            Mapa de ubicación<br>
            <span class="text-sm">Calle Principal 123, Ciudad, CP 12345, País</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Formulario de contacto
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const formSubmitted = ref(false)

const submitForm = () => {
  // Aquí iría la lógica para enviar el formulario a un backend
  console.log('Formulario enviado:', form)
  
  // Mostrar mensaje de éxito
  formSubmitted.value = true
  
  // Resetear formulario
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    formSubmitted.value = false
  }, 5000)
}

// SEO
useHead({
  title: 'Contacto - Fashion Store',
  meta: [
    { name: 'description', content: 'Ponte en contacto con nosotros para cualquier consulta sobre nuestros productos.' }
  ]
})
</script>
