<script setup>

</script>

<template>
    <main>
        <section class="hero">
  <!-- VENSTRE DEL -->
  <div class="hero-left">
    <!-- 1A: Baggrundsfarve + SVG-figur i hjørnet -->
    <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
</svg>
      <!-- 
        Her indsætter du den SVG-path, som udgør den dekorative ”figur” i øverste venstre hjørne.
        Du kan eksportere path-data direkte fra Figma/Illustrator. 
        Som eksempel bruger vi en generisk form:
      -->

    <!-- 1B: Tekstindhold -->
    <div class="text-container">
      <h1>Medlemskab</h1>
      <p>Bliv medlem af en a-klasse og fagforening, der sætter fokus på mennesket før systemet.</p>
    </div>
  </div>

  <!-- HØJRE DEL (BILLEDE MED KURVET VENSTRE KANT) -->
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

<section><div><h2>A-kasse</h2><p>Få op til 24.199 kr. om måneden i dagpenge, hjælp til at komme videre i din karriere og adgang til attraktive rabatter.
</p><ul><li>Dagpenge</li>
<li>Mulighed for Lønsikring</li>
<li>Professionel karriererådgivning</li>
<li>Personlig jobkonsulent</li></ul><button>LÆS MERE OM A-KASSE</button></div><img src="../assets/Img/A-kasse.png" alt=""></section>
<section class="Blaa"><div><h2>Fagforening</h2><p>Vi kender dine rettigheder, når du ikke selv gør.
</p><ul><li>Juridisk rådgivning</li>
<li>Forhandling med arbejdsgivere</li>
<li>Sagføring i retten</li>
<li>Personlig karrierekonsulen</li></ul>
<button>LÆS MERE OM FAGFORENING</button></div><img src="../assets/Img/Fagforening.png" alt=""></section>
<section><div><h2>Under uddannelse</h2><p>Gratis fagforening og a-kasse for dig under uddannelse.
</p><ul><li>Gratis a-kasse</li>
<li>Personlig karrierekonsulent</li>
<li>Juridisk rådgivning</li>
<li>Gratis psykologhjælp</li></ul>
<button>LÆS MERE OM GRATIS MEDLEMSKAB</button></div><img src="../assets/Img/Under_uddannelse.png" alt=""></section>
<section class="Blaa"><div><h2>Krifa Selvstændige</h2><p>Masser af fordele til dig, der er selvstændig på fuldtid.
</p><ul><li>Juridisk rådgivning</li>
<li>Pensionsordning gennem Danica Pension</li>
<li>Rabat på forsikringer, brændstof m.m.</li>
<li>Hjælp til stress og trivsel</li></ul>
<button>LÆS MERE OM KRIFA SELVSTÆNDIGE</button></div><img src="../assets/Img/Krifa_selvstaendige.png" alt=""></section>
</main>
</template>

<style scoped>
section{
    display: flex;
    padding: 4rem 5rem;
    gap: 5rem;
}
li{
    list-style: circle;
}
.Blaa{
    background-color: #CBE6F7;
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
img{
object-fit: cover;
width: 35%;

}
p{
width: 75ch;
}
div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (max-width: 600px){
    section{
        flex-direction: column-reverse;
        padding: 0;
        margin-top: 2rem;
    }
    p{
        width: 30ch;
    }
    div{
        padding: 2rem;
    }
    img{
        width: 100%;
    }
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
  font-size: var(--Hero-Desktop);
  margin-bottom: 1rem;
  font-style: italic;
}

.text-container p {
  font-size: var(--Subheading-Desktop);
  font-style: italic;
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