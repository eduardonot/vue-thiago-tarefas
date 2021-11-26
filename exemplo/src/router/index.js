import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        
        path: '/app',
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
    
// TODO: Fazer proteção de rotas
]

const Router = new VueRouter({
    routes
})


const isAuthenticated = localStorage.getItem('token')

Router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
    else next()
})

export default Router
