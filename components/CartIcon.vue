<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      <span class="ml-1">{{ cartCount }}</span>
    </button>
    
    <!-- Dropdown del carrito -->
    <div v-if="isOpen" class="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-gray-800 mb-2">Tu Carrito</h3>
        
        <div v-if="cart.length === 0" class="text-gray-500 py-2">
          Tu carrito está vacío
        </div>
        
        <div v-else>
          <div v-for="item in cart" :key="item.product.id" class="flex items-start py-2 border-b">
            <img :src="item.product.image" :alt="item.product.name" class="w-12 h-12 object-cover rounded">
            <div class="ml-3 flex-1">
              <div class="flex justify-between">
                <h4 class="text-sm font-medium text-gray-800">{{ item.product.name }}</h4>
                <button @click="removeItem(item.product.id)" class="text-red-500 text-xs">
                  Eliminar
                </button>
              </div>
              <div class="flex justify-between items-center mt-1">
                <span class="text-xs text-gray-500">{{ item.quantity }} x {{ item.product.price }}</span>
                <span class="text-sm font-medium text-gray-800">
                  ${{ (parseFloat(item.product.price.replace('$', '')) * item.quantity).toFixed(2) }}
                </span>
              </div>
            </div>
          </div>
          
          <div class="flex justify-between items-center font-semibold mt-4">
            <span>Total:</span>
            <span>${{ cartTotal }}</span>
          </div>
          
          <div class="mt-4 flex space-x-2">
            <button @click="clearCart" class="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">
              Vaciar
            </button>
            <button @click="checkout" class="bg-indigo-600 text-white px-3 py-1 rounded text-sm flex-1">
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useCart } from '~/composables/useCart'

const { cart, removeFromCart, getCartCount, getCartTotal, clearCart } = useCart()

const isOpen = ref(false)
const cartCount = computed(() => getCartCount())
const cartTotal = computed(() => getCartTotal())

// Cerrar el dropdown cuando se hace clic fuera
const handleClickOutside = (event) => {
  if (isOpen.value && !event.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Eliminar un item del carrito
const removeItem = (productId) => {
  removeFromCart(productId)
}

// Finalizar compra
const checkout = () => {
  alert('¡Gracias por tu compra! Total: $' + cartTotal.value)
  clearCart()
  isOpen.value = false
}

// Agregar/remover event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
