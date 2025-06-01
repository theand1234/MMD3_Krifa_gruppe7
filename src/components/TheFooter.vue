<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
     <footer>
        <section class="Kontakt">
            <h4>Kontakt os</h4>
            <div>
        <p class="Bold"><i class="fa-solid fa-envelope"></i>Skriv til os</p>
        <p>Har du et spørgsmål, eller rskal du sende noget til os?</p>
        <p><a href="">Brug dokument- og kontaktformularen</a></p>
        </div>
        <div>
            <p class="Bold"><i class="fa-solid fa-phone"></i>Ring på 7227 7227</p>
            <p>Vores telefoner er åbne mandag-torsdag fra kl. 8:00 til 17:00 og fredag fra kl. 8:00 til 15:00</p>
            <p><a href="">Se hvordan du kan kontakte os</a></p>
        </div>

        <div>
            <p class="Bold"><i class="fa-solid fa-location-dot"></i>Find din lokale krifa</p>
            <p>Vælg din afdeling og se åbningstider</p>
            <p><a href="">Find din lokalle Krifa</a></p>
        </div>
    </section>
    <section class="Information">
        <h4>Information</h4>
        <div><p><a href="">Om Krifa</a></p>
        <p><a href="">Om Mit Krifa </a></p>
        <p><a href="">Presse</a></p>
        <p><a href="">Karriere</a></p><p><a href="">Persondata- og cookiepolitik</a></p>
        <p><a href="">Tilgængelighed</a></p><p><a href="">A-kasse</a></p>
        <p><a href="">Fagforening</a></p><p><a href="">Dagpengesats</a></p>
        <p><a href="">Lønsikring</a></p>
        </div>
    </section>
    <section>
        <h5>Spred god arbejdslyst på #godarbejdslyst og følg os på:</h5>
     <div class="Socials"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-tiktok"></i><i class="fa-brands fa-instagram"></i></div>
    </section>
     </footer>
</template>
<style scoped>
.Socials{
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
}
.Socials i{
    font-size: 35px;
    color: white;
}
i{
    margin-right: 4px;
}
footer{
    display: flex;
    gap: 6rem;
    align-items: center;
    width: 100%;
    padding: 45px 4rem;
    justify-content: space-between;
    background-color: var(--Krifa-Lilla);

}
h4{
    font-size: var(--heading-Desktop);
}
h5{
    font-size: var(--Subheading-Desktop);
}
footer>section {
    
    width: auto;
}
footer a{
    font-weight: bold;
    text-decoration: underline;
}
footer p,h4,a,h5{
    color: var(--Hvid);
}
div{
    margin-top: 10px;
}
.Information p{
    margin-top: 2px;
}

</style>