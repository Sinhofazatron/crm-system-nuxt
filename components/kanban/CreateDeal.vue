<template>
  <div class="text-center mb-2">
    <button @click="!isOpenForm" class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]">
      <Icon 
        v-if="isOpenForm"
        name="UP"
        class="fade-in-100 fade-out-0"
        size="25"
      />
      <Icon 
        v-if="isOpenForm"
        name="PLUS"
        class="fade-in-100 fade-out-0"
        size="25"
      />
    </button>
  </div>
  <form>
    
  </form>
</template>
<script lang="ts" setup>
  import { useMutation } from '@tanstack/vue-query';
  import { v4 as uuidv4 } from 'uuid';
  import { defineProps } from 'vue';
  import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
  import type { IDeal } from '~/types/deal.types';

  const isOpenForm = ref<boolean>(false)
</script>

<style scoped>
  .input {
    @apply border-[#161c26] mb-2 placeholder:text-[#748092] focus:border-border transition-colors
  }

  .btn {
    @apply text-xs border py-1 px-2 rounded border-[#161c26] hover:border-[#482c65] transition-colors text-[#aebed5] hover:text-white
  }

  .form {
    @apply mb-3 block;
    animation: show 0.3s ease-in-out
  }

  @keyframes show {
    from {
      @apply border-[#252c83d]
      transform: translateY(-35px)
      opacity: 0.4
    }

    90% {
      @apply border-[#252c83d]
    }

    to {
      @apply border-transparent;
      transform: translateY(0);
      opacity: 1
    }
  }
</style>