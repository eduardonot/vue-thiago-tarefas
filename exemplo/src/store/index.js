import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        filteredTasksTitle: '',
        filteredTasks:[],
        tasks:[
            {
                title: 'Primeira Tarefa',
                date: new Date('10/12/2021'),
                tags: ['Namorada'],
                icon: 'favorite_border',
                isDone: false,
                favorite: false
            },
            {
                title: 'Segunda Tarefa',
                date: new Date('12/13/2021'),
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: false,
                favorite: false
            },
            {
                title: 'Terceira Tarefa',
                date: new Date('12/12/2021'),
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
            {
                title: 'Quarta',
                date: new Date('10/16/2021'),
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
            {
                title: '5ª',
                date: new Date('12/10/2021'),
                tags: ['Compras', 'Importante'],
                icon: 'shopping_cart',
                isDone: true,
                favorite: true
            },
        ],
    },
    mutations: {
        setFilter: (state, payload) => {
            const searchToday = state.tasks.filter(x => x.date.toLocaleDateString() === new Date().toLocaleDateString())
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
                    state.filteredTasksTitle = 'Favoritas'
                    state.filteredTasks = searchFavorite
                    break
                default:
                    state.filteredTasksTitle = 'Todas as Tarefas'
                    state.filteredTasks = state.tasks
                    break
            }
        },
    },
    actions: {
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
            const searchTask = state.tasks.filter(x => x.date.toLocaleDateString() === new Date().toLocaleDateString())
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
