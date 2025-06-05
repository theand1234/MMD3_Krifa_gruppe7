<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

function getPosts() {
  fetch('/data/trustpilot.json')
    .then(response => response.json())
    .then(data => {reviews.value = data})
    .catch(error => {console.error('ERROR !!', error)})
}

onMounted(() => {
  getPosts()
})

</script>

<template>
    <div class="statistik">
        <p>Vores kunder siger</p>
        <img src="../assets/Img/trustpilot_score.png" alt=""> 
        <p><span>4.6</span> / 5 baseret på 
        <span>7.186 anmeldelser</span></p>
        <img src="../assets/Img/trustpilot_logo.png" alt="">
    </div>
</template>


<style scoped>

.statistik{
    font-size: .9rem;
    text-align: center;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    flex-wrap: wrap;
}

.statistik span:first-child{
    font-weight: 700;
}

.statistik span:last-child{
    text-decoration: underline;
}

img:first-of-type{
    width: 18rem;
}

img:last-of-type{
    width: 5rem;
}

@media (max-width: 1000px){
    .statistik p{
        display: none;
    }
}

</style>