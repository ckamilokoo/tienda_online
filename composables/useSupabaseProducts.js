import { useSupabaseClient } from '#imports'
import { ref } from 'vue'

export const useSupabaseProducts = () => {
  const supabase = useSupabaseClient()
  const loading = ref(false)
  const error = ref(null)

  // Obtener todos los productos
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    
    try {
      const { data, error: err } = await supabase
        .from('productos')
        .select('*')
        .order('id')
      
      if (err) throw err
      
      return data
    } catch (err) {
      error.value = err.message
      console.error('Error al obtener productos:', err.message)
      return []
    } finally {
      loading.value = false
    }
  }

  // Obtener un producto por su ID
  const fetchProductById = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      const { data, error: err } = await supabase
        .from('productos')
        .select('*')
        .eq('id', id)
        .single()
      
      if (err) throw err
      
      return data
    } catch (err) {
      error.value = err.message
      console.error(`Error al obtener el producto con ID ${id}:`, err.message)
      return null
    } finally {
      loading.value = false
    }
  }

  // Crear un nuevo producto
  const createProduct = async (product) => {
    loading.value = true
    error.value = null
    
    try {
      // Asegurarse de que el producto tenga los campos correctos
      const productoData = {
        nombre: product.nombre || product.name || '',
        descripcion: product.descripcion || product.description || '',
        imagen_url: product.imagen_url || product.image || '',
        precio: product.precio || product.price || 0
      }
      
      const { data, error: err } = await supabase
        .from('productos')
        .insert([productoData])
        .select()
      
      if (err) throw err
      
      return data[0]
    } catch (err) {
      error.value = err.message
      console.error('Error al crear el producto:', err.message)
      return null
    } finally {
      loading.value = false
    }
  }

  // Actualizar un producto existente
  const updateProduct = async (id, updates) => {
    loading.value = true
    error.value = null
    
    try {
      // Asegurarse de que las actualizaciones tengan los campos correctos
      const productoUpdates = {}
      
      if (updates.nombre || updates.name) {
        productoUpdates.nombre = updates.nombre || updates.name
      }
      
      if (updates.descripcion || updates.description) {
        productoUpdates.descripcion = updates.descripcion || updates.description
      }
      
      if (updates.imagen_url || updates.image) {
        productoUpdates.imagen_url = updates.imagen_url || updates.image
      }
      
      if (updates.precio || updates.price) {
        productoUpdates.precio = updates.precio || updates.price
      }
      
      const { data, error: err } = await supabase
        .from('productos')
        .update(productoUpdates)
        .eq('id', id)
        .select()
      
      if (err) throw err
      
      return data[0]
    } catch (err) {
      error.value = err.message
      console.error(`Error al actualizar el producto con ID ${id}:`, err.message)
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
      const { error: err } = await supabase
        .from('productos')
        .delete()
        .eq('id', id)
      
      if (err) throw err
      
      return true
    } catch (err) {
      error.value = err.message
      console.error(`Error al eliminar el producto con ID ${id}:`, err.message)
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchProducts,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct
  }
}
