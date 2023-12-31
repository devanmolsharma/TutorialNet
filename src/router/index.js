import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TutorialView from '../views/TutorialView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: TutorialView,
      props: true
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound,
      props: true
    },
  ],
})

export default router
