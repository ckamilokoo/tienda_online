<template>
  <div>
    <!-- Banner de cabecera -->
    <section class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold mb-4">Nuestra Colección</h1>
        <p class="text-lg text-gray-300 max-w-2xl">Explora nuestra selección de prendas y accesorios de alta calidad diseñados para destacar tu estilo personal.</p>
      </div>
    </section>
    
    <!-- Filtros y productos -->
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Sidebar de filtros -->
        <div class="w-full md:w-64 shrink-0">
          <div class="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 class="text-lg font-semibold mb-4">Filtros</h2>
            
            <!-- Categorías -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-gray-900 mb-3">Categorías</h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input id="category-all" type="radio" name="category" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="category-all" class="ml-2 text-sm text-gray-700">Todos</label>
                </div>
                <div class="flex items-center">
                  <input id="category-women" type="radio" name="category" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="category-women" class="ml-2 text-sm text-gray-700">Mujer</label>
                </div>
                <div class="flex items-center">
                  <input id="category-men" type="radio" name="category" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="category-men" class="ml-2 text-sm text-gray-700">Hombre</label>
                </div>
                <div class="flex items-center">
                  <input id="category-accessories" type="radio" name="category" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="category-accessories" class="ml-2 text-sm text-gray-700">Accesorios</label>
                </div>
              </div>
            </div>
            
            <!-- Rango de precios -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-gray-900 mb-3">Precio</h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <input id="price-all" type="radio" name="price" checked class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="price-all" class="ml-2 text-sm text-gray-700">Todos los precios</label>
                </div>
                <div class="flex items-center">
                  <input id="price-under-25" type="radio" name="price" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="price-under-25" class="ml-2 text-sm text-gray-700">Menos de $25</label>
                </div>
                <div class="flex items-center">
                  <input id="price-25-50" type="radio" name="price" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="price-25-50" class="ml-2 text-sm text-gray-700">$25 - $50</label>
                </div>
                <div class="flex items-center">
                  <input id="price-over-50" type="radio" name="price" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500">
                  <label for="price-over-50" class="ml-2 text-sm text-gray-700">Más de $50</label>
                </div>
              </div>
            </div>
            
            <!-- Botón de aplicar filtros -->
            <button class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
              Aplicar filtros
            </button>
          </div>
        </div>
        
        <!-- Grid de productos -->
        <div class="flex-1">
          <!-- Ordenar y contador de resultados -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <p class="text-sm text-gray-500 mb-4 sm:mb-0">Mostrando <span class="font-medium text-gray-900">{{ products.length }}</span> productos</p>
            <div class="relative">
              <select class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                <option>Más relevantes</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
                <option>Más recientes</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          
          <!-- Grid de productos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            <div v-for="product in products" :key="product.id" class="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
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
          
          <!-- Paginación -->
          <div class="mt-12 flex justify-center">
            <nav class="flex items-center space-x-2">
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100">
                <span class="sr-only">Anterior</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium bg-indigo-600 text-white">1</a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">2</a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">3</a>
              <span class="px-3 py-1 rounded-md text-sm font-medium text-gray-500">...</span>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">8</a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">9</a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">10</a>
              <a href="#" class="px-3 py-1 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100">
                <span class="sr-only">Siguiente</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProducts } from '~/composables/useProducts'
import { useCart } from '~/composables/useCart'

const { products } = useProducts()
const { addToCart: addProductToCart } = useCart()

// Para la funcionalidad de agregar al carrito desde la página de productos
const addToCart = (product) => {
  addProductToCart(product, 1)
  alert(`${product.name} agregado al carrito`)
}

useHead({
  title: 'Productos - Fashion Store',
  meta: [
    { name: 'description', content: 'Explora nuestra colección completa de productos de moda.' }
  ]
})
</script>
