<template>
  <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg w-96">
      <h2 class="text-xl font-bold mb-4">{{ formTitle }}</h2>
      <form @submit.prevent="handleSubmit">
        <input v-model="inputValue" type="number" class="border p-2 w-full mb-4" />
        <button type="submit" class="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
      </form>
      <button @click="$emit('closeModal')" class="mt-4 text-red-500">Close</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useFinanceStore } from '@/stores/FinnaceStore'
export default {
  props: ['activeForm'],
  emits: ['closeModal'],
  setup(props, { emit }) {
    const store = useFinanceStore()
    const inputValue = ref('')

    const formTitle = computed(() => {
      if (props.activeForm === 'savings') return 'Set Savings Goal'
      if (props.activeForm === 'income') return 'Add Income'
      if (props.activeForm === 'expenses') return 'Add Expenses'
      return ''
    })

    const handleSubmit = () => {
      if (props.activeForm === 'savings') store.updateSavingsGoal(inputValue.value)
      if (props.activeForm === 'income')
        store.updateIncome(inputValue.value, 'Salary', new Date().toLocaleDateString())
      if (props.activeForm === 'expenses')
        store.updateExpenses(inputValue.value, 'Groceries', new Date().toLocaleDateString())
      emit('closeModal')
    }

    return { formTitle, inputValue, handleSubmit }
  },
}
</script>
