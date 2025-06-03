<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

function getPosts() {
  fetch('../assets/data/trustpilot.json')
    .then(response => response.json())
    .then(data => {
      reviews.value = data
    })
    .catch(error => {
      console.error('ERROR !!', error)
    })
}

onMounted(() => {
  getPosts()
})

</script>

<template>
    <h3>{{ correctReview.name }}</h3>
</template>


<style scoped>

@media (max-width: 600px){
 
}
</style>