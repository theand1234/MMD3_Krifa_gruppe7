<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(window.innerWidth < 1000)
const bigAccordionOpen = ref(false)

const onResize = () => {
//check if window size is above 1000px. if yes, keep bigAccordion open
  isMobile.value = window.innerWidth < 1000
  if (!isMobile.value) bigAccordionOpen.value = true
}

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

onMounted(() => {
    onResize()
    window.addEventListener('resize', onResize)

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
        <svg class="shape-left" xmlns="http://www.w3.org/2000/svg" width="387" height="270" viewBox="0 0 387 270" fill="none">
            <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="#9946C1"/>
            <path d="M140.959 242.882L-0.432617 269.369L-0.432618 148.369L119.296 126.265C178.499 115.316 227.977 74.6961 250.503 18.5936L257.567 0.869266L386.067 0.869269L361.264 62.4467C342.796 108.449 312.797 149.383 274.491 180.81C236.031 212.368 189.859 233.83 140.959 242.882Z" fill="black" fill-opacity="0.2"/>
        </svg>  
        <div>
            <h1>Velkommen, Fornavn Mellemnavn Efternavn</h1>
        </div>
    </section>    
    <section class="FEPs">
        <a href="#" class="FEP">
            <div>
                <i class="fa-solid fa-inbox"></i>
                <h3>Krifa Boks</h3>
            </div>
            <div>
                <p>Se dine dokumenter og breve</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </a>
        <a href="#" class="FEP">
            <div>
                <i class="fa-solid fa-id-card"></i>
                <h3>Meld dig ledig</h3>
            </div>
            <div>
                <p>Følg vores tre-trins guide.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </a>
        <a href="#" class="FEP">
            <div>
                <i class="fa-solid fa-calendar"></i>
                <h3>Book samtale</h3>   
            </div>
            <div>
                <p>Se vores udvalg af samtaler, der kan hjælpe dig i dit arbejdsliv</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>           
        </a>
    </section>
    <section class="accordionContainer">
        <div class="accordionHead">
            <h2>Selvbetjening</h2>
            <p>Udfyld blanketter, book samtaler og kurser, betalt kontingent, meld dig ledig mv.</p>
        </div>
        <div v-if="isMobile" class="bigAccordionToggle" @click="bigAccordionOpen = !bigAccordionOpen">
            <div class="bigAccordionHeader">
                <div class="accordionHeadMobile">
                    <h2>Selvbetjening</h2>
                    <p>Udfyld blanketter, book samtaler og kurser, betalt kontingent, meld dig ledig mv.</p>
                </div>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
        <!--Add class "open" if bigAccordionOpen is true or not on Mobile  -->
        <div class="accordion" :class="{ open: bigAccordionOpen || !isMobile }">
            <div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Ledig <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Meld dig ledig</a>
                        <a class="accordionItemContent" href="#">Joblog</a>
                        <a class="accordionItemContent" href="#">Sidste dag som ledig</a>
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Lønsikring <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Er du opsagt?</a>
                        <a class="accordionItemContent" href="#">Lønsikringsberegner</a>
                        <a class="accordionItemContent" href="#">Spørgsmål og svar</a>
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Feriedagpenge <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Søg om feriedagpenge</a>
                    </div>
                </div>
            </div>
            <div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Blanketter <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Find blanketter</a>
                        <a class="accordionItemContent" href="#">Indsendte blanketter</a>
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Samtaler og Jobsøgning <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Book samtale</a>
                        <a class="accordionItemContent" href="#">Job- og KarrierePortal</a>
                    </div>
                </div>
                <div class="accordionItem">
                    <div class="accordionItemHeader">
                        Medlemskab <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div class="accordionItemBody">
                        <a class="accordionItemContent" href="#">Kontingent</a>
                        <a class="accordionItemContent" href="#">Deltids- eller fuldstidsmedlem</a>
                        <a class="accordionItemContent" href="#">Meld din ven ind</a>
                        <a class="accordionItemContent" href="#">Meld dig ud</a>
                    </div>
                </div>
            </div>
        </div>
  </section>
    <section class="accordionContainer">
        <div class="accordionHead">
            <h2>Mine oplysninger</h2>
            <p>Ret dine oplysninger og se dine køb</p>
        </div>
        <div v-if="isMobile" class="bigAccordionToggle" @click="bigAccordionOpen = !bigAccordionOpen">
            <div class="bigAccordionHeader">
                <div class="accordionHeadMobile">
                    <h2>Selvbetjening</h2>
                    <p>Udfyld blanketter, book samtaler og kurser, betalt kontingent, meld dig ledig mv.</p>
                </div>
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </div>
        <!--Add class "open" if bigAccordionOpen is true or not on Mobile  -->
        <div class="accordion" :class="{ open: bigAccordionOpen || !isMobile }">
            
        </div>
  </section>
</template>

<style scoped>
/* --------------------------------------------------------------------------------------------------------- */
/* dropdown menu */
/* --------------------------------------------------------------------------------------------------------- */
.accordionContainer {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 4rem 3rem;
    box-shadow: 0px 5px 14px 0px #0000003d;
}

.accordionHead{
    display: flex;
    align-items: center;
    gap: 2rem;
}

.accordionHead p {
    font-weight: 300;
}

.accordion {
    display: flex;
    justify-content: space-around;
    gap: 2rem;
    flex-wrap: wrap;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.accordionItem {
    width: 35rem;
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

.accordionItemContent {
    padding: 1rem;
    text-decoration: underline;
    font-weight: 600;
}

.bigAccordionToggle {
    display: none;
    margin-bottom: 1rem;
}

.bigAccordionHeader {
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}



@media (max-width: 1000px) {
    .accordionHead{
        display: none;
    }

    .bigAccordionToggle {
        display: block;
    }

    .accordion {
        max-height: 0;
        flex-direction: column;
    }

    .accordion.open {
        max-height: 3000px; 
    }

    .accordionItem {
        width: 100%;
  }
}
/* --------------------------------------------------------------------------------------------------------- */
/* Hero */
/* --------------------------------------------------------------------------------------------------------- */

.shape-left{
    transform: scale(-1,1);
    position: absolute;
}
.hero{
    position: relative;
    background-color: var(--Krifa-Lilla);
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 20rem;
}
h1{
    font-weight: 900;
    font-size: 4rem;
    font-style: italic;
    color: var(--Hvid);
    margin: 2rem 25rem 2rem 8rem;
}

/* --------------------------------------------------------------------------------------------------------- */
/* FEP */
/* --------------------------------------------------------------------------------------------------------- */

h3{
    font-size: 2rem;
    font-style: normal;
    font-weight: 900;
}
.FEPs{
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 2rem;
}
.FEP{
    background-color: var(--Krifa-Lilla);
    width: 30rem;
    padding: 2rem;
    color: var(--Hvid);
    
}
.FEP div{
    display: flex;
    align-items: center;
    justify-content: center;
}
.FEP div:nth-of-type(2){
    justify-content: space-between;
    padding: 0 2rem;
}
.FEP p{
    padding: 0 2rem;
}
i{
    font-size: 1.5rem;
    padding: 1rem 1rem 1rem 0;
}

/* --------------------------------------------------------------------------------------------------------- */
/* Media Queries */
/* --------------------------------------------------------------------------------------------------------- */


@media (max-width: 600px) {
  
}
</style>