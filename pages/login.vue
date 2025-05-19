<template>
  <div class="container mx-auto p-8">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
        </div>
        
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            class="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
        </div>
        
        <div v-if="errorMessage" class="p-4 bg-red-100 text-red-700 rounded-md">
          {{ errorMessage }}
        </div>
        
        <button 
          type="submit" 
          class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          :disabled="loading"
        >
          {{ loading ? 'Iniciando sesión...' : 'Iniciar Sesión' }}
        </button>
      </form>
      
      <div class="mt-6 text-center">
        <p class="text-gray-600">
          Esta es una página de inicio de sesión temporal para resolver errores de redirección.
          <br>
          <span class="text-sm">No es necesario iniciar sesión para usar la aplicación.</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSupabaseClient } from '#imports'

// En Nuxt 3, ref está auto-importado, no necesita ser importado explícitamente

// Estado del formulario
const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

// Cliente de Supabase
const supabase = useSupabaseClient()

// Manejar inicio de sesión
const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  
  try {
    // Esta función no hace nada real, solo simula un inicio de sesión
    // En una implementación real, usaríamos supabase.auth.signInWithPassword
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Redirigir a la página principal
    navigateTo('/')
  } catch (error) {
    errorMessage.value = 'Error al iniciar sesión. Por favor, inténtalo de nuevo.'
    console.error('Error de inicio de sesión:', error.message)
  } finally {
    loading.value = false
  }
}

// SEO
useHead({
  title: 'Iniciar Sesión - Fashion Store',
  meta: [
    { name: 'description', content: 'Inicia sesión en Fashion Store para acceder a tu cuenta.' }
  ]
})
</script>
