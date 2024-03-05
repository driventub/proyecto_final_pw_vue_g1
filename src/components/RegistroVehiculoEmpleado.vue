<template>
  <div class="contenedor">
    <div class="titulo">
        <h2>Ingresar un Vehículo.</h2>
    </div>
    <form class="formulario" @submit.prevent="registrarVehiculo()">
        <div class="input-group flex-nowrap">
            <span class="input-group-text" required>Placa</span>
            <input v-model="vehiculo.placa" type="text" class="form-control" id="placa" required>
        </div>
        <div class="input-group flex-nowrap">
            <span class="input-group-text" required>Marca</span>
            <input v-model="vehiculo.marca" type="text" class="form-control" id="marca" required>
        </div>
        <div class="input-group flex-nowrap">
            <span class="input-group-text" required>Modelo</span>
            <input v-model="vehiculo.modelo" type="text" class="form-control" id="modelo" required>
        </div>
        <div class="input-group flex-nowrap">
            <span class="input-group-text" required>Año de fabricación</span>
            <input v-model="vehiculo.anioFablicacion" type="text" class="form-control" id="anio" >
        </div>
        <div class="input-group flex-nowrap" style="margin-top: 10px;">
            <label for="paisF" class="input-group-text" >País de fabricación</label>
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
        <div class="input-group flex-nowrap">
            <span class="input-group-text" style="min-width: 120px;" required >Cilindraje: {{vehiculo.cilindraje}}</span>
            <input v-model="vehiculo.cilindraje" type="range" min="1" max="5.2" step="0.3" class="form-range" id="cilindraje" style="margin: 12px  10px;">
        </div>
        <div >
            
            <div class="input-group flex-nowrap">
                <span class="input-group-text" >Avalúo</span>
                <span class="input-group-text">$</span>
                <input v-model="vehiculo.precioVehiculo" type="text" class="form-control" aria-label="Amount (to the nearest dollar)" id="precio" required>
                <span class="input-group-text">.00</span>
            </div>
        </div>
        <div class="input-group flex-nowrap">
            
            <div class="input-group mb-3">
                <span class="input-group-text" >Valor por día</span>
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
            try {
                const response = await insertarFachada(this.vehiculo);
                alert(response)
            } catch (error) {
                alert("La placa ingresada ya se encuentra ingresada en la sistema");
            }
        }
    }
    

};
</script>

<style scoped>
#divpag {
    height: fit-content;
    width: fit-content;
    margin: auto;
    text-align: center;
}
.input-group flex-nowrap{
    margin-top:10px ;
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

</style>