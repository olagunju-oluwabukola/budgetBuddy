<template>
  <div>
    <h2>Track Expenses</h2>
    <input v-model="newExpense.amount" placeholder="Amount" type="number" />
    <select v-model="newExpense.category">
      <option value="Food">Food</option>
      <option value="Transport">Transport</option>
      <option value="Entertainment">Entertainment</option>
    </select>
    <button @click="addExpense">Log Expense</button>

    <div v-for="expense in expenses" :key="expense.id">
      {{ expense.amount }} - {{ expense.category }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFinanceStore } from '@/stores/FinnaceStore'

const financeStore = useFinanceStore()
const newExpense = ref({ amount: 0, category: '' })

const addExpense = () => {
  financeStore.addExpense(newExpense.value)
  newExpense.value = { amount: 0, category: '' }
}

financeStore.fetchExpenses()
</script>
