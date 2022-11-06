import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchResultView from '../views/SearchResultView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result/:query',
      name: 'result-list',
      component: SearchResultView
    }
  ]
})

export default router
