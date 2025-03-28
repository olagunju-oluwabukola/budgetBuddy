<template>
  <section class="py-10 md:py-20 bg-gradient-to-r from-[#1E3A3A] to-[#84CC16]">
    <div class="container md:mx-auto px-3 md:px-6 text-center">
      <h2
        ref="ctaHeadline"
        class="text-2xl md:text-4xl lg:text-5xl font-bold text-white md:mb-6 leading-tight"
      >
        Take Charge of Your Finances Today!
      </h2>
      <p ref="ctaSubheadline" class="text-lg text-gray-100 md:mb-10 md:max-w-2xl mx-auto">
        Join thousands who are transforming their financial future with Budget Buddy. Start
        tracking, saving, and achieving your goals effortlessly.
      </p>
      <div ref="ctaButtons" class="flex flex-col md:flex-row justify-center gap-4">
        <router-link
          to="/signup"
          class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#1E3A3A]"
        >
          Get Started Free
        </router-link>
        <button
          class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition duration-300 hover:bg-white hover:text-[#1E3A3A]"
        >
          See How It Works
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const ctaHeadline = ref(null)
const ctaSubheadline = ref(null)
const ctaButtons = ref(null)

onMounted(() => {
  gsap.from([ctaHeadline.value, ctaSubheadline.value, ctaButtons.value], {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: ctaHeadline.value,
      start: 'top 85%',
    },
  })
})
</script>
