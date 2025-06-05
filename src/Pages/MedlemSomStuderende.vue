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
      <p>Gratis fagforening og a-kasse når du er under iddannelse</p>
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
<section class="MedlemsfordeleWrapper">
    <h2>Få masser af medlemsfordele - helt gratis</h2>
    <div class="Medlemsfordele">
        <div>
            <i class="fa-solid fa-comments"></i>
            <p class="Bold">Personlig karrieresparring</p>
            <p>Hvad er vigtigt i et job for dig? Er du i tvivl om fremtiden? Vi tager udgangspunkt i din situation, og rådgiver om dine muligheder.</p>
        </div>
        <div>
            <i class="fa-solid fa-book-bookmark"></i>
            <p class="Bold">Studiejob eller elevplads?</p>
            <p>Få vores jurister til at kigge din ansættelseskontrakt igennem inden du underskriver. Vi hjælper også med løntjek og arbejdsforhold.</p>
        </div>
    <div>
        <i class="fa-solid fa-brain"></i>
        <p class="Bold">Gratis psykologhjælp</p>
        <p>Har du eksamensangst, stress eller trives du ikke? Få tre gratis samtaler med Krifas erfarne psykologer og psykoterapeuter.</p>
    </div>
    <div>
        <i class="fa-solid fa-lightbulb"></i>
        <p class="Bold">Iværksætter</p>
        <p>Drømmer du om din egen virksomhed? Få hjælp til at starte din virksomhed med nyttige værktøjer, rådgivning, podcast og webinarer.</p>
    </div>
</div>
<button>Bliv medlem</button>
</section>
<section class="GratisUnderUdd">
    <div class="angled-image">
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="diagonalClip">
       <!-- m er punktet man starter i, så laver man en L som er en lige linje. Q får den til at lave en bue så den går fra 80,0 til 90,50 men den svejer mod 90,20 -->
        <path d="M0,0 L80,0  Q90,20 90,50, Q90,80 70,100 L0,100 z" />
      </clipPath>
    </defs>

    <!-- Billedet indeni SVG, der bliver klippet af clipPath'en -->
    <image
      href="../assets/Img/Gratis-akasse-pige.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#diagonalClip)"
    />
  </svg>
</div>
    <div class="listwrap">
        <div>
            <h2>Gratis a-kasse under uddannelse</h2>
            <p>Du kan få gratis medlemskab af a-kassen, mens du er i gang med en erhvervs- eller videregående uddannelse der varer mindst 18 måneder.</p>
        </div>
        <div>
            <ul>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Dagpenge</p>
                        <p>Få ret til dagpenge som nyuddannet. Du kan få op til 15.081 kr. efter din uddannelse slutter, hvis du ikke har et job på hånden.</p>
                    </div>
                </li>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Hjælp til din jobsøgning</p>
                        <p>Få en ekstra livline, når jobjagten går i gang. Vi hjælper dig med jobsøgningen, giver feedback på dit CV og ansøgning og konkrete råd til jobsamtalen.
                        </p>
                </div>
                </li>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Få den bedste medlemsservice</p>
                        <p>Vi har verdens bedste medlemmer - og de fortjener verdens bedste service. Derfor er vi rigtig glade over at være kåret til Danmarks bedste telefoniske service af Wilke. Vi sidder også klar til at hjælpe dig.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>
