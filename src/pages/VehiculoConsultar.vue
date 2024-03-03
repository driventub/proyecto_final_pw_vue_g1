<template>
    <h1>Componente Buscar vehiculos</h1>
    <Vehiculos nombreBoton="Buscar Vehiculos" @miEventoVehiculo="buscarVehiculo"/>
</template>

<script>
import Vehiculos from "../components/Vehiculos.vue";
import { consultarVehiculoFachada } from "../helpers/clienteClientes";

export default {
    components: {
        Vehiculos
    },

    data() {
        return {}
    },

    methods: {
        async buscarVehiculo(vehiculo) {
            await consultarVehiculoFachada(vehiculo); 
            console.log("Vehículo consultado:", vehiculo);
        }
    }
}
</script>

<style></style>
