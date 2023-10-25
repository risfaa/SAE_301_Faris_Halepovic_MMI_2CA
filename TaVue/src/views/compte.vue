<template>
  <div class="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">

      <!-- boutton deconnexion -->
      <div v-if="currentUser">
        <div>
          <button type="button" @click="doLogout" class="bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-grey-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600 mt-4 mb-80">Déconnexion</button>
        </div>
      </div>

      <!-- icone profile -->
      <div v-else>
        <img class="mx-auto mt-20" src="../assets/icones/profil_icone.svg" alt="icone profil">

        <!-- champ adresse email -->
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="username" class=" mt-12 block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
          <div class="mt-2">
            <input v-model="username" type="text" name="username" id="username" autocomplete="none"
              placeholder="Entrer votre adresse mail"
              class=" px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
          </div>
        </div>

        <!-- champ mot de passe -->
        <div class="sm:col-span-2 sm:col-start-1 mt-4">
          <label for="password" class="mt-2 block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          <div class="mt-2">
            <input v-model="password" type="password" name="password" id="password" autocomplete="none"
              placeholder="Entrer votre mot de passe"
              class=" px-2 block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6">
          </div>
        </div>


        <div v-if="loginMode">

          <!-- grande div pour les 2 boutton connexion -->
          <div class="flex sm:col-span-2 sm:col-start-1 mt-2">

              <!-- boutton connexion -->
              <button type="button" @click="doLogin"
                class="mr-2 ml-4 w-30 mt-4 bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Se connecter</button>
            
                <!-- boutton connexion google -->
               <div class="flex gap-4 mr-2 mt-4 px-3 py-2 bg-gray-300 w-30"> 
                <img class="w-6 h-6" src="../assets/icones/google.svg" alt="icone google">
                  <button type="button" @click="doLogin" class="text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Se connecter</button>
               </div> 

                <!-- boutton connexion github -->
               <div class="flex gap-4 mr-2 mt-4 px-3 py-2 bg-gray-300 w-30"> 
                <img class="w-6 h-6" src="../assets/icones/github_icone.svg" alt="icone github">
                  <button type="button" @click="doLogin" class="text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Se connecter</button>
               </div> 

          </div>  

          <!-- boutton créer un compte -->
          <div>
            <button type="button" @click="loginMode = false" class="mt-10 mx-40 mb-40 bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Créer Compte</button>
          </div>

        </div>


        <div v-else>

          <!-- champ pseudo -->
          <div class="sm:col-span-2 sm:col-start-1 mt-4">
            <label for="fullName" class="block text-sm font-medium leading-6 text-gray-900">Pseudo</label>
            <div class="mt-2">
              <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                placeholder="Entrer votre pseudo"
                class=" px-2 block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-insetsm:text-sm sm:leading-6">
            </div>
          </div>


          <div class="sm:col-span-2 sm:col-start-1 mt-4 mb-40">

            <!-- boutton enregister nouvel utilisateur -->
            <button type="button" @click="doCreateAccount"
              class="mr-3  bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Enregistrer nouvel utilisateur</button>

            <!-- boutton annuler -->  
            <button type="button" @click="loginMode = true"
              class="bg-gray-300 px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Annuler</button>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';

let pb = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const loginMode = ref(true);

onMounted(async () => {
  pb = new PocketBase('http://127.0.0.1:8090');

  pb.authStore.onChange(() => {
    currentUser.value = pb.authStore.model
  }, true)

});

const doLogout = () => {
  pb.authStore.clear();
  currentUser.value = null;
}

const doLogin = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(username.value, password.value);

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);
    // currentUser.value = pb.authStore.model
  } catch (error) {
    alert(error.message)
  }
}

const doCreateAccount = async () => {
  try {
    const data = {
      "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
      "email": username.value,
      "emailVisibility": true,
      "password": password.value,
      "passwordConfirm": password.value,
      "name": fullName.value
    };

    const record = await pb.collection('users').create(data);

    await doLogin();
  } catch (error) {
    alert(error.message)
  }
}

</script>