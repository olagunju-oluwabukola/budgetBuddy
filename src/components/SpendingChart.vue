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
    default: 'rgba(99, 102, 241, 0.2)',
  },
  borderColor: {
    type: String,
    default: 'rgba(99, 102, 241, 1)',
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
