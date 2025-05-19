<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Panel de Administración</h1>
    
    <!-- Tabs de navegación -->
    <div class="flex border-b border-gray-300 mb-6">
      <button 
        @click="activeTab = 'products'" 
        :class="['px-4 py-2 mr-2', activeTab === 'products' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-600 hover:text-blue-500']"
      >
        Productos
      </button>
      <button 
        @click="activeTab = 'categories'" 
        :class="['px-4 py-2', activeTab === 'categories' ? 'bg-blue-500 text-white rounded-t-lg' : 'text-gray-600 hover:text-blue-500']"
      >
        Categorías
      </button>
    </div>
    
    <!-- Contenido de la pestaña de Productos -->
    <div v-if="activeTab === 'products'">
      <!-- Botón para añadir nuevo producto -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Gestión de Productos</h2>
        <button 
          @click="openProductModal(null)" 
          class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center"
        >
          <span class="mr-2">Añadir Producto</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <!-- Tabla de productos -->
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Imagen</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in products" :key="product.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <img :src="product.image" alt="Imagen del producto" class="h-12 w-12 object-cover rounded">
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ product.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.price }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.category }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ product.stock }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  @click="openProductModal(product)" 
                  class="text-indigo-600 hover:text-indigo-900 mr-3"
                >
                  Editar
                </button>
                <button 
                  @click="confirmDelete(product)" 
                  class="text-red-600 hover:text-red-900"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Contenido de la pestaña de Categorías -->
    <div v-if="activeTab === 'categories'">
      <h2 class="text-2xl font-semibold mb-6">Gestión de Categorías</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Lista de categorías -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Categorías Existentes</h3>
          <ul class="space-y-2">
            <li v-for="category in categories" :key="category" class="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span>{{ category }}</span>
              <span class="text-sm text-gray-500">
                {{ getProductCountByCategory(category) }} productos
              </span>
            </li>
          </ul>
        </div>
        
        <!-- Estadísticas de productos por categoría -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-4">Estadísticas</h3>
          <div v-for="category in categories" :key="category" class="mb-4">
            <div class="flex justify-between mb-1">
              <span>{{ category }}</span>
              <span>{{ getProductCountByCategory(category) }} / {{ products.length }}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                class="bg-blue-600 h-2.5 rounded-full" 
                :style="`width: ${(getProductCountByCategory(category) / products.length) * 100}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal para añadir/editar producto -->
    <div v-if="showProductModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold mb-6">{{ isEditing ? 'Editar Producto' : 'Añadir Nuevo Producto' }}</h2>
        
        <form @submit.prevent="saveProduct">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Nombre del producto -->
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input 
                v-model="currentProduct.name" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nombre del producto"
              >
              <p class="text-xs text-gray-500 mt-1">Campo 'nombre' en la tabla productos</p>
            </div>
            
            <!-- Descripción -->
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea 
                v-model="currentProduct.description" 
                rows="3" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Descripción detallada del producto"
              ></textarea>
              <p class="text-xs text-gray-500 mt-1">Campo 'descripcion' en la tabla productos</p>
            </div>
            
            <!-- Precio -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Precio</label>
              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                <input 
                  v-model="currentProduct.priceValue" 
                  type="number" 
                  step="0.01"
                  min="0"
                  required
                  class="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="0.00"
                >
              </div>
              <p class="text-xs text-gray-500 mt-1">Campo 'precio' en la tabla productos (número)</p>
            </div>
            
            <!-- Stock (opcional, no está en la tabla 'productos' pero lo mantenemos para compatibilidad) -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Stock</label>
              <input 
                v-model="currentProduct.stock" 
                type="number" 
                min="0" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Cantidad disponible"
              >
              <p class="text-xs text-gray-500 mt-1">Campo opcional (no en la tabla)</p>
            </div>
            
            <!-- Categoría -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
              <select 
                v-model="currentProduct.category" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
                <option value="nueva">+ Añadir nueva categoría</option>
              </select>
            </div>
            
            <!-- Nueva categoría (condicional) -->
            <div v-if="currentProduct.category === 'nueva'">
              <label class="block text-sm font-medium text-gray-700 mb-1">Nueva Categoría</label>
              <input 
                v-model="newCategory" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
            </div>
            
            <!-- URL de imagen -->
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-1">URL de Imagen</label>
              <input 
                v-model="currentProduct.image" 
                type="url" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://ejemplo.com/imagen.jpg"
              >
              <p class="text-xs text-gray-500 mt-1">Campo 'imagen_url' en la tabla productos</p>
              <div class="mt-2">
                <img 
                  :src="currentProduct.image" 
                  alt="Vista previa de la imagen" 
                  class="h-32 w-32 object-cover rounded border border-gray-300"
                >
              </div>
            </div>
          </div>
          
          <!-- Botones de acción -->
          <div class="flex justify-end mt-8 space-x-3">
            <button 
              type="button" 
              @click="showProductModal = false" 
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {{ isEditing ? 'Guardar Cambios' : 'Añadir Producto' }}
            </button>
          </div>
        </form>
      </div>
    </div>
    
    <!-- Modal de confirmación para eliminar -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-xl font-bold mb-4">Confirmar Eliminación</h3>
        <p class="mb-6">¿Estás seguro de que deseas eliminar el producto "{{ productToDelete?.name }}"? Esta acción no se puede deshacer.</p>
        
        <div class="flex justify-end space-x-3">
          <button 
            @click="showDeleteModal = false" 
            class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button 
            @click="deleteProductConfirmed" 
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProducts } from '~/composables/useProducts'
// useHead es auto-importado en Nuxt 3, no necesita ser importado

