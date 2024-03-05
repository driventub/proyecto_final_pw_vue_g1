<template>
  <div class="contenedor" id="formCliente">
    <div class="titulo">
        <h2>Ingresar un Cliente</h2>
    </div>
    <form class="formulario" @submit.prevent="registrarCliente">
        <div class="input-group flex-nowrap">
            <span for="nombre" class="input-group-text" required>Nombre</span>
            <input v-model="cliente.nombre" type="text" class="form-control" aria-describedby="addon-wrapping" id="nombre" required>
        </div>
        <div class="input-group flex-nowrap">
            <span for="apellido" class="input-group-text" required>Apellido</span>
            <input v-model="cliente.apellido" type="text" class="form-control" aria-describedby="addon-wrapping" id="apellido" required>
        </div>
        <div class="input-group flex-nowrap">
            <span for="cedula" class="input-group-text" required>Cedula</span>
            <input v-model="cliente.cedula" type="text" class="form-control" aria-describedby="addon-wrapping" id="cedula" required>
        </div>
        <div class="input-group flex-nowrap">
            <span for="fechaNacimiento" class="input-group-text">Fecha de nacimiento</span>
            <input v-model="cliente.fechaNacimiento" type="date" class="form-control" aria-describedby="addon-wrapping" id="fechaNacimiento">
        </div>
        <div class="input-group flex-nowrap" style="margin-top:10px ;">
            <label for="genero" class="input-group-text">Genero</label>
                <select v-model="cliente.genero" id="genero" class="form-select" >
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
                tipoRegistro:"E"
            }
        };
    },
    methods: {
        async registrarCliente() {
            this.cliente.fechaNacimiento = new Date(this.cliente.fechaNacimiento);
                var msj = await insertarFachada(this.cliente); 
                alert(msj);
        }
    }
    

};
</script>

<style scoped>


h2{
    font-size: 1rem;
}

input {
    margin-right: 10px;
    margin-top: 10px;
}

span {
    margin-top: 10px;
}

button {
    margin: 10px;
}
@media screen and (min-width: 900px) {
    #formCliente{
        min-width: 70vw;
        max-width: 70%;
    }
    h2{
        font-size: 1.5rem;
    }
}

</style>