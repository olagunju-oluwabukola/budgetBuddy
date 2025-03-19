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
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="text-gray-500">Incoming</h3>
        <p class="text-xl font-bold text-blue-600">₦ 473,154.25</p>
      </div>
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="text-gray-500">Outgoing</h3>
        <p class="text-xl font-bold text-gray-400">₦ 273,154.25</p>
      </div>
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="text-gray-500">My Balance</h3>
        <p class="text-2xl font-bold">₦ 1,073,154.64</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mt-6">
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-2 text-lg font-semibold">Monthly Summary</h3>
        <MonthlyChart
          :labels="spendingLabels"
          :data="spendingData"
          backgroundColor="rgba(99, 102, 241, 0.2)"
          borderColor="rgba(99, 102, 241, 1)"
        />
      </div>
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-2 text-lg font-semibold">Spending Breakdown</h3>
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
