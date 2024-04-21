<template>
  <div class="p-10">
    <h1 class="font-bolt text-2xl mb-10">CRM system</h1>
    <div>
      <UiCard class="mb-3 bg-slate-900" draggable="true">
        <UiCardHeader role="button">name</UiCardHeader>
        <UiCardContent>Company</UiCardContent>
        <UiCardFooter>Date</UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ICard, IColumn } from '~/components/kanban/kanban.type';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';

  useSeoMeta({
    title: 'Home'
  })

  const dragCardRef = ref<ICard | null>(null)
  const sourceColumnRef = ref<IColumn | null>(null)


</script>

<style>
  
</style>