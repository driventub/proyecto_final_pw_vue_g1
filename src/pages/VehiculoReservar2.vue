<template>
    <div>
        <div class="contenedor" id="ventana">
            <form @submit.prevent="buscar">
                <legend>Reservar vehículo</legend>
                <div class="mb-3">
                    <label for="placa" class="form-label" id="idPlaca">Placa del vehículo:</label>
                    <input id="placa" type="text" class="form-control" aria-describedby="addon-wrapping" v-model="placa" required/>
                </div>
                <div class="mb-3">
                    <label for="cedula" class="form-label" id="idCedula">Cédula:</label>
                    <input id="cedula" type="text" class="form-control" aria-describedby="addon-wrapping" v-model="cedula" required/>
                </div>
                <div class="mb-3">
                    <label for="fechaI" class="form-label" id="idFechaI">Fecha inicio:</label>
                    <input id="fechaI" type="datetime-local" class="form-control" aria-describedby="addon-wrapping"
                        v-model="fechaInicio" required/>
                </div>
                <div class="mb-3">
                    <label for="fechaf" class="form-label" id="idFechaF">Fecha final:</label>
                    <input id="fechaf" type="datetime-local" class="form-control" aria-describedby="addon-wrapping"
                        v-model="fechaFinal" required/>
                </div>
                <button v-if="show" type="submit" class="btn btn-primary">BUSCAR</button>
            </form>
            <br />
            
            <div v-if="mostrarD" class="alert alert-primary" role="alert">
                {{ texto }}
            </div>

            <div v-if="mostrarT" class="mb-3">
                <label for="tarjeta" class="form-label" id="idTarjeta">Tarjeta de credito:</label>
                <input id="tarjeta" type="text" class="form-control" aria-describedby="addon-wrapping" v-model="tarjeta" />
            </div>
            <br />

            <button v-if="!show" @click="reservar" class="btn btn-primary" style="margin: 10px;">Reservar</button>
            <div v-if="mostrarR" class="alert alert-primary" role="alert">
                {{ texto2 }}
            </div>
            <button v-if="otro" @click="resetear()" class="btn">¿Reservar otro Vehículo?</button>
        </div>
    </div>
</template>

<script>
import NavarCliente from "../components/NavBar.vue";
import { busquedaVehiculoFecha, reservarVehiculo } from "../helpers/clienteCliente";
export default {
    components: {
        NavarCliente,
    },
    data() {
        return {
            placa: null,
            cedula: null,
            fechaInicio: null,
            fechaFinal: null,
            tarjeta: null,
            mostrarD: false,
            mostrarR: false,
            texto: null,
            texto2: null,
            mostrarT: null,
            show:true,
            otro:false
        };
    },
    methods: {
        async buscar() {
            this.texto = await busquedaVehiculoFecha(this.placa,this.fechaInicio,this.fechaFinal);
            console.log(this.texto);
            this.mostrarD = true;
            if(this.texto!=""){
                if (this.texto.includes('no está disponible')) {
                    this.mostrarR = false;
                } else {
                    this.show = false;
                    this.mostrarT = true;
                    this.mostrarR = false;
                }
            }else{
                this.texto = "No se ecuenta la placa del Vehículo.\nIntente con otra...."
            }
            

        },
        async reservar() {
            const reser = {
                placa: this.placa,
                fechaInicio: this.fechaInicio,
                fechaFin: this.fechaFinal,
                ciCliente: this.cedula,
                numeroTarjeta: this.tarjeta
            }
            console.log(this.fechaInicio);
            console.log(this.fechaFinal);
            this.texto2 = await reservarVehiculo(reser);
            this.mostrarR = true;
            if(this.texto2.includes('Vehiculo reservado correctamente')){
                this.otro = true;
            }
            
        },
        resetear(){
            this.placa= null;
            this.cedula= null;
            this.fechaInicio= null;
            this.fechaFinal= null;
            this.tarjeta= null;
            this.mostrarD= false;
            this.mostrarR= false;
            this.texto= null;
            this.texto2= null;
            this.mostrarT= null;
            this.show=true;
            this.otro=false;
        }
    },
};
</script>

<style scoped >
.contenedor{
    width: 70vw;
}
@media screen and (min-width: 900px) {
    #ventana{
        min-width: 70vw;
        max-width: 70%;
    }
    h2{
        font-size: 2rem;
    }
}
</style>