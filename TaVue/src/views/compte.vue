<template>
    <div class="login-container flex flex-col items-center justify-center mt-16 mb-24">

      <!-- Icône (utilisez votre propre icône) -->
      <img src="../assets/icones/profil_icone.svg" alt="Icône de connexion" class="w-16 h-16 mb-4" />

      <!-- Section E-mail -->
        <input type="email" id="email" placeholder="E-Mail ou nom d'utilisateur" class="px-10 py-2 w-80  border-2 mb-5 text-lg"/>

      <!-- Section Mot de passe -->
        <input type="password" id="password" placeholder="Mot de passe"  class=" px-10 py-2 w-80 border-2 text-lg"/>

      <!-- Bouton "Se connecter" -->
      <RouterLink to="/" ><button class=" bg text-black font-montserrat login-button mt-6  px-28 py-2 border-2">Se connecter</button></RouterLink>

      <!-- Bouton "Se connecter avec Google" (utilisez RouterLink) -->
      <RouterLink to="/connexion-google" class="font-montserrat flex google-login-button mt-5 px-16 py-2 border-2">
        <img class="w-4 h-4 mr-2 -ml-4 mt-1" src="../assets/icones/google.svg" alt="icone google">
        Se connecter avec Google
      </RouterLink>

      <!-- Bouton "Se connecter avec Github" (utilisez RouterLink) -->
      <RouterLink to="/connexion-github" class="font-montserrat flex github-login-button mt-5 px-16 py-2 border-2">
        <img class="w-4 h-4 mr-2 -ml-4 mt-1" src="../assets/icones/github_icone.svg" alt="icone github">
          Se connecter avec Github
      </RouterLink>

      <!-- Texte "Vous n'avez pas de compte ?" -->
      <p class="font-nunito text-gray-700 mt-6">Vous n'avez pas de compte ?</p>

      <!-- Texte "S'inscrire" (utilisez RouterLink) -->
      <RouterLink to="/inscription" class="font-nunito text-bleu register-link">S'inscrire</RouterLink>

    </div>
  </template>