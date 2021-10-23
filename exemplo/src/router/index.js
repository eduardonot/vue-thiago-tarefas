import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./../views/Home'),
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    showName: 'Dashboard'
                },
                component: () => import('./../Pages/dashboard')
            },
            {
                path: 'task-done',
                name: 'task-done',
                meta: {
                    showName: 'Tarefas Concluídas'
                },
                component: () => import('./../Pages/task-done')
            },
            {
                path: 'favorites',
                name: 'favorites',
                meta: {
                    showName: 'Favoritos'
                },
                component: () => import('./../Pages/favorites')
            },
            {
                path: 'profiles',
                name: 'profiles',
                meta: {
                    showName: 'Perfil'
                },
                component: () => import('./../Pages/profiles')
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router
