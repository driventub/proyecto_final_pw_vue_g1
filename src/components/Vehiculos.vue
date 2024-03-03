
<template>
    <div>
        <h1>Buscar vehículos</h1>
        <div>
            <label for="marca">Marca:</label>
            <input v-model="marca" type="text" id="marca" />
        </div>
        <div>
            <label for="modelo">Modelo:</label>
            <input v-model="modelo" type="text" id="modelo" />
        </div>
        <button @click="buscarVehiculos">Buscar</button>

        <div v-if="vehiculos.length > 0">
            <h2>Vehículos encontrados:</h2>
            <ul>
                <li v-for="vehiculo in vehiculos" :key="vehiculo.id">
                    <h3>{{ vehiculo.marca }} - {{ vehiculo.modelo }}</h3>
                    <p>Placa: {{ vehiculo.placa }}</p>
                    <p>Modelo: {{ vehiculo.modelo }}</p>
                    <p>Marca: {{ vehiculo.marca }}</p>
                    <p>Pais de fabricación: {{ vehiculo.paisFabricacion }}</p>
                    <p>Año de fabricación: {{ vehiculo.anioFablicacion }}</p>
                    <p>Cilindraje: {{ vehiculo.cilindraje }}</p>
                    <p>Disponibilidad: {{ vehiculo.disponible }}</p>
                    <p>Precio del vehículo: {{ vehiculo.precioVehiculo }}</p>
                    <p>Valor por día del vehículo: {{ vehiculo.valorDia }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { consultarVehiculosFachada } from "@/helpers/clienteClientes";

export default {
    data() {
        return {
            marca: "",
            modelo: "",
            vehiculos: []
        };
    },
    methods: {
        async buscarVehiculos() {
            try {
                this.vehiculos = await consultarVehiculosFachada(this.marca, this.modelo);
            } catch (error) {
                console.error("Error al buscar vehículos:", error);
            }
        }
    }
};
</script>

<style></style>
