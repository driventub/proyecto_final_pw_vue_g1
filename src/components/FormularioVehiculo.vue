<template>
    <div>
        <h2>Lista de Vehículos</h2>
        <div>
            <label class="form-label" for="placa">Buscar por Placa:</label>
            <input class="form-control" type="text" id="placa" v-model="placaBuscada">
            <button class="btn btn-primary" @click="buscarVehiculos">Buscar</button>
        </div>
        <table v-if="vehiculosMostrados.length" class="table table-striped table-sortable">
            <thead>
                <tr class="table-dark">
                    <th>ID</th>
                    <th>Placa</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Año de Fabricación</th>
                    <th>País de Fabricación</th>
                    <th>Cilindraje</th>
                    <th>Precio</th>
                    <th>Valor por Día</th>
                    <th>Disponible</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(vehiculo, index) in vehiculosMostrados" :key="vehiculo.id" :class="{ 'table-light': (index + 1) % 10 === 0 }">
                    <td>{{ vehiculo.id }}</td>
                    <td>{{ vehiculo.placa }}</td>
                    <td>{{ vehiculo.modelo }}</td>
                    <td>{{ vehiculo.marca }}</td>
                    <td>{{ vehiculo.anioFablicacion }}</td>
                    <td>{{ vehiculo.paisFabricacion }}</td>
                    <td>{{ vehiculo.cilindraje }}</td>
                    <td>{{ vehiculo.precioVehiculo }}</td>
                    <td>{{ vehiculo.valorDia }}</td>
                    <td>{{ vehiculo.disponible }}</td>
                    <td>
                        <button class="btn btn-primary" @click="mostrarFormularioVehiculo(vehiculo)">Actualizar</button>
                        <button class="btn btn-danger" @click="eliminarVehiculo(vehiculo.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>No hay vehículos disponibles</p>

        <div v-if="showFormularioVehiculo">

            <ActualizarVehiculo :porpsObjeto="vehiculoObjeto" @cerrar="cerrarFormularioObjeto" />
        </div>
    </div>
</template>

<script>
import { verVehiculoFachada, eliminarVehiculo, buscarVehiculoPorPlaca } from "@/helpers/clienteEmpleados";
import ActualizarVehiculo from "@/components/ActualizarVehiculo.vue"


export default {
    components: {
        ActualizarVehiculo
    },

    
       
    
    data() {
        return {
            vehiculos: [],
            placaBuscada: "",
            showFormularioVehiculo: false,
            vehiculoObjeto: null,
            
        };

    },
    computed: {
        vehiculosMostrados() {
            if (!this.placaBuscada) {
                return this.vehiculos;
            } else {
                return this.vehiculos.filter(
                    (vehiculo) =>
                        vehiculo.placa &&
                        vehiculo.placa.toLowerCase().includes(this.placaBuscada.toLowerCase())
                );
            }
        },
    },
    mounted() {
        this.verVehiculos();
    },
    methods: {
        async verVehiculos() {
            this.vehiculos = await verVehiculoFachada();
        },
        async buscarVehiculos() {
            this.vehiculos = await verVehiculoFachada();
        },
        async eliminarVehiculo(id) {
            try {
                await eliminarVehiculo(id);
                await this.verVehiculos();
            } catch (error) {
                console.error("Error al eliminar vehículo:", error);
            }
        },

        mostrarFormularioVehiculo(vehiculo) {
            this.vehiculoObjeto = {
                id: vehiculo.id,
                placa: vehiculo.placa,
                modelo: vehiculo.modelo,
                marca: vehiculo.marca,
                anioFablicacion: vehiculo.anioFablicacion,
                paisFabricacion: vehiculo.paisFabricacion,
                cilindraje: vehiculo.cilindraje,
                precioVehiculo: vehiculo.precioVehiculo,
                valorDia: vehiculo.valorDia,
                disponible: vehiculo.disponible,

            };
            this.showFormularioVehiculo = true;
        },
        cerrarFormularioCliente() {
            this.showFormularioVehiculo = false;
            this.vehiculoObjeto = null;
        }
    },
};
</script>