<template>
  <div class="mt-20">
    <h2 class="text-lg font-bold">По годам</h2>
    <div class="mt-10 flex items-center gap-10">
      <h3 class="text-lg font-bold">Ответчик</h3>
      <h3 class="text-lg font-bold">Истец</h3>
      <h3 class="text-lg font-bold">Иное лицо</h3>
    </div>

    <div class="card">
      <app-table :value="products" stripedRows tableStyle="min-width: 50rem">
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

const products = ref([]);

onMounted(() => {
  products.value = [
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