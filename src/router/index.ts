import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Drama from '../views/DramaSeries.vue';
import Comics from '../views/Comics.vue';
import Life from '../views/LifeCycle.vue';

const router = createRouter({
  history: createWebHistory(),  // 路由的工作模式
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/dramaSeries',
      component: Drama
    },
    {
      path: '/comics',
      component: Comics
    },
    {
      path: '/lifeCycle',
      component: Life
    }
  ]
});

export default router;
