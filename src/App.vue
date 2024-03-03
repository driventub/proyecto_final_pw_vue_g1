<template>
  <router-view></router-view>
  <NavBar />
  <h2>Condor</h2>
  <registro-ciente />
  <ActualizarCliente />
  <h2>condor</h2>
</template>

<script>
import ActualizarCliente from './components/ActualizaCliente.vue';
import NavBar from './components/NavBar.vue';
import RegistroCiente from './components/RegistroCiente.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    RegistroCiente,
    ActualizarCliente
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
