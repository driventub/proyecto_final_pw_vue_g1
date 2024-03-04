<template>
    <div class="contenedor">
        <div class="Cedula" v-if="show">
            <h2>¿Cuál usuario desea actualizar?</h2>
            <form @submit.prevent="buscarCedula()">
            <fieldset >
                <div class="mb-3">
                    <label for="cedula" class="form-label" >Cedula</label>
                    <input v-model="cedula" type="text" class="form-control" id="cedula" required>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </fieldset>
        </form>
        </div>


        <div class="formulario" v-else>
            <div class="titulo">
                <h2>Actualicemos su cuenta personal.</h2>
            </div>
            <form @submit.prevent="actualizarCliente">
                <fieldset >
                    <div class="mb-3">
                        <label for="nombre" class="form-label" >Nombre</label>
                        <input v-model="cliente.nombre" type="text" class="form-control" id="nombre" required>
                    </div>
                    <div class="mb-3">
                        <label for="apellido" class="form-label" >Apellido</label>
                        <input v-model="cliente.apellido" type="text" class="form-control" id="apellido" required>
                    </div>
                    <div class="mb-3">
                        <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
                        <input v-model="cliente.fechaNacimiento" type="datetime-local" class="form-control" id="fechaNacimiento">
                    </div>
                    <div class="mb-3">
                        <label for="genero" class="form-label">Genero</label>
                            <select v-model="cliente.genero" id="genero" class="form-select" >
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Actualizar</button>
                </fieldset>
            </form>
            <button @click="regresar()" class="btn">¿No es usted?</button>
        </div>
    </div>
</template>
  
<script>
import { actualizarFachadaCliente } from "@/helpers/clienteCliente";
import { buscarFachada } from "@/helpers/clienteCliente"

export default {
    data() {
        return {
            show:true,
            cedula:null,
            cliente: {
                cedula: null,
                nombre: null,
                apellido: null,
                fechaNacimiento: null,
                genero: null
            }
        };
    },
    methods: {
        async buscarCedula(){
            this.cliente = await buscarFachada(this.cedula);
            if(this.cliente.cedula!=null)this.show = false; 
            else{ 
                alert("Tenemos problemas en encontrar sus credenciales... \n Vuelva a intentar =)");
                this.cedula=null;
            } 
        },
        async actualizarCliente() {
            this.cliente.fechaNacimiento = new Date(this.cliente.fechaNacimiento);
            const msj = await actualizarFachadaCliente(this.cliente);
            alert(msj)
            this.show = true;    
        },
        regresar(){
            this.show = true;
            this.cedula = null;
        }
    }
};
</script>

<style>
</style>
