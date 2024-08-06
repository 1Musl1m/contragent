<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { authenticateUser, registerUser } from '@/servises/authService'

const isLogin = ref<boolean>(true)
const fullName = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
const showPassword = ref<boolean>(false)
const router = useRouter()

const toggleAuth = () => {
  isLogin.value = !isLogin.value
}

const subtitleText = computed<string>(() => {
  return isLogin.value ? 'У вас нет аккаунта ?' : 'Уже есть аккаунт ?'
})

const linkedAccountText = computed<string>(() => {
  return isLogin.value ? 'Зарегистрироваться' : 'Войти в него'
})

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const signUp = async (): Promise<void> => {
  try {
    await registerUser(fullName.value, email.value, password.value)
    router.push('/')
  } catch (error: unknown) {
    console.error(error)
  }
}

const signIn = async (): Promise<void> => {
  try {
    await authenticateUser(email.value, password.value)
    router.push('/')
  } catch (error: unknown) {
    console.error(error)
  }
}

const submitForm = (): void => {
  if (isLogin.value) {
    signIn()
  } else {
    signUp()
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-200">
    <div class="bg-white shadow-lg rounded-lg p-8 w-96">
      <div class="mb-8">
        <img src="/logo.svg" alt="" />
      </div>
      <div class="mb-8">
        <header class="text-gray-700 text-2xl font-semibold">
          {{ isLogin ? 'Вход' : 'Регистрация' }}
        </header>
      </div>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <input
            v-if="!isLogin"
            type="text"
            v-model="fullName"
            class="w-full h-14 px-6 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-150"
            placeholder="Имя"
            required
          />
        </div>
        <div class="mb-4">
          <input
            type="email"
            v-model="email"
            class="w-full h-14 px-6 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-150"
            placeholder="infoglobal@mail.ru"
            required
          />
        </div>
        <div class="mb-4 relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            class="w-full h-14 px-6 text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-150"
            placeholder="Пароль"
            required
          />
          <i
            :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            @click="togglePasswordVisibility"
          ></i>
        </div>
        <div class="relative mb-4 flex items-center justify-between">
          <a class="text-xl text-blue-600" href="#">Забыли пароль ?</a>
          <button
            class="bg-blue-600 text-white py-2 px-5 rounded-xl hover:bg-blue-700 transition duration-200"
          >
          Войти
          </button>
        </div>

        <app-divider />
        <div class="mt-8">
          <p class="mb-3">
            {{ subtitleText }}
          </p>
          <a href="#" @click="toggleAuth" class="text-blue-600 text-xl font-semibold hover:underline">{{
            linkedAccountText
          }}</a>
        </div>
      </form>
    </div>
  </div>
</template>
