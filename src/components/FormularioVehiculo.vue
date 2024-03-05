<template>
    <div class="container">
        <div v-if="showDatosVehiculo">
            <h2>Lista de Vehículos</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <label class="form-label" for="placa">Buscar por Placa:</label>
                    <input class="form-control" type="text" id="placa" v-model="placaBuscada">
                    
                </div>
            </div>


            <table v-if="vehiculosMostrados.length" class="table table-striped table-sortable">
                <thead>
                    <tr class="table-dark">
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th class="d-none d-sm-table-cell">Año de Fabricación</th>
                        <th class="d-none d-sm-table-cell">País de Fabricación</th>
                        <th class="d-none d-md-table-cell">Cilindraje</th>
                        <th class="d-none d-md-table-cell">Precio</th>
                        <th class="d-none d-lg-table-cell">Valor por Día</th>
                        <th class="d-none d-xl-table-cell">Disponible</th>
                        <th class="d-none d-xl-table-cell">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(vehiculo, index) in vehiculosMostrados" :key="vehiculo.id"
                        :class="{ 'table-light': index % 10 !== 0 }">
                        <td >{{ vehiculo.id }}</td>
                        <td >{{ vehiculo.placa }}</td>
                        <td >{{ vehiculo.modelo }}</td>
                        <td >{{ vehiculo.marca }}</td>
                        <td class="d-none d-sm-table-cell">{{ vehiculo.anioFablicacion }}</td>
                        <td class="d-none d-sm-table-cell">{{ vehiculo.paisFabricacion }}</td>
                        <td class="d-none d-md-table-cell">{{ vehiculo.cilindraje }}</td>
                        <td class="d-none d-md-table-cell">{{ vehiculo.precioVehiculo }}</td>
                        <td class="d-none d-lg-table-cell">{{ vehiculo.valorDia }}</td>
                        <td class="d-none d-xl-table-cell">{{ vehiculo.disponible }}</td>
                        <td class="d-none d-xl-table-cell">
                            <button class="btn btn-primary"
                                @click="mostrarFormularioVehiculo(vehiculo)">Actualizar</button>
                            <button class="btn btn-danger" @click="eliminarVehiculo(vehiculo.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p v-else>No hay vehículos disponibles</p>
        </div>
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
            showDatosVehiculo: true,

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
            this.showDatosVehiculo = false;
        },
        cerrarFormularioCliente() {
            this.showFormularioVehiculo = false;
            this.vehiculoObjeto = null;
        }
    },
};
</script>

<style>
div {
    margin-top: 20px;
    margin-bottom: 10px;
}

.btn-primary {

    margin-right: 20px;
}

.btn-danger {
    padding-right: 20px;
    text-align: center;
}

.container {
    width: 100%;
    max-width: 1500px;
}
</style>
