<template>
  <div class="listajuegos">
    <h3>Lista de Juegos</h3>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Cód</th>
        <th>Color</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>precio</th>
        <th><i class="fas fa-edit"></i></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in juegos" :key="index">
        <td class="align-middle" :style="`color: ${item.color}`">{{ item.codigo }}</td>


        <td class="align-middle">
          <select
              :style="`background-color: ${item.color}`"
              @change="onChange($event, index)"
              class="form-select text-light">
            <option selected :value="item.color" disabled>{{ item.color }}</option>
            <option class="my-3 bg-light"
                v-for="(color, i) in listaColores" :key="i"
                :style="`color: ${color}`"
                :value="color">{{ color }}
            </option>
          </select>
        </td>


        <td class="align-middle" :style="`color: ${item.color}`">{{ item.nombre }}</td>
        <td class="align-middle" :style="`color: ${item.color}`">{{ parseInt(item.stock).toLocaleString() }}</td>
        <td class="align-middle" :style="`color: ${item.color}`">{{ parseInt(item.precio).toLocaleString() }}</td>
        <td class="align-middle" :style="`color: ${item.color}`">
          <button v-if="item.stock>=1" @click="menos(item.codigo)" class="btn btn-sm btn-danger me-1 border"><i
              class="fas fa-minus"></i></button>
          <button v-else class="btn btn-sm btn-dark me-3"></button>
          <button @click="mas(item.codigo)" class="btn btn-sm btn-success border"><i class="fas fa-plus"></i></button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <th>{{ juegos.length }}</th>
        <th></th>
        <th></th>
        <th>{{ totalStock }}</th>
        <th>{{ valorInventario.toLocaleString() }}</th>
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
      totalStock: Number,
      valorInventario: Number,
      listaColores: Array,
    },
    data() {
      return {
        colorSelecionado: '',
        colorOriginal: '',
        indice: '',
      }
    },
    methods: {
      mas(id) {
        this.$store.commit('mas', id)
      },
      menos(id) {
        this.$store.commit('menos', id)
      },
      updateColoresJuegos(indice, colorSeleccionado) {
        // console.log(indice);
        // console.log(colorSeleccionado);
        this.$store.commit('updateColoresJuegos', [indice, colorSeleccionado])
      },
      onChange(event, indice) {
        this.colorSelecionado = event.target.value
        this.indice = indice
        // console.log(this.colorSelecionado)
        // console.log(this.indice)
        this.updateColoresJuegos(this.indice, this.colorSelecionado)
      },
    },
  }
</script>

<style scoped>

</style>