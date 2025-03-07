<template>
  <section class="py-20 bg-gradient-to-r from-[#2A7A7A] to-[#A3E635]">
    <div class="container mx-auto px-4 text-center">
      <h2 ref="ctaHeadline" class="text-4xl font-bold text-white mb-6">
        Ready to Take Control of Your Money?
      </h2>
      <p ref="ctaSubheadline" class="text-xl text-white mb-8">
        Join thousands of users who are mastering their finances with Budget Buddy.
      </p>
      <div ref="ctaButtons" class="flex justify-center gap-4">
        <button class="bg-white text-[#2A7A7A] px-8 py-3 rounded-full font-semibold">
          Get Started Free
        </button>
        <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold">
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
    stagger: 0.2,
    scrollTrigger: {
      trigger: ctaHeadline.value,
      start: 'top 80%',
    },
  })
})
</script>
