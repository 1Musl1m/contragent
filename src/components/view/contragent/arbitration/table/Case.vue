<template>
  <div class="mt-20">
    <h2 class="text-lg font-bold">Категория дел</h2>

    <div class="card">
      <app-table :value="productCase" stripedRows tableStyle="min-width: 50rem">
        <app-column field="name"></app-column>
        <app-column field="defendant" header="Ответчик"></app-column>
        <app-column field="plaintiff" header="Истец"></app-column>
        <app-column field="another_person" header="Иное лицо"></app-column>
      </app-table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const productCase = ref([])

onMounted(() => {
  productCase.value = [
    {
      name: 'Договоры возмездного оказания услуг',
      defendant: 'Product 1',
      plaintiff: 'Category A',
      another_person: 10
    },
    {
      name: 'Договоры возмездного оказания услуг',
      defendant: 'Product 2',
      plaintiff: 'Category B',
      another_person: 15
    },
    {
      name: 'Договоры возмездного оказания услуг',
      defendant: 'Product 3',
      plaintiff: 'Category A',
      another_person: 8
    },
    {
      name: 'Договоры возмездного оказания услуг',
      defendant: 'Product 4',
      plaintiff: 'Category C',
      another_person: 12
    }
  ]
})
</script>
