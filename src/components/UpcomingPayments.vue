<template>
  <div class="bg-white shadow p-4 rounded-lg">
    <h3 class="text-lg font-semibold text-gray-600">Upcoming Payments</h3>
    <ul class="mt-2 space-y-2">
      <li
        v-for="payment in upcomingPayments"
        :key="payment.id"
        class="flex justify-between text-sm text-gray-700"
      >
        <span>{{ payment.name }}</span>
        <span class="font-semibold text-red-500">{{ payment.dueDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useFinanceStore } from '@/stores/FinnaceStore'

export default {
  setup() {
    const store = useFinanceStore()
    const upcomingPayments = computed(() => store.upcomingPayments)

    return { upcomingPayments }
  },
}
</script>
