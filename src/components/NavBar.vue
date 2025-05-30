<template>
    <nav class="navbar">
        <router-link to='/'>Hjem</router-link>
        <div class="dropdown"><button class="dropbtn">Medlemsskab <i></i></button>
            <div class="dropdown-content"> <router-link to="/TyperAfMedlemsskaber">Typer af medlemsskaber</router-link>
        <router-link to="/MedlemsFordele">Medlemsfordele</router-link>
        <router-link to="/MedlemSomStuderende">Medlem Som Studerende</router-link>
        <router-link to="/AnbefalEnVen">Anbefal en Ven</router-link> 

            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Din situation <i></i></button>
            <div class="dropdown-content"> <router-link to="/Loenmodtager">Lønmodtager</router-link>
        <router-link to="/Studerende">Studerende</router-link>
        <router-link to="/Nyudannet">Nyudannet</router-link>
        <router-link to="/Senior">Senior</router-link>
        <router-link to="/Ledig">Ledig</router-link>
        <router-link to="/Selvstaendig">Selvstændig</router-link>
            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Få hjælp til<i></i></button>
            <div class="DropdownIndhold"> <div><router-link to="/Dagpenge">Dagpenge</router-link>
        <router-link to="/Jobsoegning">Jobsøgning</router-link>
        <router-link to="/Opsigelse">Opsigelse</router-link>
        <router-link to="/Loen">Løn</router-link>
        <router-link to="/Ferie">Ferie</router-link></div>
        <div><router-link to="/MUS-Samtalen">MUS-samtalen</router-link>
        <router-link to="/Anseattelse">Ansættelse</router-link>
        <router-link to="/Stress">Stress</router-link>
        <router-link to="/Barsel">Barsel</router-link>
        <router-link to="/Udvikling">Udvikling</router-link></div>
        <div><router-link to="/PsykiskArbejdsmiljoe">Psykisk arbejdsmiljø</router-link>
        <router-link to="/Personlighedstest">Personlighedstest</router-link>
        <router-link to="/Arbejdsvilkaar">Arbejdsvilkår</router-link>
        <router-link to="/SeniorOgEfterloen">Senior og efterløn</router-link></div>
            </div>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  