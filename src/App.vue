<template>
  <div id="app">
    <nav>
      <router-link class="px-3" to="/">Inicio</router-link>
      |
      <router-link class="px-3" to="/nosotros">Nosotros</router-link>
    </nav>

    <TituloVue/>

    <div class="card col-11 col-md-8 mx-auto mt-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TituloVue from "@/components/TituloVue";

  export default {
    components: {
      TituloVue
    }
  }
</script>

<style lang="scss">
.card {
  height: 70vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 3px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
