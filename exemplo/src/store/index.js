import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
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
                date: new Date('12/12/2021'),
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
        }
    },
    modules: {
    }
})
