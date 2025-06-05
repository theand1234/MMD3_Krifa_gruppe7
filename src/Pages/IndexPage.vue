<script setup>
import Trustpilot from '../components/Trustpilot.vue'
import Card from '../components/Cards.vue'
import TrustpilotMini from '../components/TrustpilotMini.vue'
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
      href="../assets/Img/Hero-Index.png"
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
      href="../assets/Img/Hero-Index.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#mobileClip)"
    />
  </svg>
  </div>
</section>
<section>
    <TrustpilotMini/>
</section>
<h2>Hvordan kan vi hjælpe dig?</h2>
<section >
  <div class="cards"><card :id="1"/><card :id="2"/><card :id="3"/></div>
  
</section>
<div class="BedsteAkasseWrapper"><a class="BedsteAkasse" href=""><div class="FaahjaelpBtn"><h2>Vi gør en forskel for dig og din arbejdslyst</h2><button class="BedsteAkasseBtn">Få hjælp af Danmarks bedste a-kasse</button></div><img src="../assets/Img/Bedsteakasse.png" alt=""></a></div>
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
 <section class="Anbefal-en-ven-section">
<div class="AnbefalVen"><h2>Anbefal en ven til Krifa og få en gave</h2><p>Hjælp en ven, kollega eller ægtefælle med at få samme gode medlemsfordele som dig. Så giver vi dig en gave som tak.</p><button>Anbefal en ven</button></div><img src="../assets/Img/Anbefalven.png" alt="">
 </section>
  </section>
<div class="wrapper">
    <Trustpilot />
  </div>
</template>

<style scoped>
.AnbefalVen{
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem;
}
.AnbefalVen button{
  margin: 0;
}
.Anbefal-en-ven-section{
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1067' height='291' viewBox='0 0 1067 291' fill='none'%3E%3Cpath d='M1053.76 0.994143C1057.93 0.628336 1062.18 0.299974 1066.5 0.0117211L-1.14441e-05 0.0117188L0 57V101V152C0 167 0 178.839 0 178.839V289.997L44.2367 289.997L815.293 289.999L815.348 290.073H979.172L913.172 202.073C894.935 177.457 891.672 142.073 927.172 108.073L1053.76 0.994143Z' fill='%23E5E9F2'/%3E%3Cpath d='M269 0.00960398L227.856 124.058C208.337 169.797 177.304 210.164 138.104 240.798C110.046 262.727 78.1338 279.396 44.2367 289.997L0 289.997V178.839C53.0714 165.43 97.1702 128.124 118.792 77.4339L146 0.00927734L269 0.00960398Z' fill='white'/%3E%3C/svg%3E");
  background-size: cover;
  display: flex;
  
}
.Anbefal-en-ven-section img{
  max-width: inherit;
  height: 20vw;
}
.wrapper{
  margin: 3rem 0 1rem 0;
}
.flex{
  display: flex;
  flex-direction: column;
}
.BedsteAkasseWrapper{
  background-color: #460144;
}
.FaahjaelpBtn{
  display: flex;
  flex-direction: column;
}
.BedsteAkasseBtn{
  font-size: 1rem;
  border: 2px solid white;
  color: white;
  background-color: #460144;
  border-radius: 50px;
  cursor: pointer;
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
    margin-bottom: 2rem;
}
.Flere-Nyheder-section{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  gap: 2rem;
  margin: 0rem 5rem 2rem;

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
.Nyhed p{
  width: 35ch;
}
.Nyhed img{
  max-width: 30%;
  margin-right: 6px;
}
.cards{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  height: fit-content;
}
.BedsteAkasse{
  margin-top: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
}
.BedsteAkasse h2{
  margin: 1rem;
  color: white;
}
  /* Hero */
.hero {
  display: flex;
  width: 100%;
  overflow: hidden;
  font-family: sans-serif;
  padding: 0;
  gap: 0;
  background-color: #460144;
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
  margin-bottom: 1rem;
  font-style: italic;
}

.text-container p {
  font-style: italic;
  line-height: 1.4;
  width: 100%;
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
  .Anbefal-en-ven-section{
    flex-direction: column;
  }
  .Anbefal-en-ven-section img{
    width: 100%;
    height: auto;
  }
  .Nyheder-section{
    grid-template-columns: 1fr;
    width: 100%;
    margin: 2rem 0rem;
  }
  .Flere-Nyheder-section{
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }
  .Nyhed{
    width: 90%;
  }
  .Nyheder-section p{
    width: 20ch;
  }
  .BedsteAkasse{
    flex-direction: column-reverse;
    margin-top: 3rem;
  }
  .BedsteAkasse h2{
    align-self: center;
    margin: 1rem 1rem 3rem 1rem;
    text-decoration: underline;
  }
  .cards{
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
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
