<script setup>
import { RouterLink } from 'vue-router';
import NavBar from '../components/NavBar.vue'
import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  // -----------------------------------------------------
  // 1) Definér hele vores menustruktur som et array af objekter.
  //    Hvis der er children, ryger brugeren videre til et "under-niveau".
  // -----------------------------------------------------
  const menuItems = [
    { label: 'Hjem', to: '/' },
    {
      label: 'Medlemsskab',
      children: [
        { label: 'Typer af medlemskab', to: '/typer-af-medlemsskab' },
        { label: 'Medlemsfordele', to: '/medlemsfordele' },
        { label: 'Medlem som studerende', to: '/studerende' },
        { label: 'Anbefal en ven', to: '/anbefal-en-ven' },
      ],
    },
    {
      label: 'Din situation',
      children: [
        { label: 'Lønmodtager', to: '/din-situation/loenmodtager' },
        { label: 'Studerende', to: '/din-situation/studerende' },
        { label: 'Nyuddannet', to: '/din-situation/nyuddannet' },
        { label: 'Senior', to: '/din-situation/senior' },
        { label: 'Ledig', to: '/din-situation/ledig' },
        { label: 'Selvstændig', to: '/din-situation/selvstaendig' },
      ],
    },
    {
      label: 'Få hjælp til',
      children: [
        { label: 'Dagpenge', to: '/fa-hjaelp-til/dagpenge' },
        { label: 'Jobsøgning', to: '/fa-hjaelp-til/jobsogning' },
        { label: 'Opsigelse', to: '/fa-hjaelp-til/opsigelse' },
        { label: 'Løn', to: '/fa-hjaelp-til/loen' },
        { label: 'Ferie', to: '/fa-hjaelp-til/ferie' },
        { label: 'MUS-samtalen', to: '/fa-hjaelp-til/mus-samtalen' },
        { label: 'Ansættelse', to: '/fa-hjaelp-til/ansaettelse' },
        { label: 'Stress', to: '/fa-hjaelp-til/stress' },
        { label: 'Barsel', to: '/fa-hjaelp-til/barsel' },
        { label: 'Udvikling', to: '/fa-hjaelp-til/udvikling' },
        { label: 'Psykisk arbejdsmiljø', to: '/fa-hjaelp-til/psykisk-arbejdsmiljoe' },
        { label: 'Personlighedstest', to: '/fa-hjaelp-til/personlighedstest' },
        { label: 'Arbejdsvilkår', to: '/fa-hjaelp-til/arbejdsvilkaar' },
        { label: 'Senior og efterløn', to: '/fa-hjaelp-til/senior-og-efterloen' },
      ],
    },
    { label: 'Kontakt', to: '/kontakt' },
    { label: 'Mit Krifa', to: '/mit-krifa' },
    { label: 'Søg', to: '/soeg' },
  ]
  
  // -----------------------------------------------------
  // 2) Reactive state til at styre mobil-menuen
  //    - isOpen: lukket eller åben
  //    - currentItems: hvilke items vi viser i øjeblikket (topniveau eller underside)
  //    - currentTitle: teksten, der vises som overskrift, når vi er i en underside
  //    - historyStack: en stak, vi putter ’gamle niveauer’ på, så vi kan gå tilbage
  // -----------------------------------------------------
  const isOpen = ref(false)
  const historyStack = ref([])
  const currentItems = ref(menuItems)
  const currentTitle = ref('')
  
  // Vue Router bruges, hvis du vil navigere programmatisk (ikke strengt nødvendigt her)
  // men vi demonstrerer importen, hvis du vil f.eks. closeMobileMenu() vha. router.push(...)
  const router = useRouter()
  
  // -----------------------------------------------------
  // Funktion: Åbn/luk mobil-menuen
  // -----------------------------------------------------
  function toggleMobileMenu() {
    // Hvis menuen lukker, nullstiller vi stak og går til topniveau
    if (isOpen.value) {
      closeMobileMenu()
    } else {
      isOpen.value = true
      currentItems.value = menuItems
      currentTitle.value = ''
      historyStack.value = []
    }
  }
  
  // -----------------------------------------------------
  // Funktion: Luk mobil-menuen helt og nulstil stacks
  // -----------------------------------------------------
  function closeMobileMenu() {
    isOpen.value = false
    currentItems.value = menuItems
    currentTitle.value = ''
    historyStack.value = []
  }
  
  // -----------------------------------------------------
  // Funktion: Når man trykker på et punkt, der HAR children,
  //            vil vi gemme det nuværende niveau på stakken,
  //            opdatere currentItems til underpunkterne, 
  //            og sætte currentTitle til den netop valgte items label.
  // -----------------------------------------------------
  function goToSubmenu(item) {
    // Gem det nuværende på historik-stakken
    historyStack.value.push({
      title: currentTitle.value,
      items: currentItems.value,
    })
  
    // Skift til de nye children
    currentItems.value = item.children
    currentTitle.value = item.label
  }
  
  // -----------------------------------------------------
  // Funktion: Gå tilbage til forrige niveau i historyStack
  // -----------------------------------------------------
  function goBack() {
    const previous = historyStack.value.pop()
    if (previous) {
      currentItems.value = previous.items
      currentTitle.value = previous.title
    }
  
    // Hvis stakken nu er tom, var vi tilbage på topniveau:
    if (historyStack.value.length === 0) {
      currentTitle.value = ''
    }
  }
