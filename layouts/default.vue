<template>
    <div class="site">
      <header>
        <section class="team-name">
          <a href="/"><img src="~/assets/images/logo1.png"/></a>
        </section>
        <section class="actions-header desktop">
          <ul>
            <li><a href="/#qui-sommes-nous">Qui sommes nous</a></li>
            <li class="li-services">
              <a href="/#services">Nos services</a>
            </li>
            <li><a href="/#contact">Communiquez avec nous</a></li>
          </ul>
        </section>
        <section class="actions-header mobile">
          <Icon @click="setShowMenuMobile()" name="material-symbols:close" v-if="showMenuMobile"/>
          <Icon @click="setShowMenuMobile()" name="material-symbols:menu" v-if="!showMenuMobile"/>
        </section>
        <div class="content-menu-mobile" v-if="showMenuMobile">
            <ul>
              <li><a href="/#qui-sommes-nous">Qui sommes nous</a></li>
              <li><a href="/#services">Nos services</a></li>
              <li><a href="/#contact">Communiquez avec nous</a></li>
            </ul>
          </div>
      </header>
      <div class="container">
          <section class="menu-top">
              <ul>
              </ul>
          </section> 
          <section class="content">
            <slot />
          </section>
      </div>
      <footer>
       <div> ©2024 <strong>Académie Olé</strong> académie d'espagnol en ligne</div>
      </footer>
      <BandeauCookies/>
    </div>
</template>
<script setup lang="ts">
    const showMenuMobile = ref(false)

    const setShowMenuMobile = () =>{
      showMenuMobile.value = !showMenuMobile.value
    }
</script>