import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titulo: '32 bits',
        juegos: [],
        totalStock: 0,
    },
    getters: {
        totalStock(state) {
            state.totalStock = 0
            for (let i of state.juegos) {
                let pre = parseInt(i.stock)
                state.totalStock += pre
            }
            return state.totalStock
        }
    },
    mutations: {
        setJuegos(state, data) {
            state.juegos = data
        },
        mas(state, id) {
            // console.log(state.juegos)
            let q_actual = parseInt(state.juegos.find(e => e.codigo === id).stock)
            let q_nueva = q_actual + 1
            // console.log(q_actual)
            // console.log(q_nueva)
            for (let i = 0; i < state.juegos.length; i++) {
                if (state.juegos[i].codigo === id) {
                    state.juegos[i].stock = q_nueva
                }
            }
        },
        menos(state, id) {
            // console.log(this.state.juegos)
            let q_actual = parseInt(this.state.juegos.find(e => e.codigo === id).stock)
            let q_nueva = q_actual - 1
            // console.log(q_actual)
            // console.log(q_nueva)
            for (let i = 0; i < this.state.juegos.length; i++) {
                if (this.state.juegos[i].codigo === id) {
                    this.state.juegos[i].stock = q_nueva
                }
            }
        },
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
