<script setup>

</script>
<style scoped>
.DropdownIndhold{
    z-index: 100;
}
.link-style{
    font-weight: 600;
    color: var(--sort);
}
.inactive{
  color: var(--graa) !important;
}
</style>
<template>
    <nav class="navbar">
        <router-link to='/' class="HomeKnap link-style">Hjem</router-link>
        <div class="dropdown"><button class="dropbtn">Medlemsskab <i class="fas fa-arrow-down"></i></button>
            <div class="dropdown-content"> <router-link to="/typer-af-medlemsskaber">Typer af medlemsskaber</router-link>
        <router-link to="/MedlemsFordele">Medlemsfordele</router-link>
        <router-link to="/Medlem-som-studerende">Medlem Som Studerende</router-link>
        <router-link to="/AnbefalEnVen" class="inactive">Anbefal en Ven</router-link> 

            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Din situation <i class="fas fa-arrow-down"></i></button>
            <div class="dropdown-content"> <router-link to="/Loenmodtager" class="inactive">Lønmodtager</router-link>
        <router-link to="/Studerende" class="inactive">Studerende</router-link>
        <router-link to="/Nyudannet" class="inactive">Nyudannet</router-link>
        <router-link to="/Senior" class="inactive">Senior</router-link>
        <router-link to="/Ledig" class="inactive">Ledig</router-link>
        <router-link to="/Selvstaendig" class="inactive">Selvstændig</router-link>
            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Få hjælp til <i class="fas fa-arrow-down"></i></button>
            <div class="DropdownIndhold"> <div><router-link to="/Dagpenge" class="inactive">Dagpenge</router-link>
        <router-link to="/Jobsoegning" class="inactive">Jobsøgning</router-link>
        <router-link to="/Opsigelse" class="inactive">Opsigelse</router-link>
        <router-link to="/Loen" class="inactive">Løn</router-link>
        <router-link to="/Ferie" class="inactive">Ferie</router-link></div>
        <div><router-link to="/MUS-Samtalen" class="inactive">MUS-samtalen</router-link>
        <router-link to="/Anseattelse" class="inactive">Ansættelse</router-link>
        <router-link to="/Stress" class="inactive">Stress</router-link>
        <router-link to="/Barsel" class="inactive">Barsel</router-link>
        <router-link to="/Udvikling" class="inactive">Udvikling</router-link></div>
        <div><router-link to="/Trivsel-på-jobbet" class="inactive">Trivsel på jobbet</router-link>
        <router-link to="/Personlighedstest" class="inactive">Personlighedstest</router-link>
        <router-link to="/Arbejdsvilkaar" class="inactive">Arbejdsvilkår</router-link>
        <router-link to="/SeniorOgEfterloen" class="inactive">Senior og efterløn</router-link></div>
            </div>
        </div>
        <router-link to='/kontakt' class="link-style inactive">Kontakt</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }

  </script>
  