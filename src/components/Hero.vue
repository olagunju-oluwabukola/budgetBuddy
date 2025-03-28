<template>
  <section
    class="relative flex flex-col md:flex-row items-center justify-between md:h-screen px-6 md:px-20 py-12 md:py-0 bg-[#F9F9F9]"
  >
    <div class="md:max-w-2xl md:text-left">
      <h1 class="text-3xl md:text-6xl font-bold text-[#2A7A7A]">
        Master Your Money with Budget Buddy
      </h1>
      <p ref="typingText" class="text-md md:text-4xl text-gray-600 font-medium mt-4"></p>

      <div class="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <RouterLink
          to="/signup"
          class="px-6 text-sm py-3 bg-[#A3E635] text-white text-center font-semibold rounded-lg shadow-md hover:bg-[#8ECF2F] transition"
        >
          Get Started Free
        </RouterLink>
        <RouterLink
          to="/"
          class="px-6 text-sm py-3 text-center border-2 border-[#2A7A7A] text-[#2A7A7A] font-semibold rounded-lg shadow-md hover:bg-[#2A7A7A] hover:text-white transition"
        >
          See How It Works
        </RouterLink>
      </div>
    </div>

    <div class="hidden md:block w-1/2">
      <img src="" alt="Budgeting Illustration" class="w-full h-auto" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const typingText = ref(null)

onMounted(() => {
  gsap.from('h1, p', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
  })

  const message = 'Track income, expenses, and savings goals—all in one simple tool.'
  let textContent = ''
  let index = 0
  let isErasing = false

  const typewriterEffect = () => {
    if (!isErasing) {
      textContent += message[index]
      typingText.value.innerText = textContent
      index++

      if (index === message.length) {
        isErasing = true
        setTimeout(typewriterEffect, 1500)
      } else {
        setTimeout(typewriterEffect, 100)
      }
    } else {
      if (textContent.length > 5) {
        textContent = textContent.slice(0, -1)
        typingText.value.innerText = textContent
        setTimeout(typewriterEffect, 50)
      } else {
        isErasing = false
        index = textContent.length
        setTimeout(typewriterEffect, 500)
      }
    }
  }

  typewriterEffect()
})
</script>
