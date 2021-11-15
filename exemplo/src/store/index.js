import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filteredTasksTitle: '',
        filteredTasks:[],
        tasks:[
            {
                id: 1,
                title: 'Primeira Tarefa',
                date: '2021-10-20',
                tags: ['Namorada'],
                icon: 'favorite_border',
                isDone: false,
                favorite: false
            },
            {
                id: 2,
                title: 'Segunda Tarefa',
                date: '2021-03-03',
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: false,
                favorite: false
            },
            {
                id: 3,
                title: 'Terceira Tarefa',
                date: '2021-05-12',
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
            {
                id: 4,
                title: 'Quarta',
                date: '2021-03-11',
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
            {
                id: 5,
                title: '5ª',
                date: '2021-11-03',
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
        ],
    },
    mutations: {
        setFilter: (state, payload) => {
            const searchToday = state.tasks.filter(x => x.date === new Date())
            const searchDone = state.tasks.filter(x => x.isDone === true)
            const searchUndone = state.tasks.filter(x => x.isDone === false)
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
        }
    },
    actions: {
        addTask (task, payload) {
            task.commit('addTask', payload)
        },
        editTask (task, payload) {
            task.commit('editTask', payload)
        }
    },
    getters:{
        getAll: (state) => {
            return state.tasks
        },
        getDone: (state) => {
            const searchTask = state.tasks.filter(x => x.isDone === true)
            return searchTask
        },
        getUndone: (state) => {
            const searchTask = state.tasks.filter(x => x.isDone === false)
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
            const searchTask = state.tasks.filter(x => x.date === new Date())
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
