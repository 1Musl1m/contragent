<template>
  <div class="mt-5 mb-10">
    <div class="bg-gradient-to-r from-blue-800 to-blue-600 rounded-3xl pt-16">
      <div class="relative bg-white p-10 mt-20">
        <img
          class="absolute -top-20 rounded w-36 h-36"
          src="https://cs14.pikabu.ru/post_img/2023/10/28/2/169845643817422827.jpg"
          alt="Extra large avatar"
        />
        <div v-if="selectedCompany" class="flex items-center justify-between">
          <div class="flex gap-5 items-center">
            <h1 class="pl-44 text-xl">{{ selectedCompany.name }}</h1>
            <app-message severity="success" size="small">{{ selectedCompany.status.name }}</app-message>
          </div>

          <button class="flex items-center gap-4 border border-blue-600 rounded-3xl p-1">
            <img src="/add.svg" alt="" /><span>Добавить в друзья</span>
          </button>
        </div>
      </div>
      <nav class="p-8">
        <div class="flex items-center justify-between space-x-4">
          <RouterLink to="/dashboard/summary" class="text-white text-lg focus:font-semibold"
            >Сводка</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/arbitration"
            class="text-white text-lg focus:font-semibold"
            >Арбитраж</RouterLink
          >
          <RouterLink to="/dashboard/summary/finance" class="text-white text-lg focus:font-semibold"
            >Финансы</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/communications"
            class="text-white text-lg focus:font-semibold"
            >Связи</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/trademarks"
            class="text-white text-lg focus:font-semibold"
            >Товарные знаки</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/founders"
            class="text-white text-lg focus:font-semibold"
            >Учредители</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/reliability"
            class="text-white text-lg focus:font-semibold"
            >Надежность</RouterLink
          >
          <RouterLink to="/dashboard/summary/debts" class="text-white text-lg focus:font-semibold"
            >Долги</RouterLink
          >
          <RouterLink
            to="/dashboard/summary/sanctions"
            class="text-white text-lg focus:font-semibold"
            >Санкции</RouterLink
          >
          <RouterLink to="/dashboard/summary/leasing" class="text-white text-lg focus:font-semibold"
            >Лизинг</RouterLink
          >
          <button @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu">
            <h1 class="text-white text-lg">Еще</h1>
          </button>
          <app-menu id="overlay_tmenu" ref="menu" :model="items" popup />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { computed } from 'vue'
import { useCompanyStore } from '@/stores/companyStore'

const store = useCompanyStore()
const selectedCompany = computed(() => store.selectedCompany)

const menu = ref()
const items = ref([
  {
    label: 'Проверки'
  },
  {
    label: 'Истории'
  },
  {
    label: 'Реквизиты'
  },
  {
    label: 'Виды деятельности'
  }
])

const toggle = (event) => {
  menu.value.toggle(event)
}
</script>
