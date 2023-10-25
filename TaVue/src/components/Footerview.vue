<template>
    <div class="bg-gray-200 text-black p-8 flex items-center justify-between">

    <div class="flex lg:ml-60">
        <!-- Liens cliquables au milieu à gauche -->
        <div class="footer-links-left flex flex-col space-y-4">
            <h3 class="font-bold">Nos produits</h3>
            <a href="/lunettes" class="text-black hover:text-gray-300">Nos lunettes</a>
            <a href="/personnalisation" class="text-black hover:text-gray-300">Personnalisation</a>
        </div>

        <!-- Liens cliquables au milieu à droite -->
        <div class="footer-links-right flex flex-col space-y-4 ml-20">
            <h3 class="font-bold">Information</h3>
            <a href="/another-link" class="text-black hover:text-gray-300">Compte</a>
        </div>
    </div>
      

      <!-- Logo -->
      <a href="/" class="footer-logo lg:mr-60">
        <img src="../assets/icones/logo_TaVue.svg" alt="Footer Logo" class="w-28 h-auto " />
      </a>
      
    </div>
</template>

<script>
export default {
  name: 'FooterView'
  // Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles CSS supplémentaires ici si nécessaire. */
</style>