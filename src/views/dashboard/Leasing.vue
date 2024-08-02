<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
      <h1 class="text-xl font-medium text-blue-600 px-20">Долги</h1>
      <app-divider />
      <div class="px-20 py-5">
        <div class="flex items-center justify-between">
          <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow-xl max-w-sm w-full">
            <div class="flex items-center justify-between">
              <h2>Роль</h2>
              <div class="card flex justify-center">
                <app-select
                  v-model="selectedRoles"
                  :options="roles"
                  optionLabel="name"
                  filter
                  filterFields="Орты"
                  filterPlaceholder="льыв"
                  placeholder="Все"
                  :overlayVisible="true"
                  :maxSelectedLabels="2"
                  class="w-full md:w-56"
                >
                </app-select>
              </div>
            </div>
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
            <div class="flex items-center">
              <h2>Предмет аренды</h2>
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

        <div
          class="mt-10 border border-gray-100 rounded-2xl p-3 px-5 flex items-center max-w-sm w-full gap-10 shadow-xl"
        >
          <h2 class="text-lg">Период</h2>
          <app-calendar
            v-model="date"
            dateFormat="dd/mm/yy"
            placeholder="15.01.1999 - 15.01.2024"
            selectionMode="range"
            showIcon
            iconDisplay="input"
          />
        </div>

        <div class="mt-20">
          <div class="border border-gray-100 p-5 rounded-2xl shadow">
            <h1 class="font-bold text-2xl">Дело № О60-57392005/2022</h1>

            <div class="mt-5">
              <div class="flex items-center gap-10">
                <div class="flex items-center gap-10">
                  <h2 class="text-gray-400">Номер сообщения</h2>
                  <strong class="text-2xl">2020202020 </strong>
                </div>

                <div class="flex items-center gap-10">
                  <h2 class="text-gray-400">Дата публикации</h2>
                  <strong class="text-2xl">15.01.1999</strong>
                </div>

                <div class="flex items-center gap-10">
                  <h2 class="text-gray-400">Роль</h2>
                  <strong class="text-2xl">Лизингополучатель</strong>
                </div>
              </div>

              <div class="flex items-center gap-10">
                <div class="flex items-center gap-10">
                  <h2 class="text-gray-400">Лизингодатели</h2>
                  <strong class="text-2xl">Торговый дом Лавендер </strong>
                </div>

                <div class="flex items-center gap-10">
                  <h2 class="text-gray-400">Срок финансовой аренды</h2>
                  <strong class="text-2xl">22.09.2023</strong>
                </div>
              </div>

              <div class="mt-16">
                <h1 class="text-2xl font-bold mb-4">Предмет финансовой аренды</h1>
                <div class="flex items-center gap-10">
                  <div class="flex items-center gap-10">
                    <h2 class="text-gray-400">Классификация</h2>
                    <strong class="text-2xl">0106013, Специализированная техника </strong>
                  </div>

                  <div class="flex items-center gap-10">
                    <h2 class="text-gray-400">Описание</h2>
                    <strong class="text-2xl">Седельный тягач SITRAK C7H</strong>
                  </div>
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

const selectedRoles = ref()
const selectedStatus = ref()
const selectedItems = ref()
const date = ref()

const roles = ref([{ name: 'Все' }, { name: 'Лизингополучатель' }])
const items = ref([{ name: 'Все' }, { name: 'Актуальные' }, { name: 'Завершенные' }])
const itemsStatus = ref([
  { name: 'Все' },
  { name: 'Автомобили' },
  { name: 'Специализированная техника' }
])
</script>