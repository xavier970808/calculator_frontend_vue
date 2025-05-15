import { createRouter, createWebHistory } from 'vue-router'

import 一般計算機 from '@/views/一般計算機.vue'
import 函數繪圖 from '@/views/函數繪圖.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/一般計算機', component: 一般計算機 },
    { path: '/函數繪圖', component: 函數繪圖 }
  ],
})

export default router
