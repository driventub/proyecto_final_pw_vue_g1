<template>
    <NavBar /> 

  <router-view></router-view>
  <!-- <h2>Condor</h2>
  <registro-ciente />
  <h2>condor</h2> -->

  <!-- <FormularioCliente/> -->

</template>

<script>
import NavBar from './components/NavBar.vue';
import RegistroCiente from './components/RegistroCiente.vue';
import FormularioCliente from './components/FormularioCliente.vue';
import FormularioVehiculo from './components/FormularioVehiculo.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    RegistroCiente,
    FormularioCliente,
    FormularioVehiculo,
    
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
