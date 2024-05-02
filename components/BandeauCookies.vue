<template>
    <div class="bandeau-cookies" v-if="showBandeau">
        <div class="description-cookies">
            <h4>Utilisation des témoins</h4>
            <p>Nous utilisons des cookies pour vous offrir la meilleure expérience possible sur notre site. En poursuivant votre navigation, vous acceptez l'utilisation de ces témoins. Consultez notre politique de confidentialité pour en savoir plus.</p>
        </div>
        <div class="action-cookies">
            <button class="btn accept" @click="initialize(); setShowBandeau(true)">Accepter</button>
            <button class="btn" @click="setShowBandeau(false);">Refuser</button>
        </div>
      
    </div>
</template>
<script setup lang="ts">  
    const { $session } = useNuxtApp()
    const showBandeau = ref(false)
    const { initialize } = useGtag()

    const setShowBandeau = (choise : boolean) =>{
        $session.setItem('sessionCookie', JSON.stringify(choise))

        showBandeau.value = !showBandeau.value
    }

    onBeforeMount(() => {
        const sessionCookie = $session.getItem('sessionCookie')
        console.log('summary data', sessionCookie)

        if(!sessionCookie){
            showBandeau.value = true
            return
        }

        if(sessionCookie === 'true'){
            initialize()
        }
    });

</script>