// SEO
useHead({
  title: 'Panel de Administración - Fashion Store',
  meta: [
    { name: 'description', content: 'Panel de administración para gestionar productos y categorías de Fashion Store' }
  ]
})

// Estado y composables
const { 
  products, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  getCategories,
  getProductsByCategory
} = useProducts()

// Estado local
const activeTab = ref('products')
const showProductModal = ref(false)
const showDeleteModal = ref(false)
const isEditing = ref(false)
const currentProduct = ref({
  name: '',
  description: '',
  priceValue: 0,  // Valor numérico para el campo 'precio'
  image: 'https://picsum.photos/400/300?' + Math.floor(Math.random() * 100),
  category: '',
  stock: 0
})
const productToDelete = ref(null)
const newCategory = ref('')

// Categorías disponibles
const categories = computed(() => getCategories())

// Métodos
const openProductModal = (product) => {
  if (product) {
    // Modo edición
    isEditing.value = true
    // Convertir el precio de formato '$XX.XX' a número para el campo priceValue
    const priceNumber = product.price ? parseFloat(product.price.replace('$', '')) : 0
    
    currentProduct.value = { 
      ...product,
      priceValue: priceNumber
    }
  } else {
    // Modo creación
    isEditing.value = false
    currentProduct.value = {
      name: '',
      description: '',
      priceValue: 0,
      image: 'https://picsum.photos/400/300?' + Math.floor(Math.random() * 100),
      category: categories.value.length > 0 ? categories.value[0] : 'nueva',
      stock: 0
    }
  }
  showProductModal.value = true
}

const saveProduct = () => {
  // Si se está creando una nueva categoría
  if (currentProduct.value.category === 'nueva' && newCategory.value) {
    currentProduct.value.category = newCategory.value
  }
  
  // Preparar los datos del producto para guardar
  // Asegurarse de que el precio se guarde correctamente
  const productToSave = {
    ...currentProduct.value,
    // Formatear el precio como texto para la UI pero guardar el valor numérico
    price: `$${currentProduct.value.priceValue}`,
  }
  
  if (isEditing.value) {
    // Actualizar producto existente
    updateProduct(productToSave.id, productToSave)
  } else {
    // Añadir nuevo producto
    addProduct(productToSave)
  }
  
  // Cerrar modal y resetear estado
  showProductModal.value = false
  newCategory.value = ''
}

const confirmDelete = (product) => {
  productToDelete.value = product
  showDeleteModal.value = true
}

const deleteProductConfirmed = () => {
  if (productToDelete.value) {
    deleteProduct(productToDelete.value.id)
    showDeleteModal.value = false
    productToDelete.value = null
  }
}

const getProductCountByCategory = (category) => {
  return getProductsByCategory(category).length
}
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
