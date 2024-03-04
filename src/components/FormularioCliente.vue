<template>
    <div>
        <h2>Lista de Clientes</h2>
        <div style="margin: 20px;">
            <label class="form-label" for="apellido">Buscar por Apellido:</label>
            <input class="form-control" type="text" id="apellido" v-model="apellidoBuscado">
            
        </div>
        <table v-if="clientesMostrados.length" class="table table-striped">
            <thead>
                <tr class="table-dark">
                    <th>Cédula</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Género</th>
                    <th>Tarjeta de Credito</th>
                    <th>Acciones</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(cliente, index) in clientesMostrados" :key="cliente.id" :class="{ 'table-light': index % 10 !== 0 }">
                    <td>{{ cliente.cedula }}</td>
                    <td>{{ cliente.nombre }}</td>
                    <td>{{ cliente.apellido }}</td>
                    <td>{{ cliente.fechaNacimiento }}</td>
                    <td>{{ cliente.genero }}</td>
                    <td>{{ cliente.tarjetaCredito }}</td>
                    <td>
                        <button class="btn btn-primary" @click="mostrarFormularioCliente(cliente)">Actualizar</button>
                        <button class="btn btn-danger" @click="eliminarCliente(cliente.id)">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else>No hay clientes disponibles</p>


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
        },
        cerrarFormularioCliente() {
            this.showFormularioCliente = false;
            this.clienteObjeto = null;
        }
    }
};
</script>