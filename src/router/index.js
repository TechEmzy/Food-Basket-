import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TargetSavings from '../views/TargetSavings.vue'
import SavingDeposit from '../views/SavingDeposit.vue'
import SavingProduct from '../views/SavingProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/targetSavings',
    name: 'targetSavings',
    component: TargetSavings 
  },
  {
    path: '/savingDeposit',
    name: 'savingDeposit',
    component: SavingDeposit
  },
  {
    path: '/savingProduct',
    name: 'savingProduct',
    component: SavingProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router