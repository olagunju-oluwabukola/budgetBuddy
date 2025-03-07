<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
const mobileMenu = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    gsap.to(mobileMenu.value, { x: 0, duration: 0.4, ease: 'power2.out' })
  } else {
    gsap.to(mobileMenu.value, { x: '100%', duration: 0.4, ease: 'power2.in' })
  }
}

onMounted(() => {
  gsap.set(mobileMenu.value, { x: '100%' })
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-white shadow-md p-4 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl md:text-5xl font-bold text-[#2A7A7A]">
        BB<span class="text-[#A3E635]">.</span>
      </h1>

      <ul class="hidden md:flex space-x-6">
        <li><RouterLink to="/" class="text-gray-600 hover:text-[#2A7A7A]">Home</RouterLink></li>
        <li>
          <RouterLink to="/signup" class="text-gray-600 hover:text-[#2A7A7A]">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink to="/signin" class="text-gray-600 hover:text-[#2A7A7A]">Sign In</RouterLink>
        </li>
      </ul>

      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <Menu v-if="!isOpen" class="w-6 h-6 text-gray-600" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      ref="mobileMenu"
      class="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg transform translate-x-full md:hidden flex flex-col p-6"
    >
      <button @click="toggleMenu" class="self-end bg-gray-200 p-2 rounded-full mb-4">
        <X class="w-6 h-6 text-gray-600" />
      </button>
      <RouterLink to="/" class="block text-gray-600 hover:text-[#2A7A7A] py-2" @click="toggleMenu"
        >Home</RouterLink
      >
      <RouterLink
        to="/signup"
        class="block text-gray-600 hover:text-[#2A7A7A] py-2"
        @click="toggleMenu"
        >Sign Up</RouterLink
      >
      <RouterLink
        to="/signin"
        class="block text-gray-600 hover:text-[#2A7A7A] py-2"
        @click="toggleMenu"
        >Sign In</RouterLink
      >
    </div>
  </nav>
</template>
