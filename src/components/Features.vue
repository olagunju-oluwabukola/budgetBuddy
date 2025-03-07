<template>
  <section ref="featuresSection" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-[#2A7A7A] text-center mb-12">Why Choose Budget Buddy?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="p-8 bg-[#F9F9F9] rounded-lg border border-[#E0E0E0] hover:border-[#2A7A7A] transition-all duration-300"
        >
          <div class="text-center">
            <!-- Icon with a subtle background circle -->
            <div
              class="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#2A7A7A] rounded-full"
            >
              <component :is="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
            <p class="text-[#666] mb-4">{{ feature.description }}</p>
            <!-- Additional content (e.g., stats or highlights) -->
            <div v-if="feature.additional" class="text-sm text-[#2A7A7A]">
              {{ feature.additional }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Wallet, Goal, PieChart, Smartphone } from 'lucide-vue-next'

const features = [
  {
    icon: Wallet,
    title: 'Track Expenses',
    description: 'Easily log and categorize your spending to stay on top of your finances.',
    additional: 'Save up to 20% more monthly.',
  },
  {
    icon: Goal,
    title: 'Set Goals',
    description: 'Create personalized savings goals and track your progress effortlessly.',
    additional: 'Achieve goals 2x faster.',
  },
  {
    icon: PieChart,
    title: 'Visualize Spending',
    description: 'Understand your spending habits with clear, interactive charts.',
    additional: '90% users improve spending habits.',
  },
  {
    icon: Smartphone,
    title: 'Sync Across Devices',
    description: 'Access your budget anytime, anywhere, on all your devices.',
    additional: '24/7 access, no interruptions.',
  },
]

const featuresSection = ref(null)

// Slide-in animation on mount
onMounted(() => {
  gsap.from(featuresSection.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: featuresSection.value,
      start: 'top 80%', // Animation starts when the top of the section is 80% in view
      toggleActions: 'play none none none', // Play animation once
    },
  })
})

// Optional: Reset animation on unmount
onUnmounted(() => {
  gsap.set(featuresSection.value, { opacity: 0, y: 50 })
})
</script>

<style scoped>
/* Hover effect for feature cards */
.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
