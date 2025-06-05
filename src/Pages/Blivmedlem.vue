<script setup>
import Trustpilot from '../components/Trustpilot.vue'
import TrustpilotMini from '../components/TrustpilotMini.vue'
import { onMounted } from 'vue'

onMounted(() => {
    const accordionItemHeaders = document.querySelectorAll(".accordionItemHeader")
//On click, give each item class "active"
     accordionItemHeaders.forEach((header) => {
        header.addEventListener("click", () => {
        header.classList.toggle("active")

//If class "active" present, expand
    const accordionItemBody = header.nextElementSibling
        if (header.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"
        } 
        else {
        accordionItemBody.style.maxHeight = "0"
      }
    })
  })
})

</script>

<template>
<section class="hero">
  <div class="hero-left">
    <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
  <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
</svg>
    <div class="text-container">
      <h1>Bliv medlem af Krifa</h1>
      <p>Få økonomisk tryghed med dagpenge og hjælp til dine jobrettigheder, når du har brug for det.</p>
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
        href="../assets/Img/blivmedlem.png"
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
            href="../assets/Img/blivmedlem.png"
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
<section class="highlights">
    <h2>Få masser af medlemsfordele – helt gratis</h2>
    <article class="highlight">
        <div>
            <i class="fa-solid fa-phone"></i>
            <h3>Juridisk hotline</h3>
            <p>Vi kender dine rettigheder, når du ikke selv gør. Vi er din livline om opsigelsesvarsel, arbejdsulykke, rod i lønnen, barsel, ansættelseskontrakt eller arbejdsgivers konkurs. Nemt og enkelt.</p>           
        </div>
        <div>
            <i class="fa-solid fa-piggy-bank"></i>
            <h3>Gratis for studerende</h3>
            <p>Vi kan tilbyde dig gratis A-kasse og fagforegning under hele din uddannelse, og hjælp efter. Det giver dig masser af fordele du kan bruge med det samme du bliver medlem. </p>           
        </div>
        <div>
            <i class="fa-solid fa-hand-holding-heart"></i>
            <h3>Hjælp til din trivsel</h3>
            <p>Vi hjælper vi dig med at tackle det, der står i vejen for din trivsel. Det kan være hjælp til at håndtere stress, ubalance mellem arbejde og fritid, ledighed, konflikter eller noget helt andet.</p>           
        </div>
    </article>
</section>
<section>
    <Trustpilot />
