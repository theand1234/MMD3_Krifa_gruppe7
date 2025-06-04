<script setup></script>

<template>
    <section class="hero">
  <div class="hero-left">
    <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
</svg>
    <div class="text-container">
      <h1>Medlemskab for studerende</h1>
      <p>Gratis fagforening og a-kasse når du er under uddannelse</p>
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
      href="../assets/Img/Hero-Medlem-som-studerende.jpg"
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
      href="../assets/Img/Hero-Medlem-som-studerende.jpg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#mobileClip)"
    />
  </svg>
  </div>
</section>
</template>

<style scoped>
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
    margin-top: 1rem;
}
.hero {
  display: flex;
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  font-family: sans-serif;
  padding: 0;
  gap: 0;
  background-color: #460144;
}

.hero-left,.hero-right{
    width: 50%;
    min-width: 0;

}
.hero-left {
  position: relative;
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
    width: 50%;
    min-height: 40vh;
    min-width: 0;
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