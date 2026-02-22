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

  return {
    products,
    addProduct
  }
}