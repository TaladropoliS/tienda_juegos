<template>
  <div class="titulo d-flex justify-content-center align-items-center py-1 m-0 border bg-dark text-light">
    <img id="logo32" alt="Vue logo" src="../assets/logo.jpg" class="img-fluid me-3">
    <h1 class="m-0 p-0">{{titulo}}</h1>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "TituloVue",
    computed:{
      ...mapState(['titulo'])
    }
  }
</script>

<style scoped>
#logo32{
  width: 45px;
  height: 45px;
  border: solid 2px white;
  border-radius: 50%;
}
</style>