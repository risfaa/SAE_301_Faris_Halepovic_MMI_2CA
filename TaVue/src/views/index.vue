<template>
  <!-- text d'intro page d'accueil  -->
  <div class="items-center justify-center mt-16">
        <h1 class="text-4xl font-bold text-center">TaVue</h1>
        <p class="text-xl text-center mt-4">
            Bienvenue sur le site TA VUE, choisissez ici votre paire de lunettes artisanales françaises que vous personnalisez comme vous le souhaitez !
        </p>
  </div>

  <!-- image d'illustration lunettes -->
  <div>
    <img class="w-1/2 mx-auto ml-auto mt-20" src="../assets/img/lunette_pont.webp" alt="image lunette">
  </div>

  <!-- icone fleche vers le bas -->
  <div>
    <img class="w-10 h-10 mx-auto mt-12" src="../assets/icones/arrow-down.svg" alt="icone fleche vers le bas">
  </div>

  <!-- text nos produits -->
  <div class="items-center justify-center mt-16">
        <h1 class=" text-2xl text-center">Nos produits</h1>
  </div>

  <!-- carde produits -->
  <div class="flex flex-wrap overflow-hidden md:px-5 mt-12 justify-between mx-32">
    
        <RouterLink to="/lunettes">
        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_pont.webp" alt="image de lunette">
            <p>Parisienne Élégance</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>
        </RouterLink>

        <RouterLink to="/lunettes">
        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_base.webp" alt="image de lunette">
            <p>Montmartre chic</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>
        </RouterLink>

        <RouterLink to="/lunettes">
        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_ronde.webp" alt="image de lunette">
            <p>Bordeaux Charme</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>
        </RouterLink>

        <RouterLink to="/lunettes">
        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_large.webp" alt="image de lunette">
            <p>Côte d'Azur Classique</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>
        </RouterLink>

   </div>

   <!-- text historique personnalisation -->
  <div class="items-center justify-center mt-40">
        <h1 class=" text-2xl text-center">Historique de personnalisation</h1>
  </div>

  <!-- carde historique personnalisation -->
  <div class="flex flex-wrap overflow-hidden md:px-5 mt-12 justify-between mx-32">
        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_pont.webp" alt="image de lunette">
            <p>Parisienne Élégance</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>

        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_base.webp" alt="image de lunette">
            <p>Montmartre chic</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>

        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_ronde.webp" alt="image de lunette">
            <p>Bordeaux Charme</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>

        <div class="bg-gray-200 p-12 w-60 text-center space-y-4">
            <img class="w-60 h-30" src="../assets/img/lunette_large.webp" alt="image de lunette">
            <p>Côte d'Azur Classique</p>
            <img class="mx-auto" src="../assets/icones/icone_personnalisation.svg" alt="icone de personnalisation">
            <p>50.00 €</p>
        </div>
   </div>

   <!-- image d'illustration -->
  <div>
    <img class="mt-40" src="../assets/img/personnes-composition-lunettes-1.webp" alt="image de plusieurs personnes">
  </div>

</template>