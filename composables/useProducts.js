import { useState, useAsyncData } from '#app'
import { useSupabaseClient } from '#imports'
import { ref } from 'vue'
import { useSupabaseProducts } from './useSupabaseProducts'

export const useProducts = () => {
  // Estado local para productos
  const products = useState('products', () => [])
  const loading = useState('products-loading', () => false)
  const error = useState('products-error', () => null)
  
  // Cliente de Supabase y composable de productos
  const supabase = useSupabaseClient()
  const supabaseProducts = useSupabaseProducts()
  
  // Cargar productos desde Supabase
  const loadProducts = async () => {
    if (products.value.length > 0) return products.value
    
    loading.value = true
    error.value = null
    
    try {
      // Usar el composable de Supabase para obtener productos
      const data = await supabaseProducts.fetchProducts()
      
      // Si no hay datos en Supabase, inicializamos con datos de ejemplo
      if (!data || data.length === 0) {
        await initializeProducts()
        return loadProducts()
      }
      
      // Mapear los datos de la tabla 'productos' al formato que espera la aplicación
      const mappedProducts = data.map(item => ({
        id: item.id,
        name: item.nombre,
        description: item.descripcion,
        price: `$${item.precio}`,
        image: item.imagen_url,
        // Añadir campos por defecto si son necesarios para la aplicación
        category: 'General',
        stock: 10
      }))
      
      products.value = mappedProducts
      return mappedProducts
    } catch (err) {
      console.error('Error al cargar productos:', err.message)
      error.value = err.message
      
      // Si hay un error (por ejemplo, la tabla no existe), inicializamos con datos locales
      if (products.value.length === 0) {
        products.value = getInitialProducts()
      }
      
      return products.value
    } finally {
      loading.value = false
    }
  }
  
  // Inicializar la tabla de productos con datos de ejemplo
  const initializeProducts = async () => {
    try {
      const initialProducts = getInitialProducts()
      
      // Convertir productos al formato de la tabla 'productos'
      const productosData = initialProducts.map(product => ({
        nombre: product.name,
        descripcion: product.description,
        imagen_url: product.image,
        precio: parseFloat(product.price.replace('$', ''))
      }))
      
      // Insertar productos iniciales en Supabase
      for (const producto of productosData) {
        await supabaseProducts.createProduct(producto)
      }
      
      console.log('Productos iniciales creados en Supabase')
    } catch (err) {
      console.error('Error al inicializar productos:', err.message)
    }
  }
  
  // Datos iniciales para productos
  const getInitialProducts = () => [
    {
      id: 1,
      name: 'Vestido Verano',
      description: 'Vestido ligero de algodón',
      price: '$49.99',
      image: 'https://picsum.photos/400/300?1',
      category: 'Ropa',
      stock: 15
    },
    {
      id: 2,
      name: 'Camisa Clásica',
      description: 'Camisa de manga larga en lino',
      price: '$39.99',
      image: 'https://picsum.photos/400/300?2',
      category: 'Ropa',
      stock: 20
    },
    {
      id: 3,
      name: 'Jeans Slim Fit',
      description: 'Jeans modernos en azul oscuro',
      price: '$59.99',
      image: 'https://picsum.photos/400/300?3',
      category: 'Ropa',
      stock: 10
    }
  ]
  
  // Cargar productos al inicio
  if (process.client) {
    loadProducts()
  }

  // Obtener un producto por su ID
  const getProductById = async (id) => {
    // Asegurarse de que los productos estén cargados
    await loadProducts()
    
    // Primero intentamos encontrarlo en el estado local
    const localProduct = products.value.find(p => String(p.id) === String(id))
    if (localProduct) return localProduct
    
    // Si no está en el estado local, lo buscamos en Supabase
    try {
      // Usar el composable de Supabase para obtener el producto
      const data = await supabaseProducts.fetchProductById(id)
      
      // Si lo encontramos, lo mapeamos al formato que espera la aplicación
      if (data) {
        const mappedProduct = {
          id: data.id,
          name: data.nombre,
          description: data.descripcion,
          price: `$${data.precio}`,
          image: data.imagen_url,
          category: 'General',
          stock: 10
        }
        
        // Lo añadimos al estado local
        const index = products.value.findIndex(p => p.id === data.id)
        if (index === -1) {
          products.value.push(mappedProduct)
        } else {
          products.value[index] = mappedProduct
        }
        
        return mappedProduct
      }
      
      return null
    } catch (err) {
      console.error(`Error al obtener el producto con ID ${id}:`, err.message)
      return null
    }
  }

  // Añadir un nuevo producto
  const addProduct = async (product) => {
    loading.value = true
    error.value = null
    
    try {
      // Convertir el producto al formato de la tabla 'productos'
      const productoData = {
        nombre: product.name,
        descripcion: product.description,
        imagen_url: product.image,
        precio: parseFloat(product.price.replace('$', ''))
      }
      
      // Crear el producto en Supabase usando el composable
      const data = await supabaseProducts.createProduct(productoData)
      
      // Mapear el producto creado al formato que espera la aplicación
      if (data) {
        const mappedProduct = {
          id: data.id,
          name: data.nombre,
          description: data.descripcion,
          price: `$${data.precio}`,
          image: data.imagen_url,
          category: 'General',
          stock: 10
        }
        
        // Añadir el producto al estado local
        products.value.push(mappedProduct)
        return mappedProduct
      }
      
      return null
    } catch (err) {
      console.error('Error al crear el producto:', err.message)
      error.value = err.message
      
      // Si hay un error con Supabase, añadimos el producto solo localmente
      const newId = Math.max(0, ...products.value.map(p => p.id)) + 1
      const newProduct = { id: newId, ...product }
      products.value.push(newProduct)
      
      return newProduct
    } finally {
      loading.value = false
    }
  }

  // Actualizar un producto existente
  const updateProduct = async (id, updatedData) => {
    loading.value = true
    error.value = null
    
    try {
      // Convertir los datos actualizados al formato de la tabla 'productos'
      const productoUpdates = {}
      
      if (updatedData.name) {
        productoUpdates.nombre = updatedData.name
      }
      
      if (updatedData.description) {
        productoUpdates.descripcion = updatedData.description
      }
      
      if (updatedData.image) {
        productoUpdates.imagen_url = updatedData.image
      }
      
      if (updatedData.price) {
        // Convertir el precio de formato '$XX.XX' a número
        productoUpdates.precio = parseFloat(updatedData.price.replace('$', ''))
      }
      
      // Actualizar el producto en Supabase usando el composable
      const data = await supabaseProducts.updateProduct(id, productoUpdates)
      
      // Mapear el producto actualizado al formato que espera la aplicación
      if (data) {
        const mappedProduct = {
          id: data.id,
          name: data.nombre,
          description: data.descripcion,
          price: `$${data.precio}`,
          image: data.imagen_url,
          category: 'General',
          stock: 10
        }
        
        // Actualizar el producto en el estado local
        const index = products.value.findIndex(p => String(p.id) === String(id))
        if (index !== -1) {
          products.value[index] = mappedProduct
        }
        
        return mappedProduct
      }
      
      return null
    } catch (err) {
      console.error(`Error al actualizar el producto con ID ${id}:`, err.message)
      error.value = err.message
      
      // Si hay un error con Supabase, actualizamos el producto solo localmente
      const index = products.value.findIndex(p => String(p.id) === String(id))
      if (index !== -1) {
        products.value[index] = {
          ...products.value[index],
          ...updatedData,
          id: products.value[index].id // Asegurar que el ID no cambie
        }
        return products.value[index]
      }
      
      return null
    } finally {
      loading.value = false
    }
  }

  // Eliminar un producto
  const deleteProduct = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      // Eliminar el producto de Supabase usando el composable
      const success = await supabaseProducts.deleteProduct(id)
      
      if (!success) {
        throw new Error('No se pudo eliminar el producto')
      }
      
      // Eliminar el producto del estado local
      const index = products.value.findIndex(p => String(p.id) === String(id))
      if (index !== -1) {
        const deletedProduct = products.value[index]
        products.value.splice(index, 1)
        return deletedProduct
      }
      
      return null
    } catch (err) {
      console.error(`Error al eliminar el producto con ID ${id}:`, err.message)
      error.value = err.message
      
      // Si hay un error con Supabase, eliminamos el producto solo localmente
      const index = products.value.findIndex(p => String(p.id) === String(id))
      if (index !== -1) {
        const deletedProduct = products.value[index]
        products.value.splice(index, 1)
        return deletedProduct
      }
      
      return null
    } finally {
      loading.value = false
    }
  }

  // Obtener productos por categoría
  const getProductsByCategory = (category) => {
    if (!category) return products.value
    return products.value.filter(p => p.category === category)
  }

  // Obtener todas las categorías únicas
  const getCategories = () => {
    const categories = new Set(products.value.map(p => p.category))
    return Array.from(categories)
  }

  return {
    products,
    loading,
    error,
    loadProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    getCategories
  }
}
