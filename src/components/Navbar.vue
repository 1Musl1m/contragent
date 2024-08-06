<template>
  <nav class="flex items-center justify-between py-5 px-20 border">
    <img src="/logo.svg" alt="" />
    <ul class="flex gap-10 text-black">
      <li class="text-xl"><router-link to="/dashboard/summary">Главная</router-link></li>
      <li class="text-xl"><router-link to="">Маркетплейс</router-link></li>
      <li class="text-xl"><router-link to="">Тарифы</router-link></li>
      <li class="text-xl"><router-link to="">о Проекте</router-link></li>
      <li class="text-xl"><router-link to="">Реквизиты</router-link></li>
    </ul>
    <div v-if="userProfile" class="flex items-center gap-4" @click="toggle">
      <h1 class="text-black cursor-pointer">{{ userProfile.full_name }}</h1>
      <img src="/user.svg" width="30px" class="cursor-pointer" />
    </div>

    <div v-else class="flex items-center gap-4">
      <router-link to="/auth" class="text-black">Войти</router-link>
      <img src="/user.svg" width="30px" class="cursor-pointer" />
    </div>

    <Popover v-if="userProfile" ref="user_op">
      <div class="p-2">
        <h1 class="mb-2 text-gray-400 text-sm">Аккаунт</h1>
        <span class="text-blue-600">{{ userProfile.email }}</span>
        <app-divider />
        <ul v-for="item in options" :key="item.name">
          <li class="mb-2">
            <a href="">{{ item.name }}</a>
          </li>
        </ul>
        <h1 @click="logout" class="cursor-pointer">Выйти</h1>
      </div>
    </Popover>
  </nav>
</template>

<script lang="ts" setup>
import Popover from 'primevue/popover'
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { fetchUserProfile } from '@/servises/authService'
import { useRouter } from 'vue-router'

const router = useRouter()
const user_op = ref()
const userStore = useUserStore()
const userProfile = computed(() => userStore.profiles[0])

const toggle = (event: Event): void => {
  user_op.value.toggle(event)
}

const logout = async (): Promise<void> => {
  try {
    userStore.clearUserProfiles()
    localStorage.removeItem('access_token')
    await router.push('/dashboard/summary')
  } catch (error) {
    console.error(error)
  }
}

const options = ref([
  {
    name: 'Профиль'
  },
  {
    name: 'Отслеживание'
  },
  {
    name: 'Подписка'
  },
  {
    name: 'Мои компании'
  },
  {
    name: 'Маркетплейс'
  }
])

onMounted(async () => {
  if (!userProfile.value) {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
      await fetchUserProfile()
    } else {
      console.log()
    }
  }
})
</script>