</script>

<template>
       <!-- Selve navbar'en i toppen (vises altid, både desktop og mobil) -->
       <nav class="navbar-mobile">
      <div class="nav-container">
        <!-- Logo -->
        <header><div class="HeaderLeft"><RouterLink to="/"><img src="../assets/Img/image 31.png" alt=""></RouterLink><NavBar/></div><div class="HeaderRight"><div><i class="fa-solid fa-magnifying-glass"></i><p>Søg</p></div>
<div><i class="fa-solid fa-lock"></i><p>Mit Krifa</p></div><button>BLIV MEDLEM</button></div>
</header>
        
  
        <!-- Burger-ikonet (kun mobil) -->
        <button 
          class="burger mobile-only" 
          @click="toggleMobileMenu" 
          aria-label="Åbn mobilmenu"
        >
          <span :class="{ bar: true, open: isOpen }"></span>
          <span :class="{ bar: true, open: isOpen }"></span>
          <span :class="{ bar: true, open: isOpen }"></span>
        </button>
        <div class="HeaderRight-mobile">
<div><i class="fa-solid fa-lock"></i><p>Mit Krifa</p></div><button>BLIV MEDLEM</button></div>
      </div>
    </nav>
  
    <!-- Det fuldskærms-overlay, der åbnes på mobil, når isOpen=true -->
    <div v-if="isOpen" class="mobile-menu-overlay">
      <!-- Header i mobilmenu: luk-ikon eller tilbage-ikon + evt. titel -->
      <header class="mobile-menu-header">
        <!-- Hvis vi er dybt i en underside (stack ikke tom), vis en 'tilbage'-pil -->
        <button 
          v-if="historyStack.length > 0" 
          class="back-btn" 
          @click="goBack"
          aria-label="Tilbage"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
  
        <!-- Ellers vis et ’X’-luk-ikon -->
        <button 
          v-else 
          class="close-btn" 
          @click="toggleMobileMenu"
          aria-label="Luk mobilmenu"
        >
          <i class="fas fa-times"></i>
        </button>
  
        <!-- Hvis vi er i en underside, vis dens titel -->
        <h2 v-if="currentTitle" class="mobile-menu-title">{{ currentTitle }}</h2>
      </header>
  
      <!-- Selve menuen: enten topniveau eller underside alt efter historyStack -->
      <ul class="mobile-menu-list">
        <li 
          v-for="(item, index) in currentItems" 
          :key="index"
          class="mobile-menu-item"
        >
          <!-- Hvis item har children → tryk giver ny ’underside’ -->
          <button
            v-if="item.children" 
            class="mobile-menu-link has-children"
            @click="goToSubmenu(item)"
          >
            {{ item.label }}
            <i class="fas fa-chevron-right"></i>
          </button>
  
          <!-- Hvis item IKKE har children → almindeligt router-link, og luk menuen -->
          <router-link
            v-else 
            :to="item.to" 
            class="mobile-menu-link"
            @click.native="closeMobileMenu"
          >
            {{ item.label }}
          </router-link>
        </li>
      </ul>
  
      <!-- ’Bliv medlem’-knap (kun når vi er på topniveau = historyStack tom) -->
      <div v-if="historyStack.length === 0" class="mobile-menu-footer">
        <router-link to="/bliv-medlem" class="cta-btn">
          BLIV MEDLEM
        </router-link>
      </div>
    </div>

