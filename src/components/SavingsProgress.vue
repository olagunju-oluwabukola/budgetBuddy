<template>
  <div>
    <h3>Savings Goals</h3>
    <p>Total Saved: ${{ totalSavings }}</p>
    <ul>
      <li v-for="(goal, index) in savingsGoals" :key="index">
        Target: ${{ goal.target }}, Saved: ${{ goal.saved }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFinanceStore } from '@/stores/FinnaceStore'

const financeStore = useFinanceStore()
const { savingsGoals, totalSavings } = financeStore
</script>
