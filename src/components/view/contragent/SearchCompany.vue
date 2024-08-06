<template>
  <div class="py-10 relative w-full">
    <div class="relative">
      <input
        v-model="query"
        @input="onInput"
        type="text"
        class="block p-4 w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="ФИО: Компания"
        @keyup.enter="searchCompany"
      />
      <button
        type="submit"
        class="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-500 hover:bg-blue-600 rounded-r-3xl"
        @click="searchCompany"
      >
        <img src="/search.svg" width="20" />
      </button>
    </div>

    <div
      v-if="suggestions.length"
      class="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full z-30 max-h-80 overflow-y-auto shadow-lg"
    >
      <div
        v-for="(items, index) in suggestions"
        :key="index"
        class="p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
      >
        <div
          v-for="(item, idx) in items.Записи"
          :key="idx"
          @click="selectSuggestion(item)"
          class="p-2 hover:bg-blue-100 transition-colors duration-200"
        >
          <div class="font-semibold text-lg text-gray-800">{{ item.НаимПолн }}</div>
          <div class="text-sm text-gray-600">ИНН: {{ item.ИНН }}</div>
          <div class="text-sm text-gray-600">Адрес: {{ item.ЮрАдрес }}</div>
          <div class="text-sm text-gray-600">Статус: {{ item.Статус }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash'
import { useCompanyStore } from '@/stores/companyStore'

const query = ref('')
const suggestions = ref([])
const store = useCompanyStore()

const fetchSuggestions = async () => {
  if (query.value.trim() === '') {
    suggestions.value = []
    return
  }

  try {
    const response = await axios.get('https://infoglobal.group/api/v1/company-search/', {
      params: { query: query.value }
    })
    suggestions.value = response.data
  } catch (error) {
    console.error('Error during the API request:', error)
  }
}

const debouncedFetchSuggestions = debounce(fetchSuggestions, 300)

const onInput = () => {
  debouncedFetchSuggestions()
}

const selectSuggestion = (item) => {
  query.value = item.НаимПолн
  suggestions.value = []
  store.setSelectedCompany(item.ИНН)
}

const searchCompany = async () => {
  if (query.value.trim() === '') {
    alert('Please enter a search query.')
    return
  }

  try {
    await axios.get('https://infoglobal.group/api/v1/company-search/', {
      params: { query: query.value }
    })
  } catch (error) {
    console.error('Error during the API request:', error)
    alert('An error occurred while searching. Please try again.')
  }
}
</script>
