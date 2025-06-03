<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

function getPosts() {
  fetch('/data/trustpilot.json')
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
    <div>
    <h2>Trustpilot Anmeldelser</h2>
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <h3>{{ review.title }}</h3>
        <p>{{ review.description }}</p>
        <p>{{ review.name }}, For {{ review.time }} siden</p>
      </li>
    </ul>
  </div>
</template>


<style scoped>

@media (max-width: 600px){
 
}
</style>