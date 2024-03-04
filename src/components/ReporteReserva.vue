<template>
  <div>
        <h1>REPORTE DE RESERVAS</h1>

        <p>Fecha Inicio</p>
        <input v-model="fechaInicio" type="datetime-local">

        <p>Fecha Fin</p>
        <input v-model="fechaFin" type="datetime-local">
        <br>
        <button @click="obtenerReporte" >BUSCAR</button>



  </div>
</template>

<script>

import {obtenerReporteFachada} from '@/helpers/clienteReporte'

export default {

    data(){
        return{
            // fechaFin:null,
            // fechaInicio:null
            fechaFin:'2024-01-11 00:00:00',
            fechaInicio:'2024-01-01 00:00:00',


            datosCliente:[],
            datosVehiculo:[]
        }
    },


    methods:{

        async obtenerReporte(){

            let fechaInicioISO = new Date(this.fechaInicio).toISOString()
            fechaInicioISO = fechaInicioISO.substring(0, fechaInicioISO.length - 1);

            let fechaFinISO = new Date(this.fechaFin).toISOString();
            fechaFinISO = fechaFinISO.substring(0, fechaFinISO.length - 1);
            console.log(fechaInicioISO);
            console.log(fechaFinISO);
            const reporte = await obtenerReporteFachada(fechaInicioISO, fechaFinISO);
            console.log(reporte);
           

            reporte.forEach(element => {

                let cedula = element.cedulaCliente;
                this.consultarDatosCliente(cedula);
                console.log(element.cedulaCliente);

                let placa = element.placa;               
                console.log(element.placa);
                this.consultarDatosVehiculo(placa);

            }); 

        }
        ,

        consultarDatosCliente(cedula){

            //llamar al metodo de buscar cliente por cedula y agregar a la lista los datos reqeridos

        },

        consultarDatosVehiculo(placa){

        }

    }

}
</script>

<style>

</style>