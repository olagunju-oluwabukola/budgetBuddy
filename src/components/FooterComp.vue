<template>
  <footer ref="footer" class="bg-[#1E3A3A] text-white py-12 w-full">
    <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div class="text-center md:text-left mb-6 md:mb-0">
        <p class="text-2xl font-extrabold">Budget Buddy</p>
        <p class="text-sm text-gray-300">© {{ currentYear }} Budget Buddy. All rights reserved.</p>
      </div>

      <div class="flex gap-6 text-sm">
        <a href="#" class="hover:text-[#A3E635] transition duration-300">About</a>
        <a href="#" class="hover:text-[#A3E635] transition duration-300">Features</a>
        <a href="#" class="hover:text-[#A3E635] transition duration-300">Pricing</a>
        <a href="#" class="hover:text-[#A3E635] transition duration-300">Contact</a>
      </div>

      <div class="flex gap-4 mt-6 md:mt-0">
        <a href="#" class="text-gray-300 hover:text-white transition duration-300">
          <LucideFacebook class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-300 hover:text-white transition duration-300">
          <LucideTwitter class="w-6 h-6" />
        </a>
        <a href="#" class="text-gray-300 hover:text-white transition duration-300">
          <LucideInstagram class="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { LucideFacebook, LucideTwitter, LucideInstagram } from 'lucide-vue-next'

const footer = ref(null)
const currentYear = new Date().getFullYear()

onMounted(() => {
  gsap.from(footer.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: footer.value,
      start: 'top 85%',
    },
  })
})
</script>
