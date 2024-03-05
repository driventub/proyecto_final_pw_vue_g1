<template>

    <div class="contenedor">

        <h2>Buscar Vehiculos Disponibles</h2>
        <div class="form-consultar">
            <p>Marca de Vehiculo</p>
            <input class="form-control" v-model="marca" type="text">
            <br>
            <p>Modelo de Vehiculo</p>
            <input class="form-control" v-model="modelo" type="text">
            <br>
            <button class="btn btn-primary" @click="buscarVeiculo">Buscar</button>

        </div>

        <div>


        </div>

    </div>
</template>

<script>
import { consultarFachada } from '../helpers/clienteEmpleados';

export default {

    data() {
        return {
            marca: null,
            modelo: null,
            vehiculo: null
        }
    },

    methods: {

        async buscarVeiculo() {
            const vehiMarca = this.marca;
            const modelo = this.modelo

            const vehiculosRetornados =   await consultarFachada(vehiMarca, modelo);
            this.vehiculo = vehiculosRetornados;
            console.log(vehiculosRetornados);
            this.$emit('listaVehiculos', vehiculosRetornados);

        }
    }


}
</script>

<style scoped>

.form-control{
    
    display: flex;
    justify-content: center;
    text-align: center;
}

h2{
    margin-top: 1rem;
    font-size: 1.5rem;
}
</style>