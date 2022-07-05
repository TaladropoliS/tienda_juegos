<template>
  <div class="inicio p-3">

    <ListaJuegos
        :juegos="juegos"
        :totalStock="totalStock"
        :valorInventario="valorInventario"
        :listaColores="listaColores"
    />

  </div>
</template>
<script>
  // @ is an alias to /src
  import ListaJuegos from "@/components/ListaJuegos";
  import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'

  export default {
    name: 'InicioView',
    components: {ListaJuegos},
    data() {
      return {}
    },
    methods: {
      ...mapActions(['fetchData'])
    },
    computed: {
      ...mapState(['titulo', 'juegos', 'listaColores']),
      ...mapGetters(['totalStock', 'valorInventario']),
    },
    created() {
      this.fetchData()
    }
  }
</script>
