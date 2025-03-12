<template>
  <div class="w-full max-w-md mx-auto">
    dhj.
    <PieChart :chart-data="chartData" :chart-options="chartOptions" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { PieChart } from 'vue-chart-3'
import { Chart, Title, Tooltip, Legend, ArcElement } from 'chart.js'

Chart.register(Title, Tooltip, Legend, ArcElement)

const chartData = reactive({
  labels: ['Income', 'Expenses', 'Savings'],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ['#4CAF50', '#FF5252', '#FFC107'],
    },
  ],
})

const chartOptions = reactive({
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
})
</script>

<style scoped>
.w-full {
  width: 100%;
}
.max-w-md {
  max-width: 28rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
