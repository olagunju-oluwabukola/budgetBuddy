<template>
  <Navbar />
  <div class="pt-20">
    <RouterView />
  </div>
  <footer>
    <FooterComp />
  </footer>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import FooterComp from '@/components/FooterComp.vue'
</script>
