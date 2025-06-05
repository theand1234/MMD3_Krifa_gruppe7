<script setup>

</script>

<template>
<section class="pricing-comparison">
  <div class="container">
    <!-- 1: Priser øverst -->
    <div class="pricing-header">
      <div class="price-column empty-cell"></div>
      <div class="price-column">
        <div class="plan-name">Fagforening</div>
        <div class="plan-price">150 <span class="currency">kr./md.</span></div>
      </div>
      <div class="price-column">
        <div class="plan-name">A-kasse</div>
        <div class="plan-price">538 <span class="currency">kr./md.</span></div>
      </div>
      <div class="price-column">
        <div class="plan-name">A-kasse & Fagforening</div>
        <div class="plan-price">688 <span class="currency">kr./md.</span></div>
      </div>
    </div>

    <!-- 2: Sammenligningstabel -->
    <div class="table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th class="feature-col">Funktion</th>
            <th>Fagforening</th>
            <th>A-kasse</th>
            <th>A-kasse & Fagforening</th>
          </tr>
        </thead>
        <tbody>
          <!-- Hver <tr> er en række i tabellen -->
          <tr>
            <td class="feature"><a href="#">Dagpenge</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Hjælp til jobsøgning</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Hjælp til jobsøgning i din opsigelsesperiode</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for at tegne lønsikring</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for Efterløn</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Rabataftaler</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Webinarer og arrangementer</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Lønrådgivning</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Udbetaling ved strejke og lockout</a></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Tjek af ansættelseskontrakt</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Tjek af lønseddel</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Stress- og trivsels samtale</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Karrieresamtale</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Mulighed for bisidder</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Fuld juridisk dækning helt til Højesteret</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Socialrådgiver</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Kursus- og uddannelses­tilskud</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Autorisation</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
          <tr>
            <td class="feature"><a href="#">Emblemer</a></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
            <td class="cell no"><span><i class="fa-solid fa-xmark"></i></span></td>
            <td class="cell yes"><span><i class="fa-solid fa-check"></i></span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

</template>

<style scoped>

</style>
