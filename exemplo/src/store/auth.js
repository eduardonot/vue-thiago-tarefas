import { API_SERVICE } from './../plugins/api'

export default {
    state: {
        loginRequestStatus: '',
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
        setLogout: (state) => {
            state.user = ''
            state.token = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
        setUser: (state) => {
            state.user = JSON.parse(localStorage.getItem('user'))
        },
        setLoginRequestStatus: (state, payload) => {
            state.loginRequestStatus = payload
        }
    },
    actions: {
        login: async ({ commit, state }, payload) => {
            await API_SERVICE.post('login', payload)
                .then(response => commit('setLogin', response.data))
                .catch(error => {
                    state.loginRequestStatus = 'Usuário ou Senha inválidos'
                    throw new Error(error)
                })
        },
        signup: async ({commit, state}, payload) => {
            await API_SERVICE.post('user', payload)
                .then(() => commit('setLoginRequestStatus', 'Cadastrado!'))
                .catch( error => {
                    const errorResponse = {error}
                    state.loginRequestStatus = errorResponse.error.response.data
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
        },
        getLoginRequestStatus: (state) => {
            return state.loginRequestStatus
        }
    },
    namespaced: true
}
