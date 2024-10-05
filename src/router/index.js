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
  },
  {
  path: '/Information-1',
  name: 'Information-1',
  component:()=>import('../views/Information-1.vue'),
},
{
  path: '/Information-2',
  name: 'Information-2',
  component:()=>import('../views/Information-2.vue'),
},
{
  path: '/Information-3',
  name: 'Information-3',
  component:()=>import('../views/Information-4.vue'),
},
{
  path: '/Information-4',
  name: 'Information-4',
  component:()=>import('../views/Information-4.vue'),
},
{
  path: '/Information-5',
  name: 'Information-5',
  component:()=>import('../views/Information-5.vue'),
},


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
