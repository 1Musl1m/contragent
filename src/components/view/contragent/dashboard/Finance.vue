<template>
  <div class="pb-10">
    <div class="bg-white rounded-3xl pt-10 pb-20">
      <h1 class="text-xl font-medium text-blue-600 px-20">Финансы</h1>
      <app-divider />
      <div class="flex gap-20 px-20">
        <h2
          class="text-lg cursor-pointer focus:font-semibold"
          @click="showStatistics = true"
          :class="{ 'font-semibold': showStatistics }"
        >
          Анализ
        </h2>
        <h2
          class="text-lg cursor-pointer focus:font-semibold"
          @click="showStatistics = false"
          :class="{ 'font-semibold': !showStatistics }"
        >
          Бухгалтерская отчетность
        </h2>
      </div>
      <app-divider />

      <Analys v-if="showStatistics" />
    </div>
  </div>
</template>

<script>
import Analys from '@/components/view/contragent/finance/Analys.vue'

export default {
  components: {
    Analys
  },
  data() {
    return {
      showStatistics: true
    }
  }
}
</script>