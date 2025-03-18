import { defineStore } from 'pinia'
import { ref } from 'vue'
import { collection, addDoc, onSnapshot } from 'firebase/firestore'
import { db } from '@/Firebase/Firebase'

export const useFinanceStore = defineStore('finance', () => {
  const expenses = ref([])
  const goals = ref([])
  const debts = ref([])

  // Fetch expenses from Firestore
  const fetchExpenses = async () => {
    const expensesCollection = collection(db, 'expenses')
    onSnapshot(expensesCollection, (snapshot) => {
      expenses.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    })
  }

  // Add a new expense
  const addExpense = async (expense) => {
    await addDoc(collection(db, 'expenses'), expense)
  }

  // Similar functions for goals and debts...

  return { expenses, goals, debts, fetchExpenses, addExpense }
})
