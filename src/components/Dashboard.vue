<template>
  <div class="flex-1 p-6 bg-gray-100">
    <div class="flex justify-between">
      <h2 class="text-xl md:text-2xl font-semibold">Budget & Analytics</h2>
      <div class="flex items-center space-x-4">
        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">A</div>
      </div>
    </div>

    <div class="relative">
      <div class="md:hidden relative overflow-hidden">
        <div
          class="flex transition-transform duration-300"
          :style="`transform: translateX(-${currentIndex * 100}%)`"
        >
          <div class="min-w-full p-4 bg-white shadow-md rounded-md flex flex-col items-center">
            <h3 class="text-gray-500 text-sm mb-2 md:mb-3">Incoming</h3>
            <div class="relative w-20 h-20">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path
                  class="circle-bg"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle-fill incoming"
                  stroke-dasharray="80, 100"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p class="text-sm font-bold text-[#2A7A7A] mt-2">₦ 473,154.25</p>
          </div>

          <div class="min-w-full p-4 bg-white shadow-md rounded-md flex flex-col items-center">
            <h3 class="text-gray-500 mb-2 md:mb-3 text-sm">Outgoing</h3>
            <div class="relative w-20 h-20">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path
                  class="circle-bg"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle-fill outgoing"
                  stroke-dasharray="65, 100"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p class="font-bold text-red-600 text-sm mt-2">₦ 273,154.25</p>
          </div>

          <div class="min-w-full p-4 bg-white shadow-md rounded-md flex flex-col items-center">
            <h3 class="text-gray-500 text-sm mb-2 md:mb-3">My Balance</h3>
            <div class="relative w-20 h-20">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path
                  class="circle-bg"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  class="circle-fill balance"
                  stroke-dasharray="90, 100"
                  d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
            <p class="font-bold text-[#A3E635] text-sm mt-2">₦ 1,073,154.64</p>
          </div>
        </div>

        <!-- Indicators -->
        <div class="flex justify-center space-x-2 mt-4">
          <button
            v-for="(_, index) in 3"
            :key="index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="{
              'bg-blue-500 w-3': currentIndex === index,
              'bg-gray-300': currentIndex !== index,
            }"
            @click="goToSlide(index)"
          ></button>
        </div>

        <!-- Navigation arrows -->
        <button
          class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          @click="prevSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          @click="nextSlide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <!-- Original grid (desktop only) -->
      <div class="hidden md:grid grid-cols-3 gap-4 mt-6">
        <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
          <h3 class="text-gray-500 text-sm mb-2 md:mb-3">Incoming</h3>
          <div class="relative w-20 h-20">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle-fill incoming"
                stroke-dasharray="80, 100"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <p class="text-sm font-bold text-[#2A7A7A] mt-2">₦ 473,154.25</p>
        </div>

        <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
          <h3 class="text-gray-500 mb-2 md:mb-3 text-sm">Outgoing</h3>
          <div class="relative w-20 h-20">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle-fill outgoing"
                stroke-dasharray="65, 100"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <p class="font-bold text-red-600 text-sm mt-2">₦ 273,154.25</p>
        </div>

        <div class="p-4 bg-white shadow-md rounded-md flex flex-col items-center">
          <h3 class="text-gray-500 text-sm mb-2 md:mb-3">My Balance</h3>
          <div class="relative w-20 h-20">
            <svg viewBox="0 0 36 36" class="circular-chart">
              <path
                class="circle-bg"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                class="circle-fill balance"
                stroke-dasharray="90, 100"
                d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <p class="font-bold text-[#A3E635] text-sm mt-2">₦ 1,073,154.64</p>
        </div>
      </div>
    </div>

    <div class="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-4 text-sm md:text-md font-semibold">Monthly Summary</h3>
        <MonthlyChart
          :labels="spendingLabels"
          :data="spendingData"
          backgroundColor="#2A7A7A"
          borderColor="#2A7A7A"
        />
      </div>
      <div class="p-4 bg-white shadow-md rounded-md">
        <h3 class="mb-4 text-sm md:text-md font-semibold">Spending Breakdown</h3>
        <SpendingBreakdown />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MonthlyChart from './SpendingChart.vue'
import SpendingBreakdown from './SpendingBreakdown.vue'

const spendingLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
const spendingData = [500, 800, 1200, 900, 1500, 1000, 1300]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % 3
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + 3) % 3
}

const goToSlide = (index) => {
  currentIndex.value = index
}
</script>

<style scoped>
.circular-chart {
  display: block;
  width: 100%;
  height: 100%;
}

.circle-bg {
  fill: none;
  stroke: #e5e7eb;
  stroke-width: 4;
}

.circle-fill {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

.incoming {
  stroke: #2a7a7a;
}

.outgoing {
  stroke: #ef4444;
}

.balance {
  stroke: #a3e635;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0, 100;
  }
}

.md\:hidden .flex {
  display: flex;
  width: 100%;
}

.min-w-full {
  min-width: 100%;
  flex-shrink: 0;
}
</style>
