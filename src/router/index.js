import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home | Vue.js Digital Agency Template'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        title: 'About Us | Vue.js Digital Agency Template'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title

  if (title) {
    document.title = title
  }

  next()
})

export default router
