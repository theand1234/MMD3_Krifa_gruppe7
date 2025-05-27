<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import Forside from './Pages/IndexPage.vue'
import './assets/Styles/MainStyle.css'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView>
    </RouterView>
  </main>
  <TheFooter />
</template>

<style scoped>

</style>
