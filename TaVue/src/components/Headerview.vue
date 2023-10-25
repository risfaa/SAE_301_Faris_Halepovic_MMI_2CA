<template>
    <div class="bg-gray-200 p-8 flex items-center justify-between" style="position: sticky; top: 0;">
      <!-- Logo -->
      <RouterLink to="/">
      <img src="../assets/icones/logo_TaVue.svg" alt="Logo" class="header-logo w-16" />
      </RouterLink>
      <!-- Wrapper for navigation links, separator, and profile icon -->
      <div class="flex items-center">
          <!-- Navigation Links -->
          <div class="nav-links flex space-x-4">
            <a href="/" class="nav-link  text-gray-700 hover:text-black">Accueil</a>
            <a href="/lunettes" class="nav-link  text-gray-700 hover:text-black">Nos lunettes</a>
            <a href="/personnalisation" class="nav-link  text-gray-700 hover:text-black">Outils de Personnalisation</a>
            <!-- ... Ajoutez d'autres liens au besoin -->
          </div>

          <!-- Séparateur -->
          <div class="separator h-5 border-l-2 mx-4"></div>

          <!-- Icône Personnage -->
          <a href="/compte" class="profile-icon">
            <img src="../assets/icones/profil_icone.svg" alt="Profile Icon" class="w-6 h-6" />
          </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
  // Ont peut ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>