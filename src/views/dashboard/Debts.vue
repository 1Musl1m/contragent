<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
    <h1 class="text-xl font-medium text-blue-600 px-20">Долги</h1>
    <app-divider />
    <div class="px-20 py-5">
      <div class="flex items-center justify-between">
        <div class="border border-gray-100 rounded-2xl p-3 px-5 flex items-center gap-10 shadow-xl">
          <h2 class="text-lg">Период</h2>
          <app-calendar
            v-model="date"
            dateFormat="dd/mm/yy"
            placeholder="15.01.1999 - 15.01.2024"
            showIcon
            iconDisplay="input"
          />
        </div>

        <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow-xl max-w-sm w-full">
          <div class="flex items-center justify-between">
            <h2>Статус</h2>
            <div class="card flex justify-center">
              <app-select
                v-model="selectedItems"
                :options="items"
                optionLabel="name"
                placeholder="Все"
                :maxSelectedLabels="3"
                class="w-full md:w-56"
              >
              </app-select>
            </div>
          </div>
        </div>

        <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow-xl max-w-sm w-full">
          <div class="flex items-center justify-between">
            <h2>Предмет</h2>
            <div class="card flex justify-center">
              <app-select
                v-model="selectedStatus"
                :options="itemsStatus"
                optionLabel="name"
                placeholder="Все"
                :maxSelectedLabels="3"
                class="w-full md:w-56"
              >
              </app-select>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <div class="border border-gray-100 p-5 rounded-2xl shadow">
          <div class="flex items-end gap-10">
            <h1 class="font-bold text-2xl"> № О60-57392005/2022</h1>
            <h2 class="text-gray-500 font-bold text-lg">от <span>15.07.23</span></h2>
          </div>

          <div class="mt-5 flex flex-col gap-3">
            <div class="flex items-center gap-10">
              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Статус</h2>
                <strong class="text-2xl">Завершено 15.01.1999</strong>
              </div>

              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Предмет исполнения</h2>
                <strong class="text-2xl">Исполнительский сбор</strong>
              </div>
            </div>

            <div class="flex items-center gap-10">
              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Должник</h2>
                <strong class="text-2xl">Торговый дом ооо</strong>
              </div>

              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Юридический адрес</h2>
                <strong class="text-2xl">г. Москва Комсомольский проспект д. 23А</strong>
              </div>
            </div>

            <div class="flex items-center gap-10">
              <h2 class="text-gray-400">Реквизиты исполнительного документа</h2>
              <strong class="text-2xl">Постановление судебного пристава-исполнителя </strong>
              <strong class="text-2xl">от 15.04.2021 </strong>
            </div>

            <div class="flex items-center gap-10">
              <div class="flex items-center gap-10">
                <strong class="text-2xl"> № 59007/21/154549883</strong>
              </div>

              <div class="flex items-center gap-10">
                <h2 class="text-gray-400">Требования</h2>
                <strong class="text-2xl">Постановление о взыскании исполнительского сбора</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedStatus = ref()
const selectedItems = ref()
const date = ref()

const items = ref([{ name: 'Все' }, { name: 'Актуальные' }, { name: 'Завершенные' }])

const itemsStatus = ref([{ name: 'Все' }, { name: 'Штрафы' }, { name: 'Исполнительные расходы' }])
</script>
