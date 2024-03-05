<template>
    <div class="container">
        <div v-if="showDatosCliente">
            <h2>Lista de Clientes</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <label class="form-label" for="apellido">Buscar por Apellido:</label>
                    <input class="form-control" type="text" id="apellido" v-model="apellidoBuscado">
                    
                </div>
            </div>
            <table v-if="clientesMostrados.length" class="table table-striped">
                <thead>
                    <tr class="table-dark">
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th class="d-none d-sm-table-cell">Fecha de Nacimiento</th>
                        <th class="d-none d-md-table-cell">Género</th>
                        <th class="d-none d-lg-table-cell">Tarjeta de Crédito</th>
                        <th class="d-none d-lg-table-cell">Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cliente, index) in clientesMostrados" :key="cliente.id"
                        :class="{ 'table-light': index % 10 !== 0 }">
                        <td>{{ cliente.cedula }}</td>
                        <td>{{ cliente.nombre }}</td>
                        <td>{{ cliente.apellido }}</td>
                        <td class="d-none d-sm-table-cell">{{ cliente.fechaNacimiento }}</td>
                        <td class="d-none d-md-table-cell">{{ cliente.genero }}</td>
                        <td class="d-none d-lg-table-cell">{{ cliente.tarjetaCredito }}</td>
                        <td class="d-none d-lg-table-cell">
                            <button class="btn btn-primary"
                                @click="mostrarFormularioCliente(cliente)">Actualizar</button>
                            <button class="btn btn-danger" @click="eliminarCliente(cliente.id)">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p v-else>No hay clientes disponibles</p>

        </div>
        <div v-if="showFormularioCliente">

            <ActualizarCliente :propsClientes="clienteObjeto" @cerrar="cerrarFormularioCliente" />
        </div>
    </div>
</template>

<script>
import { verClientesFachada, eliminarClienteFachada } from "@/helpers/clienteCliente";
import ActualizarCliente from "@/components/ActualizarClienteEmpleados.vue"

export default {
    components: {
        ActualizarCliente
    },
    data() {
        return {
            clientes: [],
            apellidoBuscado: '',
            showFormularioCliente: false,
            clienteObjeto: null,
            showDatosCliente: true

        };
    },
    computed: {
        clientesMostrados() {
            if (!this.apellidoBuscado) {
                return this.clientes;
            } else {
                return this.clientes.filter(cliente => cliente.apellido && cliente.apellido.toLowerCase().includes(this.apellidoBuscado.toLowerCase()));
            }
        }
    },
    mounted() {
        this.verClientes();
    },
    methods: {
        async verClientes() {
            this.clientes = await verClientesFachada();
        },
        async buscarClientes() {
            this.clientes = await verClientesFachada();
        },
        async eliminarCliente(id) {
            try {
                await eliminarClienteFachada(id);
                await this.verClientes();
            } catch (error) {
                console.error('Error al eliminar cliente:', error);
            }
        },
        mostrarFormularioCliente(cliente) {
            this.clienteObjeto = {
                cedula: cliente.cedula,
                nombre: cliente.nombre,
                apellido: cliente.apellido,
                id: cliente.id,
                fechaNacimiento: cliente.fechaNacimiento,
                genero: cliente.genero,
                tipoRegistro: cliente.tipoRegistro,
                tarjetaCredito: cliente.tarjetaCredito


            };
            this.showFormularioCliente = true;
            this.showDatosCliente = false;
        },
        cerrarFormularioCliente() {
            this.showFormularioCliente = false;
            this.clienteObjeto = null;
        }
    }
    
};
</script>

<style scoped>
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