import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routesRegistration = [
    {
        path: '/',
        name: 'Home',
    },
    {
        path: '/travel-app/:id/:slug',
        name: 'DestinationShow',
        component: 'component',
        props: route => ({ ...route.params, id: parseInt(route.params.id) }),
        beforeEnter(to) {
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))

            if (!exists) {
                return {
                    name: 'NotFoundShow',
                    params: { pathMatch: to.path.split('/').slice(1) },
                    query: to.query,
                    hash: to.hash
                }
            }
        },
        children: [
            {
                path: ':experienceSlug',
                name: 'ExperienceShow',
                component: () => import('@/views/ExperienceShow.vue'),
                props: route => ({ ...route.params, id: parseInt(route.params.id) })
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFoundShow',
    },
    {
        path: '/protected',
        name: 'Protected',
        component: 'component',
        meta: {
            requiredAuth: true,
        }
    },
    {
        path: '/login',
        name: 'LoginShow'
    },
    {
        path: '/invoices',
        name: 'InvoicesShow',
        meta: {
            requiredAuth: true
        }
    }
]

const routes = routesRegistration.map(route => {
    let folder = 'views'
    if (route.component === 'component') {
        folder = 'components'
    }

    return {
        ...route,
        component: () => import(/* webpackChunkName: "[request]" */ `../${folder}/${route.name}.vue`)
    }
})

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'travel-active-link',
    scrollBehavior (to, form, savedPosition) {
        return savedPosition || new Promise( (resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300)
        })
    }
})

router.beforeEach((to) => {
    if (to.meta.requiredAuth && !window.user) {
        return { name: 'LoginShow', query: { redirect: to.fullPath } }
    }
})

export default router