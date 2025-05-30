<template>
    <nav class="navbar">
        <router-link to='/'>Hjem</router-link>
        <div class="dropdown"><button class="dropbtn">Medlemsskab <i></i></button>
            <div class="dropdown-content"> <router-link to="/TyperAfMedlemsskaber">Typer af medlemsskaber</router-link>
        <router-link to="MedlemsFordele">Medlemsfordele</router-link>
        <router-link to="MedlemsFordele">Medlem Som Studerende</router-link>
        <router-link to="MedlemsFordele">Anbefal en Ven</router-link> 

            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Din situation <i></i></button>
            <div class="dropdown-content"> <router-link to="/TyperAfMedlemsskaber">Lønmodtager</router-link>
        <router-link to="MedlemsFordele">Studerende</router-link>
        <router-link to="MedlemsFordele">Nyuddannet</router-link>
        <router-link to="MedlemsFordele">Senior</router-link>
        <router-link to="MedlemsFordele">Ledig</router-link>
        <router-link to="MedlemsFordele">Selvstændig</router-link>
            </div>
        </div>
        <div class="dropdown"><button class="dropbtn">Få hjælp til<i></i></button>
            <div class="dropdown-content"> <div><router-link to="/TyperAfMedlemsskaber">Dagpenge</router-link>
        <router-link to="MedlemsFordele">Jobsøgning</router-link>
        <router-link to="MedlemsFordele">Opsigelse</router-link>
        <router-link to="MedlemsFordele">Løn</router-link>
        <router-link to="MedlemsFordele">Ferie</router-link></div>
        <div><router-link to="MedlemsFordele">MUS-samtalen</router-link>
        <router-link to="MedlemsFordele">Ansættelse</router-link>
        <router-link to="MedlemsFordele">Stress</router-link>
        <router-link to="MedlemsFordele">Barsel</router-link>
        <router-link to="MedlemsFordele">Udvikling</router-link></div>
        <div><router-link to="MedlemsFordele">MUS-Psykisk arbejdsmiljø</router-link>
        <router-link to="MedlemsFordele">Personlighedstest</router-link>
        <router-link to="MedlemsFordele">Aarbejdsvilkår</router-link>
        <router-link to="MedlemsFordele">Senior og efterløn</router-link></div>
            </div>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  