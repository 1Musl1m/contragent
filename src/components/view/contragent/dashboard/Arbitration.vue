<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
      <h1 class="text-xl font-medium text-blue-600 px-20">Арбитражные дела</h1>
      <app-divider />
      <div class="flex gap-20 px-20">
        <h2
          class="text-lg cursor-pointer focus:font-semibold"
          @click="showStatistics = true"
          :class="{ 'font-semibold': showStatistics }"
        >
          Статистика
        </h2>
        <h2
          class="text-lg cursor-pointer focus:font-semibold"
          @click="showStatistics = false"
          :class="{ 'font-semibold': !showStatistics }"
        >
          Дела
        </h2>
      </div>

      <app-divider />

      <div class="px-20 mt-10" v-if="showStatistics">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-lg font-bold mb-10">Ответчик</h2>
            <div class="max-w-sm w-full">
              <div class="flex items-center gap-20 mb-10">
                <div>
                  <h2 class="mb-5">Рассматривается</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h2 class="mb-5">Завершено</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-10">Истец</h2>
            <div class="max-w-sm w-full">
              <div class="flex items-center gap-20 mb-10">
                <div>
                  <h2 class="mb-5">Рассматривается</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h2 class="mb-5">Завершено</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 class="text-lg font-bold mb-10">Иное лицо</h2>
            <div class="max-w-sm w-full">
              <div class="flex items-center gap-20 mb-10">
                <div>
                  <h2 class="mb-5">Рассматривается</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div>
                  <h2 class="mb-5">Завершено</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>

                <div>
                  <h2 class="mb-5">На сумму</h2>
                  <span class="text-3xl font-semibold text-blue-600">95883</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20">
          <div class="flex items-center gap-36">
            <div>
              <img src="@/assets/image/indicator-2.png" alt="" />
              <ul class="mt-10 flex flex-col gap-5">
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
              </ul>
            </div>

            <div>
              <img src="@/assets/image/indicator-2.png" alt="" />
              <ul class="mt-10 flex flex-col gap-5">
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
                <li>Проиграно</li>
              </ul>
            </div>
          </div>
        </div>

        <DataTable />
      </div>

      <Affairs v-if="!showStatistics" />
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/view/contragent/arbitration/DataTable.vue'
import Affairs from '@/components/view/contragent/arbitration/Affairs.vue'

export default {
  components: {
    DataTable,
    Affairs
  },
  data() {
    return {
      showStatistics: true
    }
  }
}
</script>
