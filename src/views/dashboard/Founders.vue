<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
      <h1 class="text-xl font-medium text-blue-600 px-20">Учредители</h1>
      <app-divider />
      <div class="px-20 py-5">
        <h2 class="mb-4">Согласно данным ЕГРЮЛ</h2>
        <h2>Уставный капитал :</h2>

        <div class="mt-10">
          <div class="flex items-center justify-between">
            <div
              class="border border-gray-100 rounded-2xl p-3 px-5 flex items-center gap-10 shadow"
            >
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
                <h2>Тип</h2>
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
                <h2>Статус</h2>
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
        </div>

        <div class="mt-10 flex flex-col gap-10">
          <div class="border border-gray-100 rounded-2xl shadow-xl py-5">
            <h1 class="px-10 text-2xl font-semibold">Актуальные</h1>
            <app-divider />

            <div class="flex items-end px-10 gap-10">
              <h2 class="text-xl">Лобанова Елизавета Сергеевна</h2>

              <h3>Дата</h3>
              <span class="text-xl">21.09.2018</span>

              <h3>Доля</h3>
              <span class="text-xl">4647338833 р.</span>

              <h3>ИНН</h3>
              <span class="text-xl">4647338833</span>
            </div>
          </div>

          <div class="border border-gray-100 rounded-2xl shadow-xl py-5">
            <h1 class="px-10 text-2xl font-semibold">Исторические</h1>
            <app-divider />

            <div class="flex items-end px-10 gap-10">
              <h2 class="text-xl">Лобанова Елизавета Сергеевна</h2>

              <h3>Дата</h3>
              <span class="text-xl">21.09.2018</span>

              <h3>Доля</h3>
              <span class="text-xl">4647338833 р.</span>

              <h3>ИНН</h3>
              <span class="text-xl">4647338833</span>
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

const items = ref([{ name: 'Все' }, { name: 'Внеплановая' }, { name: 'Плановая' }])

const itemsStatus = ref([{ name: 'Все' }, { name: 'Завершена' }, { name: 'Ожидает завершения' }])
</script>
