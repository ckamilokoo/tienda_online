export default {
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  
  // Configuración de Supabase
  supabase: {
    // La URL y la clave anónima se deben configurar en un archivo .env
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    
    // Opciones de cliente
    clientOptions: {
      auth: {
        persistSession: true,
        autoRefreshToken: true
      }
    },
    
    // Configuración de redirecciones
    redirectOptions: {
      login: '/login',           // Ruta a la página de login
      callback: '/confirm',      // Ruta a la página de confirmación
      exclude: [                // Rutas que no requieren autenticación
        '/',
        '/products',
        '/products/*',
        '/contact',
        '/login',
        '/confirm'
      ],
      cookieRedirect: false     // No guardar la ruta de redirección en una cookie
    }
  }
}
