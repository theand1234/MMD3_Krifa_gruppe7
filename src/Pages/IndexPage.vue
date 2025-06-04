<script setup>
import Trustpilot from '../components/Trustpilot.vue'
import Card from '../components/Cards.vue'
import {ref} from 'vue'
const showMore = ref(false)
</script>

<template>
  <section class="hero">
  <div class="hero-left">
    <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
</svg>
    <div class="text-container">
      <h3>Bliv del af</h3>
      <h1>Danmarks Bedste A-Kasse</h1>
      <p>Krifa fremmer god arbejdslyst ved at sætte dig og din trivsal i fokus. Vi kender dine rettigheder, når du ikke selv gør.</p>
      <button>Bliv medlem</button>
    </div>
  </div>
  <div class="hero-right">
   
    <svg class="mask-image desktop-only" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="desktopClip">
        <path d="M15,0 L100,0 L100,100 L15,100 C5,67 5,33 15,0 Z" />
      </clipPath>
    </defs>
    <image
      href="../assets/Img/Hero-Typer-af-medlemskab.jpg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#desktopClip)"
    />
  </svg>
  <svg class="mask-image-mobile mobile-only" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="mobileClip">
        <path d="M0,0 L100,0 L100,80 C75,100 25,100 0,80 Z" />
      </clipPath>
    </defs>
    <image
      href="../assets/Img/Hero-Typer-af-medlemskab.jpg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#mobileClip)"
    />
  </svg>
  </div>
</section>
<h2>Hvordan kan vi hjælpe dig?</h2>
<section >
  <div class="cards"><card :id="1"/><card :id="2"/><card :id="3"/></div>
  
</section>
<a class="flex" href=""><h2>Få hjælp af Danmarks bedste a-kasse</h2><img src="../assets/Img/Bedsteakasse.png" alt=""></a>
<h2>Nyt i Krifa</h2>
<section class="flex" >
  <div class="Nyheder-section">
  <div class="Nyhed"><img src="../assets/Img/Nyhed1.png" alt=""><p>Nye tal forstærker billedet af den danske model som en mindretalsmodel</p></div>
  <div class="Nyhed"><img src="../assets/Img/Nyhed2.png" alt=""><p>Vigtigt princip om individuel indsats til de ledige knæsættes</p></div>
  <div class="Nyhed"><img src="../assets/Img/Nyhed3.png" alt=""><p>Regeringen vil ikke digitalisere og sender unødig milliardregning til...</p></div>
  <div class="Nyhed"><img src="../assets/Img/Nyhed4.png" alt=""><p>Betalt frihed til fertilitetsbehandling er nybrud i ny overenskomst</p></div>
</div>
<div class="Flere-Nyheder-section" v-show="showMore">
      <div class="Nyhed"><img src="../assets/Img/Nyhed4.png" alt=""><p>Betalt frihed til fertilitetsbehandling er nybrud i ny overenskomst</p></div><div class="Nyhed"><img src="../assets/Img/Nyhed4.png" alt=""><p>Betalt frihed til fertilitetsbehandling er nybrud i ny overenskomst</p></div>
    </div>
<button 
      class="load-more-btn" 
      :class="{ active: showMore }" 
      @click="showMore = !showMore"
    >
      {{ showMore ? 'Vis færre nyheder' : 'Se flere nyheder' }}
  </button>
 
  </section>
<div class="wrapper">
    <Trustpilot />
  </div>
</template>

<style scoped>
.wrapper{
  margin: 3rem 0 1rem 0;
}
.flex{
  display: flex;
  flex-direction: column;
}
.load-more-btn{
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid #460144;
  background-color: white;
  color: #460144;
  border-radius: 50px;
  cursor: pointer;
}
h2{
  display: flex;
  justify-content: center;
  margin: 3rem 0 1rem 0;
}
.text-container p{
  margin-bottom: 2rem;
}
button{
  font-size: 20px;
    font-weight: 700;
    border-radius: 46px;
    background-color: #F1e13d;
    border: none;
    width: 303px;
    height: 46px;
    align-self: center;
}
.Flere-Nyheder-section{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 2rem;
  margin: 2rem 5rem;

}
.Nyheder-section{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 2rem;
  margin: 2rem 5rem;
}
.Nyhed{
  display: flex;
  width: 100%;
  background-color: #411d53;
  color: white;
  align-items: center;
  font-weight: 700;
  font-size: 25;
}
.Nyhed img{
  max-width: 30%;
  margin-right: 6px;
}
.cards{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.flex{
  justify-content: center;
  align-items: center;
  display: flex;
}
  /* Hero */
.hero {
  display: flex;
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  font-family: sans-serif;
  padding: 0;
  gap: 0;
}


.hero-left {
  position: relative;
  flex: 1;  
  background-color: #460144;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shape-left {
  position: absolute;
  top: -20%;
  left: -20%;
  width: 100%;
  height: auto;
  z-index: 1;
}

.text-container {
  position: relative;
  z-index: 2; 
  max-width: 50%;  
  color: white;
}

.text-container h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.text-container p {
  font-size: 1.125rem;
  line-height: 1.4;
  width: 35ch;
}

.hero-right {
  position: relative;
  flex: 1;                 
  overflow: hidden;
  background-color: #460144; 
}

.mask-image {
  display: block;
  width: 100%;
  height: 100%;
}

.mask-image-mobile {
  display: none;
  width: 100%;
  height: 100%;
}

.mask-image image,
.mask-image-mobile image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


@media (max-width: 600px) {
    .desktop-only{
        display: none;
    }
    .mobile-only{
        display: block;
        width: 100%;
        height: auto;
    }
  .hero {
    flex-direction: column-reverse;
  }
  .shape-left{
    display: none;
  }
  .hero-left,
  .hero-right {
    flex: none;
    width: 100%;
    min-height: 40vh;
  }
  .hero-right{
    padding: 0;
  }
  .text-container {
    max-width: none;
    text-align: center;
  }
}
</style>
