import { API_SERVICE } from './../plugins/api'

export default {
    state: {
        user: null,
        token: null,
    },
    mutations: {
        setLogin: (state, payload) => {
            const { user, token } = payload

            state.user = user
            state.token = token

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
        },
        setLogout: () => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        }
    },
    actions: {
        login: async ({ commit }, payload) => {
            await API_SERVICE.post('login', payload)
                .then(response => commit('setLogin', response.data))
                .catch(error => {
                    alert('Dados incorretos')
                    throw new Error(error)
                })
        },
        logout: async ({ commit }) => {
            await commit('setLogout')
        }
    },
    getters: {
        user: (state) => {
            return state.user
        },
        token: (state) => {
            return state.token ? true : false
        }
    },
    namespaced: true
}
