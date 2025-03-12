<template>
  <div class="flex h-screen">
    <aside class="w-64 bg-[#2A7A7A] text-white p-4">
      <ProfileCard />
      <nav>
        <RouterLink to="/dashboard" class="block py-2 px-4 hover:bg-[#1E5D5D] rounded"
          >Dashboard</RouterLink
        >
      </nav>
    </aside>

    <main class="flex-1 p-6">
      <h1 class="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

      <div class="mt-6 p-4 bg-gray-100 rounded shadow">
        <p class="text-gray-700">Your budgeting summary will appear here.</p>
      </div>
    </main>
    <div>
      <h2 class="text-xl font-bold mb-4">Budget Overview</h2>
    </div>
    <PieChart />
  </div>
</template>

<script setup>
import ProfileCard from '@/components/ProfileCard.vue'
import PieChart from '@/components/Piechart.vue'
</script>
