<script setup>
import {computed} from 'vue'
import {cards} from "../assets/data/cards"
const props = defineProps({
  id: {
    type:Number,
    required: true
  }
});
const card = computed(() => {
    return cards.find(c =>c.id ===props.id)
})
</script>

<template>
<div class="card"><img :src="card.img" alt=""><div><p>{{ card.tekst }}</p><i class="fas fa-arrow-right"></i></div></div>

</template>

<style scoped>
.card{
    width: 350px;
    max-height: 275px;
    background-color: #460144;
}
.card img{
    width: 100%;
    object-fit: cover;
    max-height: 200px;
}
.card div{
    background-color: #460144;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
}
.card p{
    max-width: 305px;
    font-size: 24px;
    font-weight: 700;
    margin-left: 1rem;
}
.card p,i{
    color: white;
}
</style>