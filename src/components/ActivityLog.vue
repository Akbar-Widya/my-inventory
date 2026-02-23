<script setup lang="ts">
import { useWarehouse } from '@/composables/useWarehouse';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

const { logs } = useWarehouse();

const formatTime = (ts: number) => {
  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(ts)
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Riwayat Aktivitas</CardTitle>
    </CardHeader>
    <CardContent>
      <ScrollArea class="h-[300px] w-full pr-4">
        <div v-if="logs.length === 0" class="text-center text-sm text-muted-foreground py-10">
          Belum ada aktivitas tercatat.
        </div>
        <div v-else class="space-y-4">
          <div v-for="log in logs" :key="log.id" class="flex flex-col border-b border-border pb-2 last:border-0">
            <span class="text-sm font-medium">{{log.message}}</span>
            <span class="text-xs text-muted-foreground">{{formatTime(log.timestamp)}}</span>
          </div>
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
</template>