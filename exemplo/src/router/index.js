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
                path: '',
                redirect: 'dashboard'
            },
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
                path: 'task-form/:id?',
                name: 'task-form',
                meta: {
                    showName: 'Formulário'
                },
                component: () => import('./../Pages/task-form')
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
    {
        path: '/authentication',
        name: 'Authentication',
        component: () => import('./../views/Authentication'),
        children: [
            {
                path: '',
                name: 'login',
                meta: {
                    showName: 'Login',
                },
                component: () => import('./../Pages/login')
            }
        ]
    },
    

]

const router = new VueRouter({
    routes
})

export default router
