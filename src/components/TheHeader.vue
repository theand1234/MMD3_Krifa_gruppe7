<script setup>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue'
</script>

<template>
<header><div class="HeaderLeft"><RouterLink to="/"><img src="../assets/Img/image 31.png" alt=""></RouterLink><NavBar/></div><div></div></header>
</template>



<style scoped>
header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.HeaderLeft{
    display: flex;
    flex-direction: row;
    align-content: center;
}
img{
    margin: 0.5rem;
}

</style>