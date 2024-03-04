<template>

    <div class="container">

        <h1>Buscar Vehiculos Disponibles</h1>
        <div class="form-consultar">
            <p>Marca de Vehiculo</p>
            <input type="text">
            <br>
            <p>Modelo de Vehiculo</p>
            <input type="text">

            <button @click="buscarVeiculo">Buscar</button>

        </div>

        <div>


        </div>

    </div>
</template>

<script>
import { consultarFachada } from '@/helpers/clienteVehiculo';

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

            const vehiculoRetornado = await consultarFachada(vehiMarca, modelo);
            this.vehiculo = vehiculoRetornado;
            console.log(vehiculoRetornado);
        }
    }

}
</script>

<style></style>