<template>
  <footer class="bg-[#2A7A7A] text-white py-12">
    <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0">
        <p class="text-xl font-bold">Budget Buddy</p>
        <p class="text-sm">© 2023 Budget Buddy. All rights reserved.</p>
      </div>
      <div class="flex gap-6">
        <a href="#" class="hover:text-[#A3E635]">About</a>
        <a href="#" class="hover:text-[#A3E635]">Features</a>
        <a href="#" class="hover:text-[#A3E635]">Pricing</a>
        <a href="#" class="hover:text-[#A3E635]">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const footer = ref(null)

onMounted(() => {
  gsap.from(footer.value, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: footer.value,
      start: 'top 80%',
    },
  })
})
</script>
