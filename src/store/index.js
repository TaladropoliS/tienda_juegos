import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titulo: '32 bits',
        juegos: [],
    },
    getters: {},
    mutations: {
        setJuegos(state, payload) {
            state.juegos = payload
        }
    },
    actions: {
        fetchData: async function ({commit}) {
            try {
                const res = await fetch('juegos.json')
                const data = await res.json()
                commit('setJuegos', data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {},
})
