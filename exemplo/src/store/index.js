import Vue from 'vue'
import Vuex from 'vuex'
import {API_SERVICE} from './../plugins/api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filteredTasksTitle: '',
        filteredTasks:[],
        tasks:[
            // {
            //     id: 1,
            //     title: 'Primeira Tarefa',
            //     date: '2021-10-20',
            //     tags: ['Namorada'],
            //     icon: 'favorite_border',
            //     status: false,
            //     favorite: false
            // },
            // {
            //     id: 2,
            //     title: 'Segunda Tarefa',
            //     date: '2021-03-03',
            //     tags: ['Compras', 'Importante'],
            //     icon: 'shopping_cart',
            //     status: false,
            //     favorite: false
            // },
            // {
            //     id: 3,
            //     title: 'Terceira Tarefa',
            //     date: '2021-05-12',
            //     tags: ['Compras', 'Importante'],
            //     icon: 'shopping_cart',
            //     status: true,
            //     favorite: true
            // },
            // {
            //     id: 4,
            //     title: 'Quarta',
            //     date: '2021-03-11',
            //     tags: ['Compras', 'Importante'],
            //     icon: 'shopping_cart',
            //     status: true,
            //     favorite: true
            // },
            // {
            //     id: 5,
            //     title: '5ª',
            //     date: '2021-11-03',
            //     tags: ['Compras', 'Importante'],
            //     icon: 'shopping_cart',
            //     status: true,
            //     favorite: true
            // },
        ],
    },
    mutations: {
        setFilter: (state, payload) => {
            const today = new Date().toLocaleDateString().split('/')
            const formatedDay = `${today[1]}/${today[0]}/${today[2]}`
            const searchToday = state.tasks.filter(x => x.date === formatedDay)
            const searchDone = state.tasks.filter(x => x.status === true)
            const searchUndone = state.tasks.filter(x => x.status === false)
            const searchFavorite = state.tasks.filter(x => x.favorite === true)
            switch (payload) {
                case 'setAllTasks':
                    state.filteredTasksTitle = 'Todas as Tarefas'
                    state.filteredTasks = state.tasks
                    break
                case 'setTodayTasks':
                    state.filteredTasksTitle = 'Hoje'
                    state.filteredTasks = searchToday
                    break
                case 'setDoneTasks':
                    state.filteredTasksTitle = 'Concluídas'
                    state.filteredTasks = searchDone
                    break
                case 'setUndoneTasks':
                    state.filteredTasksTitle = 'Não Concluídas'
                    state.filteredTasks = searchUndone
                    break
                case 'setFavoriteTasks':
                    state.filteredTasksTitle = 'Favoritos'
                    state.filteredTasks = searchFavorite
                    break
                default:
                    state.filteredTasksTitle = 'Todas as Tarefas'
                    state.filteredTasks = state.tasks
                    break
            }
        },
        addTask: (state, payload) => {
            Object.assign(payload, {id: state.tasks.length + 1})
            state.tasks.push(payload)
        },
        editTask: (state, payload) => {
            state.tasks[payload.id-1] = payload
        },
        setTasks: (state, payload) => {
            state.tasks = payload
        }
    },
    actions: {
        addTask ({dispatch}, payload) {
            API_SERVICE.post('/task', payload)
            dispatch('load')
        },
        editTask ({dispatch}, data) {
            API_SERVICE.put(`/task/${data.id}`, data)
            dispatch('load')
        },
        delTask({dispatch}, data) {
            API_SERVICE.delete(`/task/${data.id}`, data)
            dispatch('load')
        },
        load({ commit }) {
            API_SERVICE.get('/task')
                .then(response => commit('setTasks', response.data))
                .then(() => commit('setFilter', 'setAllTasks'))
            
        }
    },
    getters:{
        getAll: (state) => {
            return state.tasks
        },
        getDone: (state) => {
            const searchTask = state.tasks.filter(x => x.status === true)
            return searchTask
        },
        getUndone: (state) => {
            const searchTask = state.tasks.filter(x => x.status === false)
            return searchTask
        },
        getFavorite: (state) => {
            const searchTask = state.tasks.filter(x => x.favorite === true)
            return searchTask
        },
        getByTag: (state, value) => {
            const searchTask = state.tasks.filter(x => x.tags === value)
            return searchTask
        },
        getToday: (state) => {
            const today = new Date().toLocaleDateString().split('/')
            const formatedDay = `${today[1]}/${today[0]}/${today[2]}`
            const searchTask = state.tasks.filter(x => x.date == formatedDay)
            return searchTask
        },
        getFilteredTasks: (state) =>{
            return {
                title: state.filteredTasksTitle,
                list: state.filteredTasks
            }
        }
    },
    modules: {
    }
})
