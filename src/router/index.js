import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
      meta: {
        breadcrumb: [{
          name: '首頁'
        }]
      }
  },
  {
      path: '/news',
      name: 'news',
      component: () => import('../views/News.vue'),
      meta: {
         breadcrumb: [{
           name: '首頁',
           link: '/'
         },
         {
           name: '關於我們',
           link: 'About'
         },
         {
           name: '最新消息'
         }]
      }
    },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
          link: 'home'
        },
        {
          name: '關於我'
        }]
      }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
