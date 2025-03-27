<template>
  <div class="flex-1 p-6 bg-gray-100">
    <div class="flex justify-between">
      <h2 class="text-2xl font-semibold">Budget & Analytics</h2>
      <div class="flex items-center space-x-4">
        <span class="font-medium">Active Resources</span>
        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">A</div>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 mt-6">
      <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
        <h3 class="text-gray-500 text-sm mb-2 md:mb-3">Incoming</h3>
        <div class="relative w-20 h-20">
          <!-- Increased size for better visibility -->
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle-fill incoming"
              stroke-dasharray="80, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <p class="text-sm font-bold text-[#2A7A7A] mt-2">₦ 473,154.25</p>
      </div>

      <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
        <h3 class="text-gray-500 mb-2 md:mb-3 text-sm">Outgoing</h3>
        <div class="relative w-20 h-20">
          <!-- Increased size for better visibility -->
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle-fill outgoing"
              stroke-dasharray="65, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <p class="font-bold text-red-600 text-sm mt-2">₦ 273,154.25</p>
      </div>

      <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
        <h3 class="text-gray-500 text-sm mb-2 md:mb-3">My Balance</h3>
        <div class="relative w-20 h-20">
          <!-- Increased size for better visibility -->
          <svg viewBox="0 0 36 36" class="circular-chart">
            <path
              class="circle-bg"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              class="circle-fill balance"
              stroke-dasharray="90, 100"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
        <p class="font-bold text-[#A3E635] text-sm mt-2">₦ 1,073,154.64</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6">
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-4 text-sm md:text-md font-semibold">Monthly Summary</h3>
        <MonthlyChart
          :labels="spendingLabels"
          :data="spendingData"
          backgroundColor="#2A7A7A"
          borderColor="#2A7A7A"
        />
      </div>
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-4 text-sm md:text-md font-semibold">Spending Breakdown</h3>
        <SpendingBreakdown />
      </div>
    </div>
  </div>
</template>

<script setup>
import MonthlyChart from './SpendingChart.vue'
import SpendingBreakdown from './SpendingBreakdown.vue'

const spendingLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const spendingData = [500, 800, 1200, 900, 1500, 1000, 1300]
</script>

<style scoped>
.circular-chart {
  display: block;
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 4;
}

.circle-fill {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.incoming {
  stroke: #2a7a7a;
}

.outgoing {
  stroke: #ef4444;
}

.balance {
  stroke: #a3e635;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0, 100;
  }
}
</style>
