<script setup>
import Card from '../components/Cards.vue'
</script>

<template>
    <section class="hero">
  <div class="hero-left">
    <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
</svg>
    <div class="text-container">
      <h1>Medlemsfordele</h1>
      <p>Som medlem af Krifa har du adgang til en lang række fordele. Her får du et overblik over, hvilke fordele der hører til de forskellige medlemskaber.</p>
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
        href="../assets/Img/Hero-Medlemsfordele.jpg"
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
            href="../assets/Img/Hero-Medlemsfordele.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clip-path="url(#mobileClip)"
            />
    </svg>
  </div>
</section>
<section class="desktop-only1">
    <h2>Få overblik over dine medlemsfordele</h2>
  <div class="container">
    <div class="pricing-header">
      <div class="price-column empty-cell"></div>
      <div class="price-column">
        <div class="plan-name">Fagforening</div>
        <div class="plan-price">150 <span>kr./md.</span></div>
      </div>
      <div class="price-column">
        <div class="plan-name">A-kasse</div>
        <div class="plan-price">538 <span>kr./md.</span></div>
      </div>
      <div class="price-column">
        <div class="plan-name">A-kasse & Fagforening</div>
        <div class="plan-price">688 <span>kr./md.</span></div>
      </div>
    </div>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="feature-col">Funktion</th>
            <th>Fagforening</th>
            <th>A-kasse</th>
            <th>A-kasse & Fagforening</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature"><a href="#">Dagpenge</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Hjælp til jobsøgning</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Hjælp til jobsøgning i din opsigelsesperiode</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for at tegne lønsikring</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for Efterløn</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Rabataftaler</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Webinarer og arrangementer</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Lønrådgivning</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Udbetaling ved strejke og lockout</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Tjek af ansættelseskontrakt</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Tjek af lønseddel</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Stress- og trivsels samtale</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Karrieresamtale</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for bisidder</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Fuld juridisk dækning helt til Højesteret</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Socialrådgiver</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Kursus- og uddannelses­tilskud</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Autorisation</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Emblemer</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="cards-section">
<div class="cards">
    <div class="plan-header">
        <h2>A-kasse og fagforening</h2>
        <div>
            <p>688</p>
            <span>kr./md.</span>
        </div>
    </div>
    <p>Gør brug af vores fordele</p>
    <ul class="plan-features">
        <li>
            <a href="#">Dagpenge</a>
            <span>
                <i class="fa-solid fa-check"></i>
            </span>
        </li>
        <li>
            <a href="#">Hjælp til jobsøgning</a>
            <span>
                <i class="fa-solid fa-check"></i>
            </span>
        </li>
    </ul>
    <i class="fa-solid fa-arrow-down plan-arrow"></i>

</div>
<div class="cards">
    <div class="plan-header">
        <h2>Fagforening</h2>
        <div>
            <p>150</p>
            <span>kr./md.</span>
        </div>
    </div>
    <p>Fagforening til hele dit arbejdsliv</p>
    <ul class="plan-features">
        <li>
            <a href="#">Dagpenge</a>
            <span>
                <i class="fa-solid fa-xmark"></i>
            </span>
        </li>
        <li>
            <a href="#">Hjælp til jobsøgning</a>
            <span>
                <i class="fa-solid fa-xmark"></i>
            </span>
        </li>
    </ul>
    <i class="fa-solid fa-arrow-down plan-arrow"></i>

</div>
<div class="cards">
    <div class="plan-header">
        <h2>A-kasse</h2>
        <div>
            <p>538</p>
            <span>kr./md.</span>
        </div>
    </div>
    <p>økonomisk tryghed, hvis du mister dit job</p>
    <ul class="plan-features">
        <li>
            <a href="#">Dagpenge</a>
            <span>
                <i class="fa-solid fa-check"></i>
            </span>
        </li>
        <li>
            <a href="#">Hjælp til jobsøgning</a>
            <span>
                <i class="fa-solid fa-check"></i>
            </span>
        </li>
    </ul>
    <i class="fa-solid fa-arrow-down plan-arrow"></i>

</div>
</section>

<div class="artikle"><card :id="1"/><card :id="2"/><card :id="3"/></div>
</template>

<style scoped>
.artikle{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  height: fit-content;
  margin-bottom: 2rem;
}
h2{
    text-align: center;
}
.plan-arrow{
    text-align: center;
    font-size: 1.25rem;
}
.cards-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}
.plan-header{
    position: relative;
    background-color: var(--Hvid);
    padding: 1rem 1rem 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
}

.cards{
    width: 280px;
    background-color: var(--Hvid);
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
}
.plan-header span{
    font-size: 0.875rem;
    color: #555;
    font-weight: 400;
}
.plan-features{
    margin: 0;
    padding: 0.5rem 1rem 0;
    
}
.plan-features li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--Hvid);
}
.plan-features li a{
    color: var(--Lilla-Accent);
}

.desktop-only1{
    padding: 2rem 1rem;
}
.container{
    max-width: 1000px;
    margin: 0 auto;
}
.pricing-header{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    text-align: center;
    margin-bottom: 1.5;
    width: 100%;
}
.price-column{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.plan-price{
    font-weight: 700;
}
table{
    width: 100%;
    min-width: 44rem;
}
table thead th{
    border-bottom: 2px solid #460144;
    font-weight: 600;
    padding: 1rem 0.5rem;
}
table tbody tr:nth-child(odd){
    background-color: var(--lys-Graa);
}
table tbody tr{
    padding: 1rem 0.5rem;
    text-align: center;
    vertical-align: middle;
    border-bottom: 1px solid #e0d9f7;
}

table tbody td.feature {
  text-align: left;
  padding-left: 1rem;
}

table tbody td.feature a {
  color: #460144;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}

table tbody td.feature a:hover {
  color: #2e0232;
}
.cell span{
    font-size: 1.25rem;
}
.cell.yes span{
    color: var(--Krifa-Lilla);
}
.cell.no span{
    color: #999999;
}
/* hero */
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
    max-width: 60%;  
    color: white;
}

.text-container h1 {
    margin-bottom: 1rem;
    font-style: italic;
}

.text-container p {
    font-size: var(--Subheading-Desktop);
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

.mask-image image, .mask-image-mobile image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media (max-width: 600px){
    .artikle{
        margin-top: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
    .text-container h1{
        font-size: 30px;
    }
    .desktop-only, .desktop-only1{
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
@media (min-width: 700px){
    .cards-section{
        display: none;
    }
}

</style>
