<template>
  <div class="site ole-site">
    <a class="ole-skip-link" href="#main-content">Aller au contenu</a>
    <header class="ole-header">
      <div class="ole-header__inner">
        <NuxtLink class="ole-brand" to="/" aria-label="Académie Olé — Accueil">
          <img src="~/assets/images/logo1.png" alt="Académie Olé" width="170" height="70" />
        </NuxtLink>
        <nav class="ole-nav" :class="{ 'ole-nav--open': menuOpen }" aria-label="Navigation principale">
          <NuxtLink to="/" @click="closeMenu">Accueil</NuxtLink>
          <NuxtLink to="/cours/prives" @click="closeMenu">Cours privés</NuxtLink>
          <NuxtLink to="/cours/semi-prives" @click="closeMenu">Cours en groupe</NuxtLink>
          <NuxtLink to="/cours/parascolaires" @click="closeMenu">Parascolaire</NuxtLink>
          <NuxtLink to="/#qui-sommes-nous" @click="closeMenu">À propos</NuxtLink>
          <NuxtLink to="/#contact" class="ole-nav__cta" @click="closeMenu">Nous contacter</NuxtLink>
        </nav>
        <button class="ole-menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="ole-primary-nav" :aria-label="menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'" @click="menuOpen = !menuOpen">
          <span aria-hidden="true">{{ menuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>
    </header>
    <main id="main-content" class="ole-main"><slot /></main>
    <footer class="ole-footer">
      <div class="ole-footer__inner">
        <div>
          <strong>Académie Olé</strong>
          <p>L’espagnol s’apprend. La culture se vit !</p>
          <small>© {{ year }} Académie Olé. Tous droits réservés.</small>
        </div>
        <nav aria-label="Liens du pied de page">
          <NuxtLink to="/cours/prives">Cours privés</NuxtLink>
          <NuxtLink to="/cours/semi-prives">Cours en groupe</NuxtLink>
          <NuxtLink to="/cours/parascolaires">Parascolaire</NuxtLink>
          <NuxtLink to="/politiques-confidentialites">Confidentialité</NuxtLink>
          <button type="button" @click="resetCookies">Préférences de témoins</button>
        </nav>
      </div>
    </footer>
    <BandeauCookies />
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const year = new Date().getFullYear()
const { $cookies } = useNuxtApp()
const config = useRuntimeConfig()
const closeMenu = () => { menuOpen.value = false }
const resetCookies = () => {
  if (!import.meta.client) return
  $cookies.deleteCookie('sessionCookie', config.public.domainCookie)
  window.location.reload()
}
</script>
