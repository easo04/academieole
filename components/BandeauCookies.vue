<template>
    <div class="bandeau-cookies" v-if="showBandeau">
        <div class="description-cookies">
            <h4>Utilisation des témoins</h4>
            <p>Nous utilisons des cookies pour vous offrir la meilleure expérience possible sur notre site. En poursuivant votre navigation, vous acceptez l'utilisation de ces témoins. Consultez notre <a href="/politiques-confidentialites">politique de confidentialité</a> pour en savoir plus.</p>
        </div>
        <div class="action-cookies">
            <button class="btn accept" @click="initialize(); setShowBandeau(true)">Accepter</button>
            <button class="btn" @click="setShowBandeau(false);">Refuser</button>
        </div>
      
    </div>
</template>
<script setup lang="ts">  
    const { $cookies } = useNuxtApp()
    const { initialize } = useGtag()
    const config = useRuntimeConfig()

    const showBandeau = ref(false)

    const setShowBandeau = (choise : boolean) =>{
        $cookies.setCookie('sessionCookie', JSON.stringify(choise), config.public.domainCookie)

        showBandeau.value = !showBandeau.value
    }

    onBeforeMount(() => {
        const sessionCookie = $cookies.getCookie('sessionCookie')

        if(!sessionCookie){
            showBandeau.value = true
            return
        }

        if(sessionCookie === 'true'){
            initialize()
        }
    });

</script>