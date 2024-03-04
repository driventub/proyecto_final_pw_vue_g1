<template>
  
  <div class="container">

        <h1>Buscar Vehiculos Disponibles</h1>
        <div class="form-consultar">
            <p>Marca de Vehiculo</p>
            <input v-model="marca" type="text">
            <br>
            <p>Modelo de Vehiculo</p>
            <input v-model="modelo" type="text">
            <br>
            <button @click="buscarVeiculo">Buscar</button>

        </div>

        <div>
            

        </div>

  </div>
</template>

<script>
import {consultarFachada} from '../helpers/clienteVehiculo'
export default {

    data(){
        return{
            marca:null,
            modelo:null,
            vehiculo:null
        }
    },

    methods:{

        async buscarVeiculo(){
            const vehiMarca= this.marca;
            const modelo = this.modelo

            const vehiculosRetornados =   await consultarFachada(vehiMarca, modelo);
            this.vehiculo = vehiculosRetornados;
            console.log(vehiculosRetornados);
            this.$emit('listaVehiculos', vehiculosRetornados);

        }
    }


}
</script>

<style>

</style>