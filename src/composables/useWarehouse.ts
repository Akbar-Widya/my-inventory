import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export interface Product {
  id: string;
  name: string;
  quantity: number;
  updatedAt: number;
}

export interface LogEntry {
  id: string;
  message: string;
  timestamp: number;
}

export function useWarehouse() {
  const products = useStorage<Product[]>("warehouse-inventory", []);
  const logs = useStorage<LogEntry[]>("warehouse-logs", []);

  const addProduct = (name: string, qty: number) => {
    if (!name || qty <= 0) return;

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      quantity: qty,
      updatedAt: Date.now(),
    };

    products.value.push(newProduct);
    addLog(`Produk baru ditambahkan: ${name} (Qty: ${qty})`);
  };

  const updateQuantity = (id: string, delta: number) => {
    const product = products.value.find((p) => p.id === id);
    if (product) {
      const newQty = product.quantity + delta;
      const action = delta > 0 ? "ditambah" : "dikurangi";
      if (newQty >= 0) {
        product.quantity = newQty;
        product.updatedAt = Date.now();
        addLog(`Stok ${product.name} ${action} ${Math.abs(delta)}`);
      }
    }
  };

  const deleteProduct = (id: string) => {
    const product = products.value.find((p) => p.id === id);
    if (product) {
      addLog(`Produk dihapus: ${product.name}`);
      products.value = products.value.filter((p) => p.id !== id);
    }
  };

  const addLog = (message: string) => {
    const newLog: LogEntry = {
      id: crypto.randomUUID(),
      message,
      timestamp: Date.now(),
    };
    logs.value.unshift(newLog);
    if (logs.value.length > 50) logs.value.pop();
  };

  return {
    products,
    addProduct,
    updateQuantity,
    deleteProduct,
    logs,
  };
}
