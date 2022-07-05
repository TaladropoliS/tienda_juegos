import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        titulo: '32 bits',
        juegos: [],
        totalStock: 0,
        valorInventario: 0,
        listaColores: [],
    },
    getters: {
        totalStock(state) {
            state.totalStock = 0
            for (let i of state.juegos) {
                let stock = parseInt(i.stock)
                state.totalStock += stock
            }
            return state.totalStock
        },
        valorInventario(state) {
            state.valorInventario = 0
            for (let i of state.juegos) {
                let valInv = i.stock * i.precio
                state.valorInventario += valInv
            }
            return state.valorInventario
        },
    },
    mutations: {
        setJuegos(state, data) {
            // recibe la lista de juegos desde el actions: y crea la lista de colores que viene en la data.
            for (let i of data) {
                const color = this.state.listaColores.find(e => (e === i.color))
                if (color === undefined) this.state.listaColores.push(i.color)
            }
            state.juegos = data
            // console.log(data)
        },
        updateColoresJuegos(state, payload) {
            // console.log(payload[0])
            // console.log(payload[1])
            state.juegos[payload[0]]['color'] = payload[1]
        },
        mas(state, id) {
            // console.log(id)
            let q_actual = parseInt(state.juegos.find(e => e.codigo === id).stock)
            let q_nueva = q_actual + 1
            for (let i = 0; i < state.juegos.length; i++) {
                if (state.juegos[i].codigo === id) {
                    state.juegos[i].stock = q_nueva
                }
            }
        },
        menos(state, id) {
            let q_actual = parseInt(this.state.juegos.find(e => e.codigo === id).stock)
            let q_nueva = q_actual - 1
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
