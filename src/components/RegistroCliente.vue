<template>
    <div class="contenedor" id="ventana">
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
                <input v-model="cliente.fechaNacimiento" type="date" class="form-control" id="fechaNacimiento" required>
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
                const response = await insertarFachada(this.cliente);
                console.log(response);
                this.cliente.cedula = null;
                this.cliente.nombre = null;
                this.cliente.apellido = null;
                this.cliente.fechaNacimiento = null;
                this.cliente.genero = null;
                alert(response);
            } catch (error) {
                alert("La cédula ingresada ya se encuentra ingresada en la sistema");
            }
        },
    }


};
</script>

<style scoped>
.contenedor{
    width: 70vw;
}
h2{
    font-size: 2rem;
}

@media screen and (min-width: 900px) {
    #ventana{
        min-width: 70vw;
        max-width: 70%;
    }
    h2{
        font-size: 1.5rem;
    }
}

</style>