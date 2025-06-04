<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <main>
        <section>
            <h1>Mit Krifa</h1>
            <div>
                <label for="username">Brugernavn</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label for="password">Adgangskode</label>
                <input type="password" id="password" name="password" />
            </div>
            <RouterLink to='/MitKrifa'> 
                <button>Log ind</button>
            </RouterLink>
    
            <h2>Eller</h2>
            <div class="loginAlt">
                <RouterLink to='/MitKrifa'> 
                    <button>MitID <img src="../assets/svg/MitID.svg" alt=""></button>
                </RouterLink>
                <RouterLink to='/MitKrifa'> 
                    <button>Bliv medlem</button>
                </RouterLink>
            </div>
        </section>
        <section>
            <div>
                <h3>MitID Support</h3>
                <ul>
                    <li><a href="#">Bestil MitID</a></li>
                    <li><a href="#">Læs om MitID</a></li>
                    <li><a href="#">Bestil nyt MitID</a></li>
                    <li><a href="#">Erstat mistet MitID</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Driftsmeldinger</a></li>
                </ul>
            </div>
            <div>
                <h3>Intet brugernavn?</h3>
                <p><a href="#">Opret Brugernavn</a></p>
                <p>Kræver login med MitID</p>
            </div>
            <div>
                <h3>Glemt din adgangskode?</h3>
                <p><a href="#">Opret ny adgangskode</a></p>
            </div>
        </section>
        <img class="image" src="../assets/Img/login.jpg" alt="">
    </main>
    
</template>

<style scoped>
h1, h2, h3{
    background-color: var(--Krifa-Lilla);
    font-weight: 900;
    font-style: italic;
    color: var(--Hvid);
}

h1{
    font-size: 3rem;
    padding: 1rem 0;
}

h2{
    font-weight: 500;
    font-size: 2rem;
    padding: 1.5rem 0;
}

h3{
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 2rem 0 .5rem 0;
}

a{
    text-decoration: underline;
    color: var(--Hvid);
}

a:hover{
    color: var(--Lilla-Accent);
}

p{
    color: var(--Lys-Blaa);
    font-style: italic;
    font-weight: 400;
}

li{
    padding: .5rem 0;
}

main{
    background-color: var(--Krifa-Lilla);
    padding: 5rem 0;
    margin-bottom: .5rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
    align-items: center;
}

label{
    color: var( --Hvid);
    display: block;
    font-weight: 600;
}

input{
    box-sizing: border-box;
    border-radius: 10px;
    padding: .8rem 1rem;
    width: 24rem;
    border: 2px solid  var( --Hvid);
    margin: .5rem 0 1.5rem 0;
}


button{
    padding: .7rem 5rem;    
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 25px;
    border: 2px solid  var( --Hvid);
    color: var( --Hvid);
    background-color: var(--Krifa-Lilla);
    margin-right: 1rem;
}

.loginAlt a:first-child button {
    padding: .7rem 3rem;   
    border: none;
    background-color: #005EE0;
}

.loginAlt a:last-child button {
    color: var(--Krifa-Lilla);
    padding: .7rem 3rem;   
    border: none;
    background-color: var(--Gul);
}

.image{
    width: 25rem;
    height: 25rem;
    object-fit: cover;
}

</style>