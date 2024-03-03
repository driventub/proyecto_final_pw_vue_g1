<template>
    <div>
        <h1>Registrarse como Cliente</h1>
        <form @submit.prevent="registrarCliente">
            <div>
                <label for="cedula">Cédula:</label>
                <input v-model="cliente.cedula" type="text" id="cedula" />
            </div>
            <div>
                <label for="nombre">Nombre:</label>
                <input v-model="cliente.nombre" type="text" id="nombre" />
            </div>
            <div>
                <label for="apellido">Apellido:</label>
                <input v-model="cliente.apellido" type="text" id="apellido" />
            </div>
            <div>
                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input v-model="cliente.fechaNacimiento" type="date" id="fechaNacimiento" placeholder="YYYY-MM-DD" />
            </div>

            <div>
                <label for="genero">Género:</label>
                <select v-model="cliente.genero" id="genero">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            <div>
                <label for="tipoRegistro">Tipo de Registro:</label>
                <input v-model="cliente.tipoRegistro" type="text" id="tipoRegistro" />
            </div>
            <div>
                <label for="tarjetaCredito">Tarjeta de Crédito:</label>
                <input v-model="cliente.tarjetaCredito" type="text" id="tarjetaCredito" />
            </div>
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>
  
<script>
import { insertarFachada } from "@/helpers/clienteClientes";

export default {
    data() {
        return {
            cliente: {
                cedula: "",
                nombre: "",
                apellido: "",
                fechaNacimiento: "",
                genero: "",
                tipoRegistro: "",
                tarjetaCredito: ""
            }
        };
    },
    methods: {
        async registrarCliente() {
            try {

                this.cliente.fechaNacimiento = new Date(this.cliente.fechaNacimiento);

                await insertarFachada(this.cliente);
                alert("Cliente registrado correctamente");
            } catch (error) {
                console.error("Error al registrar cliente:", error);
                alert("Error al registrar cliente. Por favor, inténtelo de nuevo.");
            }
        }
    }
};
</script>
  
<style scoped>
/* Estilos específicos del componente */
</style>
  