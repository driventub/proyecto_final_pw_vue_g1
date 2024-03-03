<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <VehiculoReservar2 />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VehiculoConsultar from './pages/VehiculoConsultar.vue'
import RegistroCliente from './pages/RegistroCliente.vue'
import FormularioCliente from './components/FormularioCliente.vue'
import ReservaVehiculo from './components/ReservaVehiculo.vue'
import VehiculoReservar2 from './components/VehiculoReservar2.vue'

export default {
  name: 'App',
  components: {
    VehiculoConsultar,
    RegistroCliente,
    FormularioCliente,
    ReservaVehiculo,
    VehiculoReservar2
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
  margin-top: 60px;
}
</style>
