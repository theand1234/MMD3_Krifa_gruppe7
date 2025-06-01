<script setup>
import {cards} from "../assets/data/cards"
</script>

<template>
<div class="Card"><img :src="Cards.img" alt=""><div><p>{{ Cards.tekst }}</p><i class="fas fa-arrow-right"></i></div></div>

</template>

<style scoped>
.Card{
    max-width: 350px;
    max-height: 275px;

}
.card img{
    width: 100%;
    object-fit: cover;
    object-position: no-repeat;
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

}
</style>