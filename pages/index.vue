<template>
  <div class="p-10">
    <h1 class="font-bolt text-2xl mb-10">CRM system</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="column in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>
          <UiCard v-for="card in column.items" :key="card.id" class="mb-3 bg-slate-900" draggable="true">
            <UiCardHeader role="button">
              <UiCardTitle>{{ card.name }}</UiCardTitle>
              <UiCardDescription>{{ convertCurrency(card.price) }}</UiCardDescription>
            </UiCardHeader>
            <UiCardContent>{{ card.companyName }}</UiCardContent>
            <UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { ICard, IColumn } from '~/components/kanban/kanban.type';
  import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';
  import { convertCurrency } from '@/utils/convertCurrency'
  import dayjs from 'dayjs';

  useSeoMeta({
    title: 'Home'
  })

  const dragCardRef = ref<ICard | null>(null)
  const sourceColumnRef = ref<IColumn | null>(null)
  const { data, isLoading, refetch } = useKanbanQuery()
</script>

<style>
  
</style>