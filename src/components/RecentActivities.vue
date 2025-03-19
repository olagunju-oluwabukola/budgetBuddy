<template>
  <div class="bg-white shadow p-4 rounded-lg">
    <h3 class="text-lg font-semibold text-gray-600">Recent Activities</h3>
    <ul class="mt-2 space-y-2">
      <li
        v-for="activity in recentActivities"
        :key="activity.id"
        class="flex justify-between text-sm text-gray-700"
      >
        <span>{{ activity.description }}</span>
        <span class="font-semibold">{{ activity.amount }}</span>
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
    const recentActivities = computed(() => store.recentActivities)

    return { recentActivities }
  },
}
</script>
