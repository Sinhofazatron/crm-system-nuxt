<template >
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full bg-slate-900">
    <NuxtLink to="/" class="mb-10 flex justify-center">
      <NuxtImg src="/logo.svg" alt="logo" width="50px"/>
    </NuxtLink>
    <button class=" absolute top-2 right-2 transition-colors hover:text-purple-200">
      <Icon @click="logout" name="line-md:logout" size="20"/>
    </button>
    <LayoutMenu/>
  </aside>
</template>

<script lang="ts" setup>
  const store = useAuthStore()
  const router = useRouter()
  const isLoadingStore = useIsLoadingStore()

  const logout = async () => {
    isLoadingStore.set(true)
    await account.deleteSession('current')
    store.clear()
    await router.push('/login')
    isLoadingStore.set(false)
  }
</script>

<style>
  
</style>