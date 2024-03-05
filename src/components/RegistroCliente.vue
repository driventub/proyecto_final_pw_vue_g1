<template>
    <div class="contenedor">
        <div class="titulo">
            <h1>Registro</h1>
        </div>
        <form class="formulario" @submit.prevent="registrarCliente">
            <div class="mb-3">
                <label for="nombre" class="form-label" required>Nombre</label>
                <input v-model="cliente.nombre" type="text" class="form-control" id="nombre" required>
            </div>
            <div class="mb-3">
                <label for="apellido" class="form-label" required>Apellido</label>
                <input v-model="cliente.apellido" type="text" class="form-control" id="apellido" required>
            </div>
            <div class="mb-3">
                <label for="cedula" class="form-label" required>Cedula</label>
                <input v-model="cliente.cedula" type="text" class="form-control" id="cedula" required>
            </div>
            <div class="mb-3">
                <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
                <input v-model="cliente.fechaNacimiento" type="date" class="form-control" id="fechaNacimiento">
            </div>
            <div class="mb-3">
                <label for="genero" class="form-label">Genero</label>
                <select v-model="cliente.genero" id="genero" class="form-select">
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
            </div>


            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
import { insertarFachada } from "@/helpers/clienteCliente";
export default {
    data() {
        return {
            cliente: {
                cedula: null,
                nombre: null,
                apellido: null,
                fechaNacimiento: null,
                genero: null,
                tipoRegistro: "C"
            }
        };
    },
    methods: {
        async registrarCliente() {
            try {
                this.cliente.fechaNacimiento = new Date(this.cliente.fechaNacimiento);
                const { status, msg } = await insertarFachada(this.cliente);
                console.log(msg);
                if (status === 200) {
                    alert("Cliente registrado correctamente!");
                    this.cliente.cedula = null;
                    this.cliente.nombre = null;
                    this.cliente.apellido = null;
                    this.cliente.fechaNacimiento = null;
                    this.cliente.genero = null;

                } else if (status === 404) {
                    alert("Cliente no encontrado.");
                } else {
                    alert("Ocurrió un error: " + msg);
                }
            } catch (error) {
                console.error("Error interno:", error);

            }
        }
    }


};
</script>

<style scoped></style>