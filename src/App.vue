<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import IndexPage from './Pages/IndexPage.vue'
import './assets/Styles/MainStyle.css'
</script>

<template>
  <main>
    <RouterView>
    </RouterView>
  </main>
  <TheFooter />
</template>

<style scoped>

</style>
