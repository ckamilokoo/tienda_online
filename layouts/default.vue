<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-gray-900 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Fashion Store</h1>
        <div class="flex items-center space-x-6">
          <nav class="flex items-center space-x-6">
            <NuxtLink to="/" class="hover:text-gray-300">Inicio</NuxtLink>
            <NuxtLink to="/products" class="hover:text-gray-300">Productos</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-gray-300">Contacto</NuxtLink>
            <NuxtLink to="/admin" class="hover:text-gray-300 inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.352-.035-.696-.1-1.028A5.001 5.001 0 0010 11z" clip-rule="evenodd" />
              </svg>
              Admin
            </NuxtLink>
          </nav>
          <CartIcon />
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>© 2025 Fashion Store - Todos los derechos reservados</p>
        <p class="mt-2">Contacto: info@fashionstore.com</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import CartIcon from '~/components/CartIcon.vue'
</script>
