import { useState } from '#app'

export const useCart = () => {
  const cart = useState('cart', () => [])
  
  // Añadir producto al carrito
  const addToCart = (product, quantity) => {
    // Buscar si el producto ya está en el carrito
    const existingItem = cart.value.find(item => item.product.id === product.id)
    
    if (existingItem) {
      // Si ya existe, actualizar la cantidad
      existingItem.quantity += quantity
    } else {
      // Si no existe, añadir nuevo item
      cart.value.push({
        product,
        quantity
      })
    }
  }
  
  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    cart.value = cart.value.filter(item => item.product.id !== productId)
  }
  
  // Actualizar cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    const item = cart.value.find(item => item.product.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }
  
  // Obtener número total de items en el carrito
  const getCartCount = () => {
    return cart.value.reduce((total, item) => total + item.quantity, 0)
  }
  
  // Obtener precio total del carrito
  const getCartTotal = () => {
    return cart.value.reduce((total, item) => {
      // Convertir el precio de string a número (eliminar símbolo $)
      const price = parseFloat(item.product.price.replace('$', ''))
      return total + (price * item.quantity)
    }, 0).toFixed(2)
  }
  
  // Vaciar carrito
  const clearCart = () => {
    cart.value = []
  }
  
  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartCount,
    getCartTotal,
    clearCart
  }
}
