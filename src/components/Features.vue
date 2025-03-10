<template>
  <section ref="featuresSection" class="py-10 md:py-20 bg-white">
    <div class="container mx-auto px-6 md:px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-[#2A7A7A] text-center mb-12">
        Why Choose Budget Buddy?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          ref="featureCards"
          class="p-4 md:p-8 bg-gradient-to-br from-[#F9F9F9] to-[#E0F2F2] rounded-lg border border-[#E0E0E0] hover:border-[#2A7A7A] transition-all duration-300"
        >
          <div class="text-center">
            <div
              class="md:w-16 w-10 h-10 md:h-16 mx-auto mb-6 flex items-center justify-center bg-[#2A7A7A] rounded-full"
            >
              <component :is="feature.icon" class="md:w-8 md:h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ feature.title }}</h3>
            <p class="text-[#666] mb-4">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Wallet,
  Goal,
  PieChart,
  Smartphone,
  Shield,
  Bell,
  TrendingUp,
  CreditCard,
} from 'lucide-vue-next'

gsap.registerPlugin(ScrollTrigger)

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
  {
    icon: Shield,
    title: 'Bank-Level Security',
    description: 'Your data is protected with top-tier encryption.',
    additional: 'Learn More',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Get notified about unusual spending or bill due dates.',
    additional: 'Learn More',
  },
  {
    icon: TrendingUp,
    title: 'Investment Tracking',
    description: 'Monitor your investments alongside your budget.',
    additional: 'Learn More',
  },
  {
    icon: CreditCard,
    title: 'Debt Management',
    description: 'Plan and track your debt repayment strategies.',
    additional: 'Learn More',
  },
]

const featuresSection = ref(null)
const featureCards = ref([])

onMounted(() => {
  gsap.from(featuresSection.value, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: featuresSection.value,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  })

  featureCards.value.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: index * 0.2,
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<style scoped>
.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
