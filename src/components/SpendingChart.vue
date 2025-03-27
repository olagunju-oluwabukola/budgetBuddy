<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const chart = ref(null)

const props = defineProps({
  labels: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  backgroundColor: {
    type: String,
    default: '#2A7A7A',
  },
  borderColor: {
    type: String,
    default: '#2A7A7A',
  },
})

onMounted(() => {
  new Chart(chart.value, {
    type: 'bar',
    data: {
      labels: props.labels,
      datasets: [
        {
          label: 'Spending',
          data: props.data,
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            color: '#e5e7eb',
          },
        },
      },
    },
  })
})
</script>
