<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="lg:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <aside
      :class="[
        'fixed lg:static z-10 bg-white shadow-md h-screen p-4 transition-transform duration-300',
        'lg:transform-none',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="text-xl font-bold hidden lg:block">Budget Buddy</div>
      <button @click="isOpen = false" class="absolute top-4 right-4 p-1 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <nav class="mt-8 lg:mt-4">
        <ul>
          <li
            v-for="item in menuItems"
            :key="item.name"
            class="py-3 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <main class="lg:ml-64 p-4">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuItems = [
  { name: 'Budget & Analytics' },
  { name: 'Payments' },
  { name: 'Save & Invest' },
  { name: 'Bills & Utility' },
  { name: 'Accounts' },
  { name: 'Settings' },
]

const isOpen = ref(false)

onMounted(() => {
  const handleClickOutside = (event) => {
    const sidebar = document.querySelector('aside')
    const button = document.querySelector('button.lg\\:hidden')

    if (
      !sidebar.contains(event.target) &&
      !button.contains(event.target) &&
      window.innerWidth < 1024
    ) {
      isOpen.value = false
    }
  }

  document.addEventListener('click', handleClickOutside)
  return () => document.removeEventListener('click', handleClickOutside)
})
</script>
