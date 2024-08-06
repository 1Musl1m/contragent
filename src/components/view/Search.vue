<template>
  <div class="max-w-6xl mx-auto pt-20">
    <div class="flex flex-col gap-5 bg-blue-500 p-14 rounded-[40px]">
      <h1 class="text-white text-5xl font-bold mb-2">ОТКРОЙТЕ ДЛЯ СЕБЯ МИР ПРОЗРАЧНОГО БИЗНЕСА</h1>
      <p class="text-white text-3xl mb-4">Проверить контрагента</p>
      <div class="flex items-center mb-10">
        <form class="w-full" @submit.prevent="onFormSubmit">
          <div class="flex">
            <div class="relative w-full">
              <app-input v-model="query" @input="onInput" type="text" size="large" class="w-full" />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg"
              >
                <img src="/public/search.svg" alt="search" />
              </button>
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
                    <router-link to="/dashboard/summary"
                      ><div class="font-semibold text-lg text-gray-800">{{ item.НаимПолн }}</div>
                      <div class="text-sm text-gray-600">ИНН: {{ item.ИНН }}</div>
                      <div class="text-sm text-gray-600">Адрес: {{ item.ЮрАдрес }}</div>
                      <div class="text-sm text-gray-600">
                        Статус: {{ item.Статус }}
                      </div></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <p class="text-white text-2xl">
        Находите всю информацию по вашим контрагентам, добавляйте их в друзья, отслеживайте события
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash'

const query = ref('')
const suggestions = ref([])

// Fetch suggestions from the API
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

// Debounce the fetch suggestions function to avoid excessive API calls
const debouncedFetchSuggestions = debounce(fetchSuggestions, 300)

const onInput = () => {
  debouncedFetchSuggestions()
}

// Handle selection of a suggestion
const selectSuggestion = (item) => {
  query.value = item.НаимПолн
  suggestions.value = [] // Clear suggestions after selection
}

// Perform the search when the user clicks the search button
const searchCompany = async () => {
  if (query.value.trim() === '') {
    alert('Please enter a search query.')
    return
  }

  try {
    const response = await axios.get('https://infoglobal.group/api/v1/company-search/', {
      params: { query: query.value }
    })
    console.log(response.data) // You can handle the response data as needed
  } catch (error) {
    console.error('Error during the API request:', error)
    alert('An error occurred while searching. Please try again.')
  }
}

const onFormSubmit = (event) => {
  event.preventDefault()
  searchCompany()
}
</script>
