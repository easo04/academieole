<template>
    <div class="politiques">
        <h2>Politique de confidentialité</h2>
        <div class="sections">
            <p>Cette politique s'applique au site : Académie Olé</p>
            <p>Date de dernière mise à jour : 2024-05-02</p>
        </div>
        <div class="sections">
            <p>
                Le respect de votre vie privée est de la plus haute importance pour Académie Olé qui est le responsable de ce site.
            </p>
            <p>
                La présente politique de confidentialité a pour but de vous exposer:
            </p>
            <ul>
                <li>La manière dont sont collectés et traités vos renseignements personnels. Doivent être considérés comme renseignements personnels tous les renseignements susceptibles de vous identifier. Il s'agit notamment de votre prénom et nom, de votre âge, de votre adresse postale, de votre adresse courriel de votre localisation ou encore de votre adresse IP</li>
                <li>Quels sont vos droits concernant ces renseignements</li>
                <li>Qui est responsable du traitement des renseignements personnels collectés et traités</li>
                <li>À qui ces renseignements sont transmis</li>
                <li>La politique du site en matière de témoins de navigation("cookies")</li>
            </ul>
        </div>
        <div class="section">
           <h3>Collecte de renseignements personnels</h3>
           <p>Nous ne collectons pas vos renseignements personnels.</p>
        </div>
        <div class="section">
           <h3>Partage des renseignements personnels</h3>
           <p>Les renseignements personnels collectés par le site ne sont transmis à aucun tiers et ne sont traités que par nous.</p>
        </div>
        <div class="liste-cookies section">
            <h3>Témoins de navigation</h3>
            <div class="section">
                <h4>Qu’est-ce qu’un témoin de navigation et à quoi sert-il?</h4>
                <p>
                    Un témoin est un petit fichier de texte codé qui s’enregistre automatiquement sur votre navigateur Web lorsque vous parcourez un site. Un témoin est communément appelé « cookie » en anglais.<br><br>
                    Les témoins peuvent servir à plusieurs fins. Par exemple, ils peuvent permettre d’enregistrer vos préférences de langue, votre localisation ou nous permettre d’optimiser nos sites Web selon votre utilisation et votre profil, et ainsi vous suggérer du contenu personnalisé. <br><br>
                    Certains témoins sont essentiels au bon fonctionnement de nos sites Web. Par exemple, un témoin d’authentification indique si vous êtes connecté et avec quel compte, ce qui permet de définir vos accès sur nos sites Web.
                </p>
            </div>
            <div class="section">
                <h4>Comment utilisons-nous les témoins de navigation?</h4>
                <p>
                    Nous utilisons des cookies pour vous aider à naviguer efficacement et à exécuter certaines fonctions. Vous trouverez ci-dessous des informations détaillées sur tous les cookies sous chaque catégorie de consentement.<br><br>
    
                    Les cookies classés comme « Nécessaires » sont stockés sur votre navigateur car ils sont essentiels pour activer les fonctionnalités de base du site.<br><br>
    
                    Nous utilisons également des cookies tiers qui nous aident à analyser la façon dont vous utilisez ce site Web. Aussi, ils nous aident à traiter des statistiques et des informations sur le trafic, de faciliter la navigation et d'améliorer le service pour votre confort. Ces cookies ne seront stockés dans votre navigateur qu'avec votre consentement préalable.<br><br>
    
                    Vous pouvez choisir d'activer ou de désactiver tout ou partie de ces cookies, mais la désactivation de certains d'entre eux peut affecter votre expérience de navigation.<br>
                </p>
                <div class="service-cookie" @click="setShowListServiceNecessaire()">
                    <h4><Icon name="ep:caret-right" v-if="!showListServiceNecessaire"/><Icon name="ep:caret-bottom" v-if="showListServiceNecessaire"/>Nécessaires</h4>
                    <p>Les cookies nécessaires sont requis pour activer les fonctionnalités de base de ce site, telles que la fourniture d'une connexion sécurisée ou l'ajustement de vos préférences de consentement. Ces cookies ne stockent aucune donnée personnelle identifiable.</p>
                </div>
                <div class="list-services" v-if="showListServiceNecessaire">
                    Aucun témoin à afficher
                </div>
                <div class="service-cookie" @click="setShowListServiceFonction()">
                    <h4><Icon name="ep:caret-right" v-if="!showListServiceFonction"/><Icon name="ep:caret-bottom" v-if="showListServiceFonction"/> Fonctionnalités</h4>
                    <p>Les cookies fonctionnels aident à exécuter certaines fonctionnalités telles que le partage du contenu du site Web sur les plateformes de réseaux sociaux, la collecte de commentaires et d'autres fonctionnalités tierces.</p>
                </div>
                <div class="list-services" v-if="showListServiceFonction">
                    Aucun témoin à afficher
                </div>
                <div class="service-cookie" @click="setShowListServiceAnalytic()">
                    <h4><Icon name="ep:caret-right" v-if="!showListServiceAnalytic"/><Icon name="ep:caret-bottom" v-if="showListServiceAnalytic"/> Analytics</h4>
                    <p>Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec le site Web. Ces cookies aident à fournir des informations sur des mesures telles que le nombre de visiteurs, le taux de rebond, la source du trafic, etc.</p>
                </div>
                <div class="list-services" v-if="showListServiceAnalytic">
                    <div class="service-name">
                        <p><strong>Nom: </strong> _ga</p>
                        <p><strong>Description: </strong>Google Analytics définit ce cookie pour calculer les données des visiteurs, des sessions et des campagnes et suivre l'utilisation du site pour le rapport d'analyse du site. Le cookie stocke les informations de manière anonyme et attribue un numéro généré aléatoirement pour reconnaître les visiteurs uniques.</p>
                    </div>
                    <div class="service-name">
                        <p><strong>Nom: </strong> _ga_*</p>
                        <p><strong>Description: </strong>Google Analytics définit ce cookie pour stocker et compter les pages vues.</p>
                    </div>
                </div>
                <div class="service-cookie" @click="setShowListServicePerfo()">
                    <h4><Icon name="ep:caret-right" v-if="!showListServicePerfo"/><Icon name="ep:caret-bottom" v-if="showListServicePerfo"/> Performance</h4>
                    <p>Les cookies de performance sont utilisés pour comprendre et analyser les principaux indices de performance du site Web, ce qui contribue à offrir une meilleure expérience utilisateur aux visiteurs.</p>
                </div>
                <div class="list-services" v-if="showListServicePerfo">
                    Aucun témoin à afficher
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const showListServiceNecessaire = ref(false)

    const setShowListServiceNecessaire = () =>{
        showListServiceNecessaire.value = !showListServiceNecessaire.value
    }

    const showListServiceFonction = ref(false)

    const setShowListServiceFonction = () =>{
        showListServiceFonction.value = !showListServiceFonction.value
    }

    const showListServiceAnalytic = ref(false)

    const setShowListServiceAnalytic = () =>{
        showListServiceAnalytic.value = !showListServiceAnalytic.value
    }

    const showListServicePerfo = ref(false)

    const setShowListServicePerfo = () =>{
        showListServicePerfo.value = !showListServicePerfo.value
    }

    definePageMeta({
        layout: 'default'
    })

    useHead({
        title: 'Académie Olé - Politiques de confidentialité',
    })
</script>