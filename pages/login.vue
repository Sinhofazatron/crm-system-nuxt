<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-slate-900 w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <form>
        <UiInput
          v-model="userRef.email"
          placeholder="Email"
          type="email"
          class="mb-3" 
        />
        <UiInput
          v-model="userRef.password"
          placeholder="Password"
          type="password"
          class="mb-3" 
        />
        <UiInput
          v-model="userRef.name"
          placeholder="Name"
          type="text"
          class="mb-3" 
        />
        <div class="flex items-center justify-center gap-10">
          <UiButton @click="login" type="button">Login</UiButton>
          <UiButton @click="register" type="button">Register</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIsLoadingStore, useAuthStore } from '~/store/auth.store';
import { v4 as uuid } from "uuid"

useHead({ title: 'Login' })
const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(userRef.value.email, userRef.value.password)
  const response = await account.get()
  console.log(response)
  
  if(response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status,
    })
  }
  
  userRef.value = {
    email: "",
    password: "",
    name: ""
  }

  await router.push("/")
  isLoadingStore.set(false)
}

const register = async () => {
  await account.create(uuid(), userRef.value.email, userRef.value.password, userRef.value.name)
  await login()
}

const userRef = ref({
  email: "",
  password: "",
  name: ""
})
</script>

<style>
  
</style>
