<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('text-xs opacity-70 p-3 pt-0', props.class)">
    <slot />
  </div>
</template>
