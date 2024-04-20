<template >
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 flex justify-center">
      <NuxtImg src="/logo.svg" alt="logo" width="50px"/>
    </NuxtLink>
    <button class=" absolute top-2 right-2 transition-colors hover:text-purple-200">
      <Icon name="line-md:logout" size="20"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>

<script lang="ts" setup>

</script>

<style>
  
</style>