<section class="GratisUnderUdd2">

    <div class="listwrap">
        <div>
            <h2>Gratis fagforening under uddannelse</h2>
            <p>Du kan få gratis fagforening, når du er fyldt 13 år og er under uddannelse.</p>
        </div>
        <div>
            <ul>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Tjek af kontrakt eller lønseddel</p>
                        <p>Er du i tvivl om, du får det rigtige i løn eller skal du underskrive en kontrakt? Få hjælp af vores jurister – og kom godt fra start.
                        </p>
                    </div>
                </li>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Sparring om karriere og jobmuligheder</p>
                        <p>Er du glad for din elevplads, studiejob eller er du i tvivl om din karrierevej? Få sparring om dine muligheder.
                        </p>
                </div>
                </li>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Adgang til webinarer</p>
                        <p>Mangler du at høre lidt om stress eller tankemylder, eller går du med en iværksætter i maven? Deltag i Krifas online webinarer
                        </p>
                    </div>
                </li>
                <li>
                    <span><i class="fa-solid fa-circle-check"></i></span>
                    <div>
                        <p class="Bold">Gratis psykologhjælp</p>
                        <p>Føler du dig presset på studiet eller elevpladsen? Få op til 3 samtaler om eksamensangst, stress eller trivsel med vores psykologer.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
        <div class="angled-image">
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <clipPath id="diagonalClip1">
     
        <path d="M100,100 L20,100 Q10,80 10,50 Q10,20 30,0 L100,0 Z" />
      </clipPath>
    </defs>
    <image
      href="../assets/Img/Gratis-akasse-dreng.png"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clip-path="url(#diagonalClip1)"
    />
  </svg>
</div>
</section>
<section class="Goderabatter">
    <div>
        <h2>Få adgang til gode rabatter</h2>
        <p>Tjoose app'en giver dig adgang til over 1200 rabataftaler, med op til 50% rabat på alt det sjove - fra restaurantbesøg, mode og wellness til oplevelser.
        Som medlem af Krifa kan du frit gøre brug af Tjoose når som helst og hvor som helst
        </p>
    </div>
    <img src="../assets/Img/Krifaprocent.png" alt="">
</section>
<section class="medlemskab-sect">
    <h2>Vælg dit medlemskab</h2>
    <div class="medlemskab-tabs">
        <ul>
      <li class="tab"><a href="#">Medlemskab</a></li>
      <li class="tab active"><a href="#">Under uddannelse</a></li>
      <li class="tab"><a href="#">Nyuddannet</a></li>
      <li class="tab"><a href="#">Selvstændig</a></li>
    </ul>
    </div>
    <div class="medlemskab-opt">
        <div class="option-row">
            <label>
                <input type="checkbox" checked/>
                <span class="checkbox-costom"></span>
                <span class="opt-text">
                    <span class="opt-title">fagforening</span>
                    <span class="opt-desc">- alt inklusivt</span>
                </span>
            </label>
            <div class="opt-pris">0 kr./md.</div>
        </div>
        <div class="option-row">
            <label>
                <input type="checkbox" checked />
                <span class="checkbox-custom"></span>
                <span class="opt-text">
                    <span class="opt-title">A-kasse</span>
                    <span class="opt-desc">- alt inklusive</span>
                </span>
            </label>
            <div class="opt-price">0 kr./md.</div>
        </div>
        <div class="option-row">
            <label>
                <input type="checkbox" checked />
                <span class="checkbox-custom"></span>
                <span class="opt-text">
                    <span class="opt-title">Lønsikring</span>
                    <span class="opt-desc">- fra</span>
                </span>
            </label>
            <div class="opt-price">0 kr./md.</div>
        </div>
    </div>
    <button>BLIV MEDLEM</button>
</section>
<section class="intro-contact">
    <div class="intro-container">
        <div class="intro-text">
            <h3>Få en personlig intro til Krifa</h3>
            <p>Har du spørgsmål om medlemskab i Krifa? Send dit navn og telefonnummer, så ringer vi dig op hurtigst muligt.</p>
        </div>
        <form action="#" class="intro-form">
            <div class="form-row">
                <input type="text" name="fornavn" placeholder="Fornavn" required>
                <input type="text" name="efternavn" placeholder="Efternavn" required>
                <input type="tel" name="telefon" placeholder="Telefon" required>
            </div>
            <div class="privacy-link"><a href="#">Her kan du læse mere om, hvordan vi behandler dine personlige oplysninger.</a>
            </div>
            <div class="form-submit">
                <button type="submit">RING MIG OP</button>
            </div>
        </form>
    </div>
</section>
</template>

