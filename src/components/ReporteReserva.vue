<template>
  <div >
        <h1>REPORTE DE RESERVAS</h1>

        <p>Fecha Inicio</p>
        <input v-model="fechaInicio" type="datetime-local">

        <p>Fecha Fin</p>
        <input v-model="fechaFin" type="datetime-local">
        <br>
        <button @click="obtenerReporte" >BUSCAR</button>

        <div v-if="mostrarMensaje2" class="tabla-reporte">
            <table>
                    <tr>
                        <th>Cedula</th>
                        <th>Nombre cliente</th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Estado Reserva</th>
                        <th>Fecha de inicio</th>
                        <th>Fecha de finalización</th>
                        <th>Número de Reserva</th>
                        <th>Valor a Pagar Total</th>     
                    </tr>
                    <tr v-for="reservas in listaReserva" :key="reservas.id">
                        
                        <td>{{ reservas.cedulaCliente}}</td>
                        <td>{{ reservas.nombreCliente }}</td>
                        <td>{{ reservas.placa }}</td>
                        <td>{{ reservas.modelo }}</td>
                        <td>{{ reservas.marca }}</td>
                        <td>{{ reservas.disponible}}</td>
                        <td>{{ reservas.fechaInicio}}</td>
                        <td>{{ reservas.fechaFin}}</td>
                        <td>{{ reservas.numero}}</td>
                        <td>{{ reservas.valorTotalPagar}}</td>
                        
                        
                    </tr>
                </table>
        </div>
        <div v-if="mostrarMensaje">
            <h1>No se encontraron Reservas las fechas ingresadas</h1>
        </div>



  </div>



</template>

<script>

import {obtenerReporteFachada} from '@/helpers/clienteReporte'



export default {

    data(){
        return{
             fechaFin:null,
             fechaInicio:null,
             mostrarMensaje:false,
             mostrarMensaje2:false,


            listaReserva:[],
        }
    },


    methods:{
 
        async obtenerReporte(){
            
            let fechaInicioISO = new Date(this.fechaInicio).toISOString()
            fechaInicioISO = fechaInicioISO.substring(0, fechaInicioISO.length - 1);
            let fechaFinISO = new Date(this.fechaFin).toISOString();
            fechaFinISO = fechaFinISO.substring(0, fechaFinISO.length - 1);
            const reporte = await obtenerReporteFachada(fechaInicioISO, fechaFinISO);
            this.listaReserva = reporte
            if(fechaInicioISO === null){
                this.mostrarMensaje = false
            }
            if(this.listaReserva.length != 0){
                this.mostrarMensaje2 =true;
                this.mostrarMensaje=false
            }else{
                this.mostrarMensaje=true;
                this.mostrarMensaje2=false
            }
           
   

            
        }
        

       

    }

}
</script>

<style>
.tabla-reporte{
    display: flex;
    justify-content: center;

}
</style>