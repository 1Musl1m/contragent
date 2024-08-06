<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
    <h1 class="text-xl font-medium text-blue-600 px-20">Товарные знаки</h1>
    <app-divider />

    <div class="px-20 py-10">
      <div class="flex items-center gap-10">
        <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow-xl max-w-sm w-full">
          <div class="flex items-center justify-between">
            <h2 class="text-lg">Поиск</h2>
            <div class="relative">
              <span class="absolute inset-y-0 right-3 flex items-center pl-3 text-gray-500">
                <i class="pi pi-search"></i>
              </span>
              <app-input placeholder="Номер гос. регистр." />
            </div>
          </div>
        </div>
        
        <div class="border border-gray-100 p-3 px-5 rounded-2xl shadow-xl max-w-sm w-full">
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
      </div>

      <div class="mt-10">
        <div
          class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
        >
          <div
            class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
          >
            <svg
              class="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path
                d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
              />
            </svg>
          </div>
          <div class="w-full">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      <div class="mt-20 border border-gray-100 rounded-2xl shadow-xl">
        <div class="card">
          <app-accordion value="0">
            <accordion-panel value="0">
              <accordion-header>Общая информация о товарном знаке</accordion-header>
              <accordion-content>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </accordion-content>
            </accordion-panel>
            <accordion-panel value="1">
              <accordion-header>МКТУ</accordion-header>
              <accordion-content>
                <p class="m-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                  magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
                  velit, sed quia non numquam eius modi.
                </p>
              </accordion-content>
            </accordion-panel>
            <accordion-panel value="2">
              <accordion-header>Правообладатель</accordion-header>
              <accordion-content>
                <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                  rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus.
                </p>
              </accordion-content>
            </accordion-panel>

            <accordion-panel value="3">
              <accordion-header>Описание товарного знака</accordion-header>
              <accordion-content>
                <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                  rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus.
                </p>
              </accordion-content>
            </accordion-panel>

            <accordion-panel value="4">
              <accordion-header>Дополнительно</accordion-header>
              <accordion-content>
                <p class="m-0">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                  officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                  rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                  eligendi optio cumque nihil impedit quo minus.
                </p>
              </accordion-content>
            </accordion-panel>
          </app-accordion>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCities = ref()
const cities = ref([{ name: 'Все' }, { name: 'Комбинированный' }, { name: 'Словесный' }, { name: 'Изобразительный' }, { name: 'Не определено' }])
</script>
