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
      <th>{{totalStock}}</th>
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
    props:{
      juegos: Array,
      totalStock: Number
    }
  }
</script>

<style scoped>

</style>