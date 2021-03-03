import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/conteo/',
        component: () => import('@/views/conteo/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/conteo/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/conteo/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/conteo/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/conteo/Tab3.vue')
            }
        ]
    }, {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/corte/',
        component: () => import('@/views/corte/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/conteo/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/corte/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/corte/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/corte/Tab3.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
