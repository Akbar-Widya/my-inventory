<script setup lang="ts">
import AddProductForm from '@/components/AddProductForm.vue';
import InventoryTable from './components/InventoryTable.vue';
</script>

<template>
  <main class="min-h-screen bg-slate-50 p-4 md:p-8">
    <div class="max-w-4xl mx-auto space-y-6">
      <header>
        <h1 class="text-2xl font-bold text-slate-900">Warehouse System</h1>
        <p class="text-slate-500">Manajemen stok barang real-time</p>
      </header>

    <AddProductForm />
    <InventoryTable />
    </div>
  </main>
</template>