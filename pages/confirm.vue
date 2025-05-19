<template>
  <div class="container mx-auto p-8 flex items-center justify-center min-h-[50vh]">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
      <h1 class="text-2xl font-semibold mb-4">Confirmando tu autenticación</h1>
      <p class="text-gray-600">Por favor espera mientras procesamos tu inicio de sesión...</p>
    </div>
  </div>
</template>

<script setup>
// En Nuxt 3, estas funciones están auto-importadas
const user = useSupabaseUser()

// Redirigir a la página principal si el usuario está autenticado
// o a la página de login si no lo está
watch(user, () => {
  if (user.value) {
    navigateTo('/')
  } else {
    setTimeout(() => {
      navigateTo('/')
    }, 2000)
  }
}, { immediate: true })

// SEO
useHead({
  title: 'Confirmando Autenticación - Fashion Store',
  meta: [
    { name: 'description', content: 'Página de confirmación de autenticación para Fashion Store.' }
  ]
})
</script>
