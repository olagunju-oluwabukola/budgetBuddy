<template>
  <div>
    <div v-for="(item, index) in spending" :key="index" class="mb-3 md:mb-5">
      <div class="flex justify-between">
        <span class="text-[12px]">{{ item.category }}</span>
        <span :class="item.amount > 0 ? 'text-green-500 text-[12px]' : 'text-red-500 text-[12px]'"
          >₦ {{ item.amount }}</span
        >
      </div>
      <div class="w-full bg-gray-200 h-2 md:h-3 lg:h-3 rounded-md mt-1">
        <div
          :class="item.color"
          class="h-2 md:h-3 lg:h-3 rounded-md"
          :style="{ width: item.percentage + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const spending = ref([
  { category: 'Services', amount: 82_000, percentage: 80, color: 'bg-green-500' },
  { category: 'Transactions', amount: 60_200, percentage: 70, color: 'bg-blue-500' },
  { category: 'Shopping', amount: -202_000, percentage: 40, color: 'bg-yellow-500' },
  { category: 'Payments', amount: -18_500, percentage: 20, color: 'bg-red-500' },
])
</script>
