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
        title: 'Home | Vue.js Digital Agency Template',
        description: 'Vue.js Digital Agency Template',
        preload: [
          {
            as: 'image',
            href: '/hero-image.webp'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: {
        title: 'About Us | Vue.js Digital Agency Template',
        description: 'Vue.js Digital Agency Template',
        preload: [
          {
            as: 'image',
            href: '/about-min.webp'
          }
        ]
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { title, description } = to.meta

  // Set document title
  if (title) {
    document.title = title
  }

  // Set meta description
  if (description) {
    const metaDescTag = document.querySelector('meta[name="description"]')

    if (metaDescTag) {
      metaDescTag.setAttribute('content', description)
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      meta.setAttribute('content', description)
      document.head.appendChild(meta)
    }
  }

  // Set preload content
  if (to.meta.preload) {
    const head = document.querySelector('head')

    // Clear existing preload content
    const preloadTags = document.querySelectorAll('link[rel="preload"]')
    preloadTags.forEach((item) => {
      head.removeChild(item)
    })

    // Add new preload content
    to.meta.preload.forEach((item) => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'preload')
      link.setAttribute('as', item.as)
      link.setAttribute('href', item.href)
      head.appendChild(link)
    })
  }

  next()
})

export default router
