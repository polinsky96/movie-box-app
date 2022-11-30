import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SearchResultView from '../views/SearchResultView.vue';
import MovieView from '../views/MovieView.vue';
import TvView from '../views/TvView.vue';
import PersonView from '../views/PersonView.vue';
import UserView from '../views/UserView.vue';

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
    },

    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieView
    },

    {
      path: '/tv/:id',
      name: 'tv',
      component: TvView
    },
    
    {
      path: '/person/:id',
      name: 'person',
      component: PersonView
    },

    {
      path: '/user/:id',
      name: 'user',
      component: UserView
    },
  ]
})

export default router
