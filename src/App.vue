<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import IndexPage from './Pages/IndexPage.vue'
import './assets/Styles/MainStyle.css'
import NavBar from './components/NavBar.vue'
</script>

<template>
  
  <main>
    <TheHeader/>
    <RouterView>
    </RouterView>
  </main>
  <TheFooter />
</template>

<style scoped>

</style>
