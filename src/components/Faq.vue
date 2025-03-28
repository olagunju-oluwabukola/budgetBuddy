<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-4xl font-bold text-[#2A7A7A] text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div class="max-w-2xl mx-auto">
        <div v-for="(faq, index) in faqs" :key="index" class="mb-6 border-b border-[#E0E0E0]">
          <button
            @click="toggleFAQ(index)"
            class="w-full text-left flex justify-between items-center py-4"
          >
            <h3 class="text-md md:text-xl font-semibold">{{ faq.question }}</h3>
            <component :is="activeIndex === index ? Minus : Plus" class="w-6 h-6 text-[#2A7A7A]" />
          </button>

          <p v-if="activeIndex === index" class="mt-2 text-[#666] pb-4 text-sm md:text-md">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

const faqs = [
  {
    question: 'Is Budget Buddy free to use?',
    answer:
      'Yes, Budget Buddy offers a free plan with basic features. You can upgrade to a premium plan for advanced tools.',
  },
  {
    question: 'Can I sync my bank account?',
    answer:
      'Yes, Budget Buddy supports syncing with most major banks for seamless transaction tracking.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Your data is protected with bank-level encryption and secure servers. We prioritize your privacy and security.',
  },
  {
    question: 'Can I export my data?',
    answer: 'Yes, you can export your data in CSV format for easy analysis or backup.',
  },
  {
    question: 'Does Budget Buddy support multiple currencies?',
    answer: 'Yes, Budget Buddy supports multiple currencies for international users.',
  },
]

const activeIndex = ref(null)

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-answer {
  transition: all 0.3s ease;
}
</style>
