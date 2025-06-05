<script setup>

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
                <h2>Krifa Boks</h2>
            </div>
            <div>
                <p>Se dine dokumenter og breve</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </a>
        <a href="#" class="FEP">
            <div>
                <i class="fa-solid fa-id-card"></i>
                <h2>Meld dig ledig</h2>
            </div>
            <div>
                <p>Følg vores tre-trins guide.</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </a>
        <a href="#" class="FEP">
            <div>
                <i class="fa-solid fa-calendar"></i>
                <h2>Book samtale</h2>   
            </div>
            <div>
                <p>Se vores udvalg af samtaler, der kan hjælpe dig i dit arbejdsliv</p>
                <i class="fa-solid fa-arrow-right"></i>
            </div>           
        </a>
    </section>
    <section class="accordion-container">
        <h2>Selvbetjening</h2>
        <p>Udfyld blanketter, book samtaler og kurser, betalt kontigent, meld dig ledig mv.</p>
        <div class="accordion-container">
           
                
        </div>
    </section>
</template>

<style scoped>

/* --------------------------------------------------------------------------------------------------------- */
/* dropdown menu */
/* --------------------------------------------------------------------------------------------------------- */


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

h2{
    font-size: 2rem;
    font-style: normal;
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


@media (max-width: 600px) {
  
}
</style>