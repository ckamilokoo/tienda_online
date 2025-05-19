<template>
  <div class="container mx-auto p-4">
    <div class="mb-4">
      <NuxtLink to="/products" class="text-indigo-600 hover:text-indigo-800 transition">
        &larr; Volver a productos
      </NuxtLink>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Imagen del producto -->
      <div class="relative">
        <img :src="product.image" :alt="product.name" class="w-full h-96 object-cover rounded-lg">
        <span class="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full">
          Nuevo
        </span>
      </div>
      
      <!-- Detalles del producto -->
      <div>
        <h1 class="text-4xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-2xl text-gray-800 mb-4">{{ product.price }}</p>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-2">Descripción:</h2>
          <p class="text-gray-600">{{ product.description }}</p>
        </div>
        
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2">Cantidad:</label>
          <div class="flex items-center">
            <button @click="decreaseQuantity" class="bg-gray-200 px-3 py-1 rounded-l">-</button>
            <input type="number" v-model="quantity" min="1" class="border text-center w-16 py-1">
            <button @click="increaseQuantity" class="bg-gray-200 px-3 py-1 rounded-r">+</button>
          </div>
        </div>
        
        <button @click="addToCart" class="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 w-full transition">
          Agregar al Carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { useProducts } from '~/composables/useProducts'
import { useCart } from '~/composables/useCart'

const route = useRoute()
const id = route.params.id
const { getProductById } = useProducts()
const product = getProductById(id)

const quantity = ref(1)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const { addToCart: addProductToCart } = useCart()

const addToCart = () => {
  addProductToCart(product, quantity.value)
  alert(`Agregado al carrito: ${quantity.value} ${product.name}`)
}

useHead({
  title: `${product.name} - Fashion Store`,
  meta: [
    { name: 'description', content: product.description }
  ]
})
</script>
