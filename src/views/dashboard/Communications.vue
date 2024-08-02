<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
      <h1 class="text-xl font-medium text-blue-600 px-20">Связанные организации</h1>
      <app-divider />

      <div class="px-20 py-10">
        <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow max-w-sm w-full">
          <div class="flex items-center justify-between">
            <h2>Тип</h2>
            <div class="card flex justify-center">
              <app-select
                v-model="selectedCities"
                :options="cities"
                optionLabel="name"
                placeholder="Все"
                :maxSelectedLabels="3"
                class="w-full md:w-56"
              >
              </app-select>
            </div>
          </div>
        </div>

        <div class="mt-10">
          <h2>Лобанова Елизавета Сернеевна Руководитель “ Компания Лавендер торговый дом”</h2>
          <h3 class="mt-5 text-gray-400">Также участвует в организациях :</h3>

          <div class="mt-10 border border-gray-100 p-10 rounded-2xl shadow">
            <h3 class="text-2xl text-blue-600">ООО “Пивоварня”</h3>

            <div class="mt-5 flex flex-col gap-3">
              <div class="flex items-center gap-10">
                <h4>Генеральный директор</h4>
                <p class="text-xl">Щербин Егор Сергеевич</p>
              </div>

              <div class="flex items-center gap-10">
                <h4>Адрес :</h4>
                <p class="text-xl">
                  Новосибирская область, г Новонибирск, ул Мира, зд. 54, офис 12
                </p>
              </div>

              <div class="flex items-center gap-10">
                <h4>ИНН</h4>
                <p class="text-xl">420008787</p>

                <h4>ОГРН</h4>
                <p class="text-xl">42000878700000000</p>

                <h4>Дата регистрации :</h4>
                <p class="text-xl">17.06.2006г.</p>
              </div>

              <div class="flex items-center gap-10">
                <h4>Уставной капитал :</h4>
                <p class="text-xl">11500р.</p>

                <h4>Основной вид деятельности :</h4>
                <p class="text-xl">Торговля оптовая пивом</p>
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

const selectedCities = ref()
const cities = ref([{ name: 'По руководителю' }, { name: 'По учредителю' }, { name: 'По адресу' }])
</script>
