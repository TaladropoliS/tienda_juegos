import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titulo: '32 bits',
        juegos: [],
        // totalArticulos: 0,
        totalStock: '',
    },
    getters: {
        totalStock(state) {
            for (let i of state.juegos) {
                console.log(i)
                let pre = parseInt(i.stock)
                console.log(pre)
                state.totalStock += pre
            }
            return state.totalStock = 100
        }
    },
    mutations: {
        setJuegos(state, data) {
            state.juegos = data
        }
    },
    actions: {
        async fetchData({commit}) {
            try {
                const res = await fetch('juegos.json')
                const data = await res.json()
                commit('setJuegos', data)
            } catch (error) {
                console.log(error)
            }
        },
    },
    modules: {},
})
