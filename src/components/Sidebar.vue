<template>
  <aside class="w-64 bg-white shadow-md h-screen p-4">
    <div class="text-xl font-bold flex items-center space-x-2">
      <span>Budget Buddy</span>
    </div>
    <nav class="mt-4">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.name"
          class="py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
const menuItems = [
  { name: 'Budget & Analytics' },
  { name: 'Cards' },
  { name: 'Payments' },
  { name: 'Loans' },
  { name: 'Save & Invest' },
  { name: 'Bills & Utility' },
  { name: 'Accounts' },
  { name: 'Settings' },
  { name: 'Logout' },
]
</script>
