<template>
  <div class="listajuegos">
    <h3>Lista de Juegos</h3>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Cód</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>precio</th>
        <th><i class="fas fa-edit"></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in juegos" :key="index">
        <td :style="`color: ${item.color}`">{{ item.codigo }}</td>
        <td :style="`color: ${item.color}`">{{ item.nombre }}</td>
        <td :style="`color: ${item.color}`">{{ item.stock }}</td>
        <td :style="`color: ${item.color}`">{{ item.precio }}</td>
        <td :style="`color: ${item.color}`">
          <button v-if="item.stock>=1" @click="menos(item.codigo)" class="btn btn-sm btn-outline-danger me-1"><i
              class="fas fa-minus"></i></button>
          <button v-else class="btn btn-sm btn-dark me-3"></button>
          <button @click="mas(item.codigo)" class="btn btn-sm btn-outline-success"><i class="fas fa-plus"></i></button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th>{{ juegos.length }}</th>
        <th></th>
        <th>{{ totalStock }}</th>
        <th></th>
        <th></th>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
  export default {
    name: "ListaJuegos",
    props: {
      juegos: Array,
      totalStock: Number
    },
    methods: {
      mas(id) {
        this.$store.commit('mas', id)
      },
      menos(id) {
        this.$store.commit('menos', id)
      },
    }
  }
</script>

<style scoped>

</style>