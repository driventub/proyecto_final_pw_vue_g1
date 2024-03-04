<template>
  <div class="contenedor">
    <div class="titulo">
        <h2>Ingresar un Vehículo.</h2>
    </div>
    <form class="formulario" @submit.prevent="registrarVehiculo()">
        <div class="mb-3">
            <label for="placa" class="form-label" required>Placa</label>
            <input v-model="vehiculo.placa" type="text" class="form-control" id="placa" required>
        </div>
        <div class="mb-3">
            <label for="marca" class="form-label" required>Marca</label>
            <input v-model="vehiculo.marca" type="text" class="form-control" id="marca" required>
        </div>
        <div class="mb-3">
            <label for="modelo" class="form-label" required>Modelo</label>
            <input v-model="vehiculo.modelo" type="text" class="form-control" id="modelo" required>
        </div>
        <div class="mb-3">
            <label for="anio" class="form-label" required>Año de fabricación</label>
            <input v-model="vehiculo.anioFablicacion" type="text" class="form-control" id="anio" >
        </div>
                <div class="mb-3">
            <label for="paisF" class="form-label">País de fabricación</label>
                <select v-model="vehiculo.paisFabricacion" id="paisF" class="form-select" >
                    <option value="China">China</option>
                    <option value="Estados Unidos">Estados Unidos</option>
                    <option value="Japón">Japón</option>
                    <option value="Alemania">Alemania</option>
                    <option value="India">India</option>
                    <option value="Corea del Sur">Corea del Sur</option>
                    <option value="Brasil">Brasil</option>
                    <option value="México">México</option>
                    <option value="España">España</option>
                    <option value="Francia">Francia</option>
                    <option value="otro">Otro</option>
                </select>
        </div>
        <div class="mb-3">
            <label for="cilindraje" class="form-label" required>Cilindraje: {{vehiculo.cilindraje}}</label>
            <input v-model="vehiculo.cilindraje" type="range" min="1" max="5.2" step="0.3" class="form-range" id="cilindraje" >
        </div>
        <div class="mb-3">
            <label for="precio" class="form-label" required>Avalúo</label>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input v-model="vehiculo.precioVehiculo" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="precio" required>
                <span class="input-group-text">.00</span>
            </div>
        </div>
        <div class="mb-3">
            <label for="precio" class="form-label" required>Valor por día</label>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input v-model="vehiculo.valorDia" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="precio" required>
                <span class="input-group-text">.00</span>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
import { insertarFachada } from "@/helpers/clienteEmpleados";
export default {
     data() {
        return {
            vehiculo: {
                placa: null,
                modelo: null,
                marca: null,
                anioFablicacion: null,
                paisFabricacion: null,
                cilindraje: null,
                precioVehiculo: null,
                valorDia: null,
                disponible: "D"
            }
        };
    },
    methods: {
        async registrarVehiculo() {
            console.log(this.vehiculo);
                var msj = await insertarFachada(this.vehiculo); 
                alert(msj);
        }
    }
    

};
</script>

<style scoped>


</style>