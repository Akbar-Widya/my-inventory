import {ref} from 'vue'
import {useStorage} from '@vueuse/core'

export interface Product {
  id: string
  name: string
  quantity: number
  updatedAt: number
}

const products = useStorage<Product[]>('warehouse-inventory', [])

export function useWarehouse() {
  const addProduct = (name: string, qty: number) => {
    if(!name || qty <= 0) return

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      quantity: qty,
      updatedAt: Date.now()
    }

    products.value.push(newProduct)
  }

  const updateQuantity = (id: string, delta: number) => {
    const product = products.value.find(p => p.id === id)
    if (product) {
      const newQty = product.quantity + delta
      if (newQty >= 0) {
        product.quantity = newQty
        product.updatedAt = Date.now()
      }
    }
  }

  const deleteProduct = (id: string) => {
    products.value = products.value.filter(p => p.id !== id)
  }

  return {
    products,
    addProduct,
    updateQuantity,
    deleteProduct
  }
}