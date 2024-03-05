<template>

    <div>
        <form @submit.prevent="buscarVeiculo">
            <h2>Buscar Vehiculos Disponibles</h2>
            <div class="mb-3" >
                <label for="marca" class="form-label">Marca de Vehiculo</label>
                <input class="form-control" v-model="marca" type="text" required id="marca">
            </div>
            <div class="mb-3" >
                <label for="modelo" class="form-label">Modelo de Vehiculo</label>
                <input class="form-control" v-model="modelo" type="text" required id="modelo">
            </div>
            <button class="btn btn-primary" type="submit">Buscar</button>
        </form>
        

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