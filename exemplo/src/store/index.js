import Vue from 'vue'
import Vuex from 'vuex'
import task from './task'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        task,
        auth
    }
})
// 