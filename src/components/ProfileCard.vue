<template>
  <div class="rounded-lg items-center space-x-4">
    <img
      :src="profile.photoURL || defaultAvatar"
      class="w-12 h-12 mb-2 rounded-full border"
      alt="Profile"
    />
    <div>
      <h2 class="text-xl font-bold">{{ profile.fullName || 'UserName' }}</h2>
      <p class="text-white text-sm">{{ authStore.user?.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
const profile = computed(() => authStore.profile)
const defaultAvatar = '/default-avatar.png'
</script>
