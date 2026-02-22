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

const { products } = useWarehouse()
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
            <TableHead class="text-right">Jumlah Stok</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="item in products" :key="item.id">
            <TableCell class="font-medium">{{ item.name }}</TableCell>
            <TableCell class="text-right">{{ item.quantity }}</TableCell>
          </TableRow>
          <TableRow v-if="products.length === 0">
            <TableCell colspan="2" class="text-center text-slate-500 h-24">
              Belum ada data barang.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>