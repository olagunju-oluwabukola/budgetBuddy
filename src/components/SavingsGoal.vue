<template>
  <div class="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-semibold text-gray-700 mb-4">Update Savings Goal</h2>
    <input
      type="number"
      v-model="store.savingsGoal"
      @input="store.updateSavingsGoal($event.target.value)"
      class="w-full p-2 border rounded-md text-gray-700 focus:ring focus:ring-blue-300"
    />
    <button @click="$router.push('/')" class="mt-3 bg-blue-500 text-white p-2 rounded-md w-full">
      Save & Go Back
    </button>
  </div>
</template>

<script setup>
import { useFinanceStore } from '@/stores/FinnaceStore'

const store = useFinanceStore()
</script>
