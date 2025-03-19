import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { auth } from '@/Firebase/Firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const useFinanceStore = defineStore('finance', () => {
  const savingsGoal = ref(Number(localStorage.getItem('savingsGoal')) || 5000)
  const income = ref(Number(localStorage.getItem('income')) || 0)
  const expenses = ref(Number(localStorage.getItem('expenses')) || 0)
  const transactions = ref(JSON.parse(localStorage.getItem('transactions')) || [])
  const loading = ref(true)
  const user = ref(null)
  const showModal = ref(false)
  const activeForm = ref('')

  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    loading.value = false
  })

  const updateSavingsGoal = (value) => {
    savingsGoal.value = Number(value)
  }

  const updateIncome = (amount, source, date) => {
    income.value += Number(amount)
    transactions.value.push({ type: 'income', amount, source, date })
  }

  const updateExpenses = (amount, category, date) => {
    expenses.value += Number(amount)
    transactions.value.push({ type: 'expense', amount, category, date })
  }

  const savingsPercentage = computed(() => {
    return income.value > 0 ? ((savingsGoal.value / income.value) * 100).toFixed(2) : 0
  })

  const remainingBalance = computed(() => {
    return income.value - expenses.value
  })

  const openModal = (formType) => {
    activeForm.value = formType
    showModal.value = true
  }

  const closeModal = () => {
    showModal.value = false
    activeForm.value = ''
  }

  // Watchers to sync state with localStorage
  watch(
    [savingsGoal, income, expenses, transactions],
    ([newSavings, newIncome, newExpenses, newTransactions]) => {
      localStorage.setItem('savingsGoal', newSavings)
      localStorage.setItem('income', newIncome)
      localStorage.setItem('expenses', newExpenses)
      localStorage.setItem('transactions', JSON.stringify(newTransactions))
    },
  )

  return {
    savingsGoal,
    income,
    expenses,
    transactions,
    updateSavingsGoal,
    updateIncome,
    updateExpenses,
    savingsPercentage,
    remainingBalance,
    loading,
    user,
    showModal,
    activeForm,
    openModal,
    closeModal,
  }
})
