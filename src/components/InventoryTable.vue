<script setup lang="ts">
import { useWarehouse } from '@/composables/useWarehouse'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { PlusIcon, MinusIcon, Trash2Icon } from 'lucide-vue-next'

const { products, updateQuantity, deleteProduct } = useWarehouse()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Daftar Inventaris</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Barang</TableHead>
            <TableHead class="text-center">Jumlah Stok</TableHead>
            <TableHead class="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="item in products" :key="item.id">
            <TableCell class="font-medium">{{ item.name }}</TableCell>
            <TableCell class="text-center">
              <div class="flex items-center justify-center gap-3">
                <Button variant="outline" size="icon" @click="updateQuantity(item.id, -1)"
                  :disabled="item.quantity <= 0">
                  <MinusIcon class="h-4 w-4" />
                </Button>
                <span>{{ item.quantity }}</span>
                <Button variant="outline" size="icon" @click="updateQuantity(item.id, 1)"
                  :disabled="item.quantity <= 0">
                  <PlusIcon class="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
            <TableCell class="text-right">
              <Button
                variant="destructive"
                size="icon"
                @click="deleteProduct(item.id)"
              >
                <Trash2Icon class="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow v-if="products.length === 0">
            <TableCell colspan="3" class="text-center text-slate-500 h-24">
              Belum ada data barang.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>