<template>
  <div>
    <!-- Hero Section - Full width con imagen de fondo -->
    <section class="relative bg-gray-900 text-white overflow-hidden">
      <!-- Imagen de fondo con overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Fashion background" 
          class="w-full h-full object-cover opacity-40">
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>
      
      <!-- Contenido del hero -->
      <div class="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div class="max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">Descubre tu estilo <span class="text-indigo-400">único</span></h1>
          <p class="text-lg md:text-xl text-gray-300 mb-8">Las últimas tendencias en moda con los mejores precios. Renueva tu guardarropa con nuestra colección exclusiva.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/products"
              class="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition transform hover:-translate-y-1 shadow-lg">
              Ver Catálogo
            </NuxtLink>
            <NuxtLink to="/contact"
              class="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition transform hover:-translate-y-1">
              Contáctanos
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Categorías destacadas -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-2 text-center">Categorías Destacadas</h2>
        <p class="text-gray-600 mb-12 text-center max-w-2xl mx-auto">Explora nuestras colecciones cuidadosamente seleccionadas</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="group relative overflow-hidden rounded-lg shadow-md h-80 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
              alt="Moda Mujer" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Moda Mujer</h3>
                <p class="text-gray-300 mb-3">Elegancia y estilo</p>
                <NuxtLink to="/products" class="text-white text-sm font-medium hover:text-indigo-300 transition flex items-center">
                  Ver colección
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg shadow-md h-80 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="Moda Hombre" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Moda Hombre</h3>
                <p class="text-gray-300 mb-3">Estilo contemporáneo</p>
                <NuxtLink to="/products" class="text-white text-sm font-medium hover:text-indigo-300 transition flex items-center">
                  Ver colección
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg shadow-md h-80 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
              alt="Accesorios" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">Accesorios</h3>
                <p class="text-gray-300 mb-3">Complementos perfectos</p>
                <NuxtLink to="/products" class="text-white text-sm font-medium hover:text-indigo-300 transition flex items-center">
                  Ver colección
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Productos destacados con diseño moderno -->
    <section class="py-16 container mx-auto px-4">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h2 class="text-3xl font-bold mb-2">Productos Destacados</h2>
          <p class="text-gray-600">Descubre nuestras piezas más populares</p>
        </div>
        <NuxtLink to="/products" class="text-indigo-600 font-medium hover:text-indigo-800 transition flex items-center">
          Ver todos
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="product in products" :key="product.id" class="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
          <div class="relative overflow-hidden h-64">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            <div class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">Nuevo</div>
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <NuxtLink :to="`/products/${product.id}`" class="bg-white text-gray-900 px-4 py-2 rounded-md font-medium transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Ver Detalles
              </NuxtLink>
            </div>
          </div>
          <div class="p-5">
            <h3 class="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition-colors">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-gray-900">{{ product.price }}</span>
              <button @click="addToCart(product)" class="text-indigo-600 hover:text-indigo-800 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de testimonios -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-2 text-center">Lo que dicen nuestros clientes</h2>
        <p class="text-gray-600 mb-12 text-center max-w-2xl mx-auto">Descubre por qué nuestros clientes aman nuestros productos</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-4">"Los productos son de excelente calidad y el servicio al cliente es excepcional. Definitivamente volveré a comprar aquí."</p>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">M</div>
              <div class="ml-3">
                <h4 class="font-semibold">María García</h4>
                <p class="text-gray-500 text-sm">Cliente desde 2023</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-4">"La ropa es exactamente como se muestra en las fotos. Me encanta la calidad y el estilo. Totalmente recomendado."</p>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">J</div>
              <div class="ml-3">
                <h4 class="font-semibold">Juan Pérez</h4>
                <p class="text-gray-500 text-sm">Cliente desde 2024</p>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex items-center mb-4">
              <div class="text-yellow-400 flex">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-4">"Envío rápido y productos de alta calidad. La atención al cliente es excelente. Sin duda mi tienda favorita."</p>
            <div class="flex items-center">
              <div class="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">A</div>
              <div class="ml-3">
                <h4 class="font-semibold">Ana Rodríguez</h4>
                <p class="text-gray-500 text-sm">Cliente desde 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banner de suscripción -->
    <section class="py-16 bg-indigo-600 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Únete a nuestra newsletter</h2>
        <p class="mb-8 max-w-2xl mx-auto">Suscríbete para recibir las últimas novedades, tendencias y ofertas exclusivas directamente en tu correo.</p>
        
        <form @submit.prevent="subscribe" class="max-w-md mx-auto flex">
          <input 
            type="email" 
            v-model="email" 
            placeholder="Tu correo electrónico" 
            class="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none"
            required
          >
          <button 
            type="submit" 
            class="bg-gray-900 text-white px-6 py-3 rounded-r-md font-medium hover:bg-gray-800 transition"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { useCart } from '~/composables/useCart'

const { products } = useProducts()
const { addToCart: addProductToCart } = useCart()

// Para la funcionalidad de agregar al carrito desde la página principal
const addToCart = (product) => {
  addProductToCart(product, 1)
  alert(`${product.name} agregado al carrito`)
}

// Para la funcionalidad de suscripción al newsletter
const email = ref('')
const subscribe = () => {
  alert(`¡Gracias por suscribirte! Te enviaremos nuestras novedades a ${email.value}`)
  email.value = ''
}

useHead({
  title: 'Fashion Store - Tu tienda de moda online',
  meta: [
    { name: 'description', content: 'Descubre nuestra colección de ropa y accesorios de moda.' }
  ]
})
</script>

<style>
/* Estilos base para asegurar correcta visualización */
body {
  @apply bg-gray-100;
}
</style>
