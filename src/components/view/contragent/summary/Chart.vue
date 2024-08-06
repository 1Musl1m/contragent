<template>
  <div>
    <app-chart type="line" :data="chartData" :options="chartOptions"></app-chart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
  data: { year: string; amount: number[] }[];
}>();

const chartData = ref({
  labels: props.data.map(item => item.year),
  datasets: [
    {
      label: 'Total Amount',
      backgroundColor: '#42A5F5',
      borderColor: '#42A5F5',
      data: props.data.map(item => item.amount.reduce((sum, current) => sum + current, 0)),
      fill: false
    }
  ]
});

const chartOptions = ref({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top'
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      }
    },
    y: {
      display: true,
      beginAtZero: true,
      ticks: {
        display: false
      }
    }
  }
});
</script>