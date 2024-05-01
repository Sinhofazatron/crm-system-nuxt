<template>
  <div class="p-10">
    <h1 class="font-bolt text-2xl mb-10">CRM system</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div 
          v-for="(column, index) in data" 
          :key="column.id"
          @dragover="() => handleDrop(column)"
          @drop="() => handleDrop(column)"
        >
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center" :style="generateColumnStyle(index, data?.length)">
            {{ column.name }}
          </div>
          <KanbanCreateDeal :refetch="refetch" :status="column.id"/>
          <UiCard
            v-for="card in column.items" 
            :key="card.id" 
            class="mb-3 bg-slate-900" 
            draggable="true" 
            @dragstart="() => handleDragStart(card, column)">
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
  import { useMutation } from '@tanstack/vue-query';
  import type { EnumStatus } from '~/types/deal.types';
import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import { generateColumnStyle } from '~/components/kanban/generate-gradient';

  type TypeMutationVariables = {
    docId: string
    status?: EnumStatus
  }

  useKanbanQuery()
  useSeoMeta({
    title: 'Home'
  })

  const dragCardRef = ref<ICard | null>(null)
  const sourceColumnRef = ref<IColumn | null>(null)
  const { data, isLoading, refetch } = useKanbanQuery()

  const { mutate } = useMutation({
    mutationKey: ['move card'],
    mutationFn: ({docId, status}: TypeMutationVariables) => 
      DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
        status
      }),
      onSuccess: () => {
        refetch()
      }
  })

  function handleDragStart(card: ICard, column: IColumn) {
    dragCardRef.value = card
    sourceColumnRef.value = column
  }

  function handleDragOver(event: DragEvent) {
    event.preventDefault()
  }

  function handleDrop(targetColumn: IColumn) {
    if (dragCardRef.value && sourceColumnRef.value) {
      mutate({ docId: dragCardRef.value.id, status: targetColumn.id })
    }
  }
</script>

<style>
  
</style>