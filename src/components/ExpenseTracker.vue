<template>
  <div>
    <h3>Log an Expense</h3>
    <input v-model="expense.amount" type="number" placeholder="Amount" />
    <select v-model="expense.category">
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Entertainment">Entertainment</option>
    </select>
    <button @click="logExpense">Log Expense</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFinanceStore } from '@/stores/FinnaceStore'

const financeStore = useFinanceStore()
const expense = ref({ amount: 0, category: '' })

const logExpense = () => {
  financeStore.addExpense({ ...expense.value })
  expense.value = { amount: 0, category: '' }
}
</script>
