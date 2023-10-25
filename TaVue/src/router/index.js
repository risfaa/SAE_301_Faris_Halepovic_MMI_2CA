import { createRouter, createWebHistory } from 'vue-router'
import Index            from '../views/index.vue'
import Lunettes         from '../views/lunettes.vue'
import Personnalisation from '../views/personnalisation.vue'
import Compte           from '../views/compte.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                        name: 'Index',             component: Index},
    { path: '/lunettes',                name: 'Lunettes',          component: Lunettes},
    { path: '/personnalisation',        name: 'Personnalisation',  component: Personnalisation},
    { path: '/compte',                  name: 'Compte',            component: Compte},
  ]
})

export default router
