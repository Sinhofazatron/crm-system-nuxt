<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border transition-colors hover:border-[#a252c83d] bg-card text-card-foreground shadow-sm animation',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
