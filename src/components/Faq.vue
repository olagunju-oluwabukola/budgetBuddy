<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-[#2A7A7A] text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div ref="faqContainer" class="max-w-2xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
          <button
            @click="toggleFAQ(index)"
            class="w-full text-left flex justify-between items-center"
          >
            <h3 class="text-xl font-semibold">{{ faq.question }}</h3>
            <component
              :is="activeIndex === index ? 'Minus' : 'Plus'"
              class="w-6 h-6 text-[#2A7A7A]"
            />
          </button>
          <p v-if="activeIndex === index" class="mt-2 text-[#666]">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Plus, Minus } from 'lucide-vue-next'

const faqs = [
  {
    question: 'Is Budget Buddy free to use?',
    answer: 'Yes, we offer a free plan with basic features.',
  },
  { question: 'Can I sync my bank account?', answer: 'Yes, Budget Buddy supports bank syncing.' },
  // Add more FAQs
]

const activeIndex = ref(null)

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqContainer = ref(null)

onMounted(() => {
  gsap.from(faqContainer.value.children, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: faqContainer.value,
      start: 'top 80%',
    },
  })
})
</script>
