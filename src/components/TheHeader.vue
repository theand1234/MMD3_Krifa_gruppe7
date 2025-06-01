<script setup>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue'
</script>

<template>
<header><div class="HeaderLeft"><RouterLink to="/"><img src="../assets/Img/image 31.png" alt=""></RouterLink><NavBar/></div><div class="HeaderRight"><div><i class="fa-solid fa-magnifying-glass"></i><p>Søg</p></div>
<div><i class="fa-solid fa-lock"></i><p>Mit Krifa</p></div><button>BLIV MEDLEM</button></div></header>
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
.HeaderRight{
    display: flex;
    align-items: center;
    gap: 32px;
    margin-right: 32px;
}
.HeaderRight button{
    background-color: #f1e13d;
    border: none;
    border-radius: 25px;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}
.HeaderRight div{
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 4px;
}
img{
    margin: 0.5rem;
}

</style>