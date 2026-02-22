<script setup lang="ts">
import {ref} from 'vue'
import {useWarehouse} from '@/composables/useWarehouse'
import { PlusIcon } from 'lucide-vue-next';
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

const {addProduct} = useWarehouse()
const name = ref('')
const qty = ref(1)

const handleSubmit = () => {
  if (name.value && qty.value > 0) {
    addProduct(name.value, qty.value)
    name.value = ''
    qty.value = 1
  }
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tambah Stok Barang</CardTitle>
    </CardHeader>
    <CardContent>
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 md:flex-row md:items-end">
        <div class="flex-1 space-y-2">
          <Label for="product-name">Nama Produk</Label>
          <Input
            id="product-name"
            v-model="name"
            placeholder="Masukkan nama barang..."
          />
        </div>

        <div class="w-full md:w-32 space-y-2">
          <Label for="quantity">Jumlah</Label>
          <Input
            id="quantity"
            v-model.number="qty"
            type="number"
          />
        </div>

        <Button type="submit" class="w-full md:w-auto">
          <PlusIcon class="mr-2 h-4 w-4" />
          Simpan
        </Button>
      </form>
    </CardContent>
  </Card>

</template>