</template>



<style scoped>
 /* ===========================================
     1) Generelle reset/grundlæggende styling
     =========================================== */
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  /* ===========================================
     2) NAVBAR i toppen (synlig både desktop & mobil)
     =========================================== */
  .navbar.mobile {
    width: 100%;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1000;
  }
  
  .nav-container {
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  
  /* Logo */
  .nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #7f0055; /* Krifa-lilla */
  }
  
  /* Søg-ikon (kun desktop) */
  .nav-icon {
    font-size: 1.2rem;
    color: #333;
  }
  
  /* ===========================================
     3) BURGER-IKON (kun mobil) 
     =========================================== */
  .burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
  }
  
  .bar {
    width: 100%;
    height: 3px;
    background-color: #333;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  /* Når isOpen = true, animer burger til kryds */
  .bar.open:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .bar.open:nth-child(2) {
    opacity: 0;
  }
  .bar.open:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
  
  /* ===========================================
     4) MOBIL-MENU OVERLAY (skjult indtil isOpen)
     =========================================== */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 2000;
    display: flex;
    flex-direction: column;
  }
  
  /* Header i mobilmenu (tilbage-knap / luk-knap + evt. titel) */
  .mobile-menu-header {
    height: 60px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: relative;
  }
  
  /* Tilbage-knappen (vises kun når historyStack ikke tom) */
  .back-btn,
  .close-btn {
    font-size: 1.2rem;
    color: #333;
  }
  
  /* Sidetitel (f.eks. “Medlemsskab”) vises midtstillet, hvis vi er i et undersideniveau */
  .mobile-menu-title {
    flex: 1;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
  }
  
  /* ===========================================
     5) SELVE MENU-LISTEN (topniveau eller underside)
     =========================================== */
  .mobile-menu-list {
    flex: 1;
    overflow-y: auto;
  }
  
  .mobile-menu-item {
    border-bottom: 1px solid #7f0055; /* lilla linje imellem */
  }
  
  .mobile-menu-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: #333;
  }
  
  /* Hvis punktet har children, viser vi en pil mod højre */
  .has-children i {
    font-size: 0.8rem;
    color: #333;
  }
  
  /* ===========================================
     6) ’Bliv medlem’ knap i bunden (kun topniveau)
     =========================================== */
  .mobile-menu-footer {
    padding: 1rem;
    border-top: 1px solid #ddd;
  }
  
  .cta-btn {
    display: block;
    text-align: center;
    background-color: #ffda00; /* gul knap */
    color: #333;
    padding: 0.75rem;
    border-radius: 4px;
    font-weight: bold;
  }
  
  /* ===========================================
     7) MÉDIA QUERIES 
     - Desktop (≥ 768px): burger IKKE synlig, search-ikon synlig  
     - Mobil (< 768px): burger synlig, desktop-menu skjult
     =========================================== */
  @media screen and (max-width: 767px) {
    .desktop-only {
      display: none;
    }
    .mobile-only {
      display: flex;
    }
    header{
        display: none !important; 
    }
  }
  
  @media screen and (min-width: 768px) {
    .desktop-only {
      display: flex;
    }
    .mobile-only {
      display: none;
    }
    /* Hele mobil-overlayet er skjult på desktop */
    .mobile-menu-overlay {
      display: none !important;
    }
    .HeaderRight-mobile{
        display: none !important;
    }
  }
header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}
.HeaderLeft{
    display: flex;
    flex-direction: row;
    align-content: center;
}
.HeaderRight{
    display: flex;
    align-items: center;
    gap: 32px;
    margin-right: 32px;
    width: 30%;
}
.HeaderRight button{
    background-color: #f1e13d;
    border: none;
    border-radius: 25px;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}
.HeaderRight div{
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 4px;
}
img{
    margin: 0.5rem;
}
.HeaderRight-mobile{
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 32px;
    
}
.HeaderRight-mobile button{
    background-color: #f1e13d;
    border: none;
    border-radius: 25px;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: 700;
}
.HeaderRight-mobile div{
    display: flex;
    align-items: center;
    font-weight: 600;
    gap: 4px;
}
</style>