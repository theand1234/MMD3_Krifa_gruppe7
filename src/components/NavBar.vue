<template>
    <nav class="navbar">
        <router-link to='/'>Hjem</router-link>
        <div class="dropdown"><button class="dropbtn">Medlemsskab <i></i></button>
            <div class="dropdown-content"> <router-link to="/TyperAfMedlemsskaber">Typer af medlemsskaber</router-link>
        <router-link to="MedlemsFordele">Medlemsfordele</router-link>
            </div>
        </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  