</section>
<section class="accordionContainer">
        <div class="accordionHead">
            <h2>Ofte stillede spørgsmål om at blive medlem</h2>
            <p>Her finder du svar på de spørgsmål, vi oftest får om at blive medlem af Krifa og om, hvordan vi kan hjælpe dig.</p>
        </div>
        <div class="accordion">
            <div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Er det nemt at skifte a-kasse og fagforening til jer? <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <div class="accordionItemContent">
                            <h3>Ja, det er!</h3>
                            <p>
                                Uanset hvor du er medlem i dag, sørger vi for, at det hele er nemt og enkelt – både for dig og din økonomi. Du skal bare tage det første skridt, så klarer vi resten for dig.
                            </p>
                            <h3>A-kasse </h3>
                            <p>
                                Vi klarer overflytningen fra din tidligere a-kasse for dig, så du ikke skal røre en finger. Din anciennitet følger også automatisk med. Så kan det ikke blive nemmere. 
                            </p>
                            <p>
                                Hvornår bliver min a-kasse så flyttet over til jer?
                            </p>
                            <ul>
                                <li>Er du i arbejde? Du bliver overflyttet til os med virkning fra d. 1. i måneden efter, vi har modtaget din indmeldelse.  </li>
                                <li>Er du ledig? Din overflytning skal varsles til din nuværende a-kasse med løbende måned plus en måned. Du bliver overflyttet fra den 1. i måneden efter, at varslet er udløbet. </li>
                            </ul>
                            <h3>Fagforening </h3>
                            <p>
                                Uanset hvor du er medlem i dag, sørger vi for, at det hele er nemt og enkelt – både for dig og din økonomi. Du skal bare tage det første skridt, så klarer vi resten for dig.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Kan I hjælpe mig lige så godt som min nuværende fagforening? <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <div class="accordionItemContent">
                            <h3>Ja, vi kan! </h3>
                            <p>
                                Hos os får du den samme juridiske rådgivning og støtte, som du kender fra traditionelle fagforeninger: 
                            </p>
                            <h3>Juridisk Hotline</h3>
                            <li>Du kan altid få hurtig hjælp fra vores jurister, hvis du har spørgsmål eller står i en akut situation, fx ved en opsigelse eller arbejdsskade. </li>
                            <h3>Din ansættelseskontrakt </h3>
                            <li>Vores jurister hjælper dig med at få styr på dine rettigheder allerede fra første arbejdsdag, så du undgår ubehagelige overraskelser. </li>
                            <h3>Din løn</h3>
                            <li>Få den løn, du fortjener! Vi klæder dig på med de bedste argumenter til din lønsamtale, så du står stærkt og sikrer dig den løn, du fortjener. </li>
                            <h3>Overenskomster </h3>
                            <ul>
                                <li>Vi hjælper dig med at forstå, hvad din overenskomst betyder for dig – fx dine rettigheder til løn, arbejdstid og ferie. </li>
                                <li>Vi forhandler overenskomster, der sikrer gode vilkår for dig og dine kolleger på det danske arbejdsmarked. </li>
                                <li>Ved konflikter i forbindelse med overenskomstforhandlinger, sørger vi selvfølgelig for, at du er dækket med konfliktstøtte – også når Krifa ikke selv deltager i forhandlingerne.  </li>
                            </ul>
                            <h3>Din sparringspartner i et arbejdsmarked i forandring </h3>
                            <ul>
                                <li>Hos os får du rådgivning, der er tilpasset netop din situation, så du altid er godtz klædt på til at møde fremtidens udfordringer. </li>
                                <li>Uanset dit fag og din uddannelse støtter vi dig i at navigere i krav om fleksibilitet og omstillingsparathed. </li>
                                <li>Ved konflikter i forbindelse med overenskomstforhandlinger, sørger vi selvfølgelig for, at du er dækket med konfliktstøtte – også når Krifa ikke selv deltager i forhandlingerne.  </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Hvad får jeg som medlem hos jer? <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <div class="accordionItemContent">
                            <p>
                                Som medlem hos Krifa får du ikke bare en stærk faglig sparringspartner – du får også adgang til tilbud, der gør livet lidt lettere, og støtte til at bevare balancen mellem job og privatliv. 
                            </p>
                            <h3>Støtte til hele dig </h3>
                            <li>Hos os handler det om hele dig, fordi vi ved, at livet ikke kun drejer sig om arbejde. Når arbejdslivet gør ondt, får du gratis adgang til psykologer og psykoterapeuter, der hjælper dig med at finde balancen igen.</li>
                            <h3>Fordele, der gør en forskel  </h3>
                            <ul>
                                <li>Rabatter: Spar penge på alt fra ferielejligheder i Skagen til koncerter og hotelophold. </li>
                                <li>Skræddersyede forsikringer: Få adgang til privatforsikringer, der er til at betale. </li>
                                <li>Lønsikring: Supplér din dagpenge med op til 21.000 kr. om måneden, hvis du mister dit job.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<style scoped>

button {
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

.mask-image image, .mask-image-mobile image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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






.accordionContainer {
    width: 100%;
    max-width: 80rem;
    margin: 3rem auto;
    padding: 4rem 3rem;
}

.accordionHead{
    text-align: center;
    padding-bottom: 1rem;
}

.accordion {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.accordionItem{
    width: 50rem;
}

.accordionItemHeader {
    border-bottom: 4px solid var(--Krifa-Lilla);
    padding-left: 1rem;
    font-size: 1.2rem;
    font-weight: 700;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.accordionItemHeader i {
    transition: transform 0.5s ease;
    padding: 1rem;
}

.accordionItemHeader.active i{
    transform: rotate(180deg);
}

.accordionItemBody {
    display: flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-out;
}

.accordionItemContent li {
    list-style: inside;
}

.accordionItemContent li{
    padding: 1rem 1rem .5rem 1rem;
}

.accordionItemContent p{
    padding: .5rem 1rem;
}

.accordionItemContent h3, .highlight h3{
    font-size: 1.2rem;
    padding: 1rem 0 0 1rem;
}


.highlights{
    text-align: center;
    padding: 2rem;
}

.highlight{
    padding: 2rem;
    display: flex;
    gap: 5rem;
    justify-content: center;
}

.highlight div{
    width: 15rem;
}

.highlight i{
    font-size: 3rem;
    padding: 1rem;
}












@media (max-width: 600px) {

    .accordion.open {
        max-height: 3000px; 
    }
    .accordionItem {
        width: 100%;
    }
    .accordionContainer{
        margin: 0;
        width: auto;
    }

    .highlight{
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

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