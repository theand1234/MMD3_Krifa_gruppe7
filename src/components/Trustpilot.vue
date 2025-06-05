<script setup>
import { ref, onMounted } from 'vue'

const reviews = ref([])

function getPosts() {
  fetch('data/trustpilot.json')
    .then(response => response.json())
    .then(data => {reviews.value = data})
    .catch(error => {console.error('ERROR !!', error)})
}

onMounted(() => {
  getPosts()
})

</script>

<template>
    <div id="Trustpilot">
    <h2>Vi hjælper dig før, under og efter din ansættelse</h2>
    <ul class="cardContainer">
      <li v-for="review in reviews" :key="review.id" class="card">
        <img src="../assets/Img/trustpilot_stjerner.png" alt="">
        <h3>{{ review.title }}</h3>
        <p class="description">{{ review.description }}</p>
        <p class="time"><span>{{ review.name }}</span>, For {{ review.time }} siden</p>
      </li>
    </ul>
    <p class="statistik">Bedømt til <span>4.6</span> / 5 baseret på <span>7.186 anmeldelser</span>. Viser vores 4- og 5-stjernede anmeldelser</p>
    <div class="statistikImg">
        <img src="../assets/Img/trustpilot_logo.png" alt="">
    </div>
  </div>
</template>


<style scoped>
#Trustpilot h2{
    font-style: italic;
    font-weight: 900;
    color: rgb(49, 49, 49);
    padding: 0 2rem;
    text-align: center;
}

.cardContainer {
    padding: 1.5rem 3rem;
    background-color: rgb(255, 255, 255);
    display: flex;
    gap: 2rem;
    flex-wrap: nowrap;
    overflow: auto;
    max-width: 100%;
}

.card {
    flex: 0 0 21rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 12rem;
    background-color: rgb(238, 241, 243);
    padding: 1rem;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.description {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 3.2rem;
}

.card img{
    width: 7rem;
}

.card h3{
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.time{
    font-size: .9rem;
    color: rgb(34, 34, 34);
}

.time span{
    font-weight: 600;
}

.statistik{
    font-size: .9rem;
    text-align: center;
    padding: 0 1.5rem;
}

.statistik span:first-child{
    font-weight: 700;
}

.statistik span:last-child{
    text-decoration: underline;
}

.statistikImg{
    display: flex;
    justify-content: center
}

.statistikImg img{
    width: 6rem;
}

@media (min-width: 1000px){
    #Trustpilot{
    padding: 0 12rem;
}
}

</style>