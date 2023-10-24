<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Headerview from './components/Headerview.vue';
import Footerview from './components/footerview.vue';
</script>

<template>
<Headerview/>

<Suspense>
  <RouterView />
</Suspense>

<Footerview/>
</template>