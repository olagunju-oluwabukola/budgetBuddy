<template>
  <div>
    <h2>Set Goals</h2>
    <input v-model="newGoal.amount" placeholder="Goal Amount" type="number" />
    <button @click="addGoal">Set Goal</button>

    <div v-for="goal in goals" :key="goal.id">{{ goal.amount }} - {{ goal.progress }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFinanceStore } from '@/stores/FinnaceStore'

const financeStore = useFinanceStore()
const newGoal = ref({ amount: 0 })

const addGoal = () => {
  financeStore.addGoal(newGoal.value)
  newGoal.value = { amount: 0 }
}
</script>
