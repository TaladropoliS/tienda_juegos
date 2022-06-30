<template>
  <div class="inicio p-3">
    <h3>Lista de Juegos</h3>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Cód</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>precio</th>
        <th>color</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in juegos" :key="index">
        <td :style="`color: ${item.color}`">{{ item.codigo }}</td>
        <td :style="`color: ${item.color}`">{{ item.nombre }}</td>
        <td :style="`color: ${item.color}`">{{ item.stock }}</td>
        <td :style="`color: ${item.color}`">{{ item.precio }}</td>
        <td :style="`color: ${item.color}`">{{ item.color }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th>{{ juegos.length }}</th>
        <th></th>
        <th>{{totalCantidad}}</th>
        <th></th>
        <th></th>
      </tr>
      </tfoot>
    </table>

  </div>
</template>

<script>
  // @ is an alias to /src
  import {mapActions, mapMutations, mapState} from 'vuex'

  export default {
    name: 'InicioView',
    components: {},
    data() {
      return {
        totalCantidad: 0
      }
    },
    methods: {
      totalStock() {
        for(let i of this.juegos){
          let pre = parseInt(i.stock)
            this.totalCantidad += pre
        }
      },
      ...mapActions(['fetchData'])
      // ...mapMutations([''])
    },
    computed: {
      ...mapState(['titulo', 'juegos'])
    },
    created() {
      this.fetchData()
      this.totalStock()
    }
  }
</script>