<style scoped>
.intro-contact{
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
}
.intro-container{
    background-color: #f8d3d8;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
}
.intro-form{
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}
.form-row{
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}
.form-row input{
    flex: 1 1 0;
    min-height: 50px;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid #ccc;
}
.privacy-link a{
    display: inline-block;
    text-decoration: underline;
    color: #460144;
}
.form-submit{
    text-align: left;
}
.form-submit button{
    background-color: #460144;
    border: none;
    color: white;
    border-radius: 50px;
    cursor: pointer;
}
.medlemskab-sect{
    background-color: #e6f2ed;
    padding: 3rem 1rem 1rem;
    position: relative;
    
}
.medlemskab-sect h2{
    margin: 1rem auto;
    text-align: center;
}
.medlemskab-sect button{
    display: block;
    margin: 1.5rem auto;
}
.option-row{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 8px;
    padding: 1rem 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.option-row label{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.option-row input[type="checkbox"]{
    position: absolute;
    opacity: 0;
}
.checkbox-costom{
    width: 20px;
    height: 20px;
    border: 2px solid #6e6e6e;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    margin-right: 0.75rem;
}

.opt-text{
    display: flex;
    flex-direction: column;
}
.opt-title{
 font-weight: 600;
}
.opt-desc{
    font-size: 14px;
}
.medlemskab-tabs ul{
    list-style: none;
    padding: 0;
    margin: 0 auto 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
    border-bottom: 2px solid #c5d8d0;
}

.tab{
    position: relative;
}
.tab a{
    padding-bottom: 0.5rem;
    color: #6e6e6e;
}
.tab.active a{
    color: #460144;
    text-decoration: underline;
}

.medlemskab-opt{
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.Goderabatter{
    background-color: #66055D;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
.Goderabatter p{
    width: 50ch;
}
.listwrap{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
}
.listwrap>div{
    display: flex;
    flex-direction: column;
    width: 50ch;
}
.GratisUnderUdd li{
    display: flex;
    flex-direction: row;
}
.angled-image {
  width: 100%;
  max-width: 600px;
  overflow: hidden; 
}
.GratisUnderUdd span{
    color: #460144;
    font-size: 25px;
    margin-right: 1rem;
}
.GratisUnderUdd{
    background-color: #A6AEC6;
    background-size: cover;
    width: 100%;
    display: flex;
    gap: 5rem;
}
.GratisUnderUdd2{
    background-color: white;
    background-size: cover;
    width: 100%;
    display: flex;
    gap: 5rem;
    justify-content: flex-end;
}
.GratisUnderUdd2 span{
    color: #460144;
    font-size: 25px;
    margin-right: 1rem;
}
.GratisUnderUdd2 li{
    display: flex;
    flex-direction: row;
}
.MedlemsfordeleWrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
}
.Medlemsfordele i{
    font-size: 35px;
}
.Medlemsfordele{
    display: flex;
    justify-content: center;
    margin: 2rem 3rem;
    gap: 4rem;
    text-align: center;
}
.Medlemsfordele>div{
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 1rem;
}
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
    .intro-form{
        align-items: center;
    }
    .intro-container{
        width: 100%;
        padding: 1rem;
    }
    .medlemskab-tabs ul{
            flex-direction: column;
    }
    .Goderabatter{
        flex-direction: column;
    }
    .Goderabatter p,h2{
        width: 100%;
    }
    .GratisUnderUdd{
        width: 100%;
        justify-content: flex-start;
        padding: 1rem;
    }
    .GratisUnderUdd2{
        width: 100%;
        justify-content: flex-start;
        padding: 1rem;
    }
    .listwrap{
        width: 100%;
        align-items: flex-start;
    }
    .listwrap>div{
        width: 100%;
    }
    .listwrap ul{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
   
    .angled-image{
        display: none;
    }
    .Medlemsfordele{
        flex-direction: column;
    }
    .form-row{
        flex-direction: column;
    }
    .form-row input{
        width: 100%;
    }
    .medlemskab-tabs ul{
        gap: 1rem;
    }
    .option-row{
        flex-direction: column;
        align-items: flex-start;
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