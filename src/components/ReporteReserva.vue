<template>
    <div class="contenedor">
        <h1>REPORTE DE RESERVAS</h1>

        <label class="form-label">Fecha Inicio</label>
        <input class="form-control" v-model="fechaInicio" type="datetime-local">

        <label class="form-label">Fecha Fin</label>
        <input class="form-control" v-model="fechaFin" type="datetime-local">
        <br>
        <button class="btn btn-primary" @click="obtenerReporte">BUSCAR</button>

        <div v-if="mostrarMensaje2" class="tabla-reporte">
            <table class="table table-striped">
                <thead>
                    <tr class="table-dark">
                        <th>Cedula</th>
                        <th>Nombre cliente</th>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Estado Reserva</th>
                        <th class="d-none d-sm-table-cell">Fecha de inicio</th>
                        <th class="d-none d-md-table-cell">Fecha de finalización</th>
                        <th class="d-none d-lg-table-cell">Número de Reserva</th>
                        <th class="d-none d-lg-table-cell">Valor a Pagar Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reservas in listaReserva" :key="reservas.id"  :class="{ 'table-light': index % 10 !== 0 }">

                        <td>{{ reservas.cedulaCliente }}</td>
                        <td>{{ reservas.nombreCliente }}</td>
                        <td>{{ reservas.placa }}</td>
                        <td>{{ reservas.modelo }}</td>
                        <td>{{ reservas.marca }}</td>
                        <td>{{ reservas.disponible }}</td>
                        <td class="d-none d-sm-table-cell">{{ reservas.fechaInicio }}</td>
                        <td class="d-none d-md-table-cell">{{ reservas.fechaFin }}</td>
                        <td class="d-none d-lg-table-cell">{{ reservas.numero }}</td>
                        <td class="d-none d-lg-table-cell">{{ reservas.valorTotalPagar }}</td>


                    </tr>
                </tbody>

            </table>
        </div>
        <div v-if="mostrarMensaje">
            <h1>No se encontraron Reservas las fechas ingresadas</h1>
        </div>



    </div>



</template>

<script>

import { obtenerReporteFachada } from '@/helpers/clienteReporte'



export default {

    data() {
        return {
            fechaFin: null,
            fechaInicio: null,
            mostrarMensaje: false,
            mostrarMensaje2: false,


            listaReserva: [],
        }
    },


    methods: {

        async obtenerReporte() {

            let fechaInicioISO = new Date(this.fechaInicio).toISOString()
            fechaInicioISO = fechaInicioISO.substring(0, fechaInicioISO.length - 1);
            let fechaFinISO = new Date(this.fechaFin).toISOString();
            fechaFinISO = fechaFinISO.substring(0, fechaFinISO.length - 1);
            const reporte = await obtenerReporteFachada(fechaInicioISO, fechaFinISO);
            this.listaReserva = reporte
            if (fechaInicioISO === null) {
                this.mostrarMensaje = false
            }
            if (this.listaReserva.length != 0) {
                this.mostrarMensaje2 = true;
                this.mostrarMensaje = false
            } else {
                this.mostrarMensaje = true;
                this.mostrarMensaje2 = false
            }




        }




    }

}
</script>

<style>
.tabla-reporte {
    display: flex;
    justify-content: center;

}
</style>