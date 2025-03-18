<template>
  <canvas ref="chart"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useFinanceStore } from '@/stores/FinnaceStore'

const financeStore = useFinanceStore()
const chart = ref(null)

onMounted(() => {
  const ctx = chart.value.getContext('2d')
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Food', 'Transport', 'Entertainment'],
      datasets: [
        {
          label: 'Spending',
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    },
  })
})
</script>
