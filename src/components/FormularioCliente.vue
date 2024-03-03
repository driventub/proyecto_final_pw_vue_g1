<template>
    <div>
        <h1>Actualizar Datos del Cliente</h1>
        <form @submit.prevent="actualizarCliente">

            <div>
                <label for="cedula">Cédula:</label>
                <input v-model="cliente.cedula" type="text" id="cedula"  />
            </div>

            <div>
                <label for="nombre">Nombre:</label>
                <input v-model="cliente.nombre" type="text" id="nombre" required />
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input v-model="cliente.apellido" type="text" id="apellido" required />
            </div>
            <div>
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input v-model="cliente.fechaNacimiento" type="date" id="fechaNacimiento" required />
            </div>
            <div>
                <label for="genero">Género:</label>
                <select v-model="cliente.genero" id="genero" required>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <button type="submit">Actualizar Datos</button>
        </form>
    </div>
</template>
  
<script>
import { actualizarFachadaCliente } from "@/helpers/clienteClientes";

export default {
    data() {
        return {
            cliente: {
                cedula: "", 
                nombre: "",
                apellido: "",
                fechaNacimiento: "",
                genero: ""
            }
        };
    },
    methods: {
        async actualizarCliente() {
            try {
                const { cedula, ...clienteActualizado } = this.cliente; 
                clienteActualizado.fechaNacimiento = new Date(clienteActualizado.fechaNacimiento);

                await actualizarFachadaCliente(cedula, clienteActualizado); 

                alert("Datos del cliente actualizados correctamente");
            } catch (error) {
                console.error("Error al actualizar datos del cliente:", error);
                alert("Error al actualizar datos del cliente. Por favor, inténtelo de nuevo.");
            }
        }
    }
};
</script>

<style></style>
