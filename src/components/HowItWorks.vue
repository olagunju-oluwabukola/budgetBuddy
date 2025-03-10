<template>
  <section ref="howItWorksSection" class="py-20 bg-[#F9F9F9]">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-[#2A7A7A] text-center mb-12">How Budget Buddy Works</h2>
      <div class="flex flex-col items-center relative">
        <div
          ref="verticalLine"
          class="absolute top-0 bottom-0 w-0.5 bg-[#2A7A7A] transform -translate-x-1/2"
        ></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="flex items-center w-full mb-8 last:mb-0 relative"
          :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <div
            ref="stepNumbers"
            class="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center bg-[#A3E635] rounded-full text-white text-xl font-bold relative z-10"
          >
            {{ index + 1 }}
          </div>

          <div
            ref="stepContents"
            class="w-1/2 ml-4 mr-4"
            :class="index % 2 === 0 ? 'text-left' : 'text-right'"
          >
            <div
              class="md:p-6 p-4 bg-white rounded-lg border border-[#E0E0E0] hover:border-[#2A7A7A] transition-all duration-300"
            >
              <h3 class="text-lg md:text-xl font-semibold mb-4">{{ step.title }}</h3>
              <p class="text-[#666] text-sm md:text-lg">{{ step.description }}</p>
            </div>
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

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your free account in seconds.',
  },
  {
    title: 'Add Transactions',
    description: 'Log your income and expenses effortlessly.',
  },
  {
    title: 'Set Goals',
    description: 'Define your savings targets.',
  },
  {
    title: 'Track Progress',
    description: 'Watch your financial health improve.',
  },
]

const howItWorksSection = ref(null)
const verticalLine = ref(null)
const stepNumbers = ref([])
const stepContents = ref([])

onMounted(() => {
  // Animate the vertical line
  gsap.from(verticalLine.value, {
    scaleY: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: howItWorksSection.value,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  })

  stepNumbers.value.forEach((number, index) => {
    gsap.from(number, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
      delay: index * 0.3,
      scrollTrigger: {
        trigger: number,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    })
  })

  stepContents.value.forEach((content, index) => {
    gsap.from(content, {
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50,
      duration: 0.5,
      delay: index * 0.3,
      scrollTrigger: {
        trigger: content,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    })
  })
})
</script>

<style scoped>
.step-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
</style>
