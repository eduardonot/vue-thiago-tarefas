import {API_SERVICE} from './../plugins/api'

export default {
    state: {
        filteredTasksTitle: '',
        filteredTasks:[],
        tasks:[],
    },
    mutations: {
        reset: (state) => {
            state.tasks = []
            state.filteredTasksTitle = ''
            state.filteredTasks = []
        },
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
        },
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
            
        },
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
        },
    },
    namespaced: true
}