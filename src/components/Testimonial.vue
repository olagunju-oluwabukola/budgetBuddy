<template>
  <section class="py-20 bg-[#F9F9F9]">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-[#2A7A7A] text-center mb-12">
        Simple Pricing for Everyone
      </h2>
      <div ref="pricingGrid" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="p-8 bg-white rounded-lg shadow-lg text-center"
        >
          <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
          <p class="text-[#666] mb-6">{{ plan.description }}</p>
          <button class="bg-[#A3E635] text-white px-8 py-3 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const plans = [
  { name: 'Free Plan', description: 'Basic features for casual users.' },
  { name: 'Pro Plan', description: 'Advanced tools for serious budgeters.' },
  { name: 'Premium Plan', description: 'Everything in Pro, plus premium support.' },
]

const pricingGrid = ref(null)

onMounted(() => {
  gsap.from(pricingGrid.value.children, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: pricingGrid.value,
      start: 'top 80%',
    },
  })
})
</script>
