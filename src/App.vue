<script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <router-view />
    <!-- <JSONLab /> -->
  </main>
</template>

<style scoped>
</style>
