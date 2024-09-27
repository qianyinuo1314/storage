import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    //重定向到首页
     redirect:'/homepage',


    // name: 'home',
    // component: HomeView
   
   

  },
  {
    // path: '/about',
    // name: 'about',
    path:'/homepage',
    name:'homepage',
    //引入
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:()=>import('../views/homepage.vue'),
  },
  {
    path: '/about',
     name: 'Home',
     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path:'/Mypage',
    name:'Mypage',
    component:()=>import('../views/Mypage.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
