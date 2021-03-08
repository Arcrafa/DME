import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
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
    },
    {
        path: '/corte/',
        component: () => import('@/views/corte/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/corte/tab1'
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
    },
    {
        path: '/traslado/',
        component: () => import('@/views/traslado/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/traslado/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/traslado/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/traslado/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/conteo/Tab3.vue')
            }
        ]
    },
    {
        path: '/acopio/',
        component: () => import('@/views/acopio/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/acopio/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/acopio/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/acopio/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/acopio/Tab3.vue')
            }
        ]
    },
    {
        path: '/despacho/',
        component: () => import('@/views/despacho/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/despacho/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/despacho/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/despacho/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/despacho/Tab3.vue')
            }
        ]
    },
    {
        path: '/recibo/',
        component: () => import('@/views/recibo/Tabs.vue'),
        children: [
            {
                path: '',
                redirect: '/recibo/tab1'
            },
            {
                path: 'tab1',
                component: () => import('@/views/recibo/Tab1.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/recibo/Tab2.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/recibo/Tab3.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
