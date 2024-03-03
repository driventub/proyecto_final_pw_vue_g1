<template>
    <div>
        <h1>Reserva de Vehículo</h1>
        <form @submit.prevent="realizarReserva">
            <div>
                <label for="placa">Placa del Vehículo:</label>
                <input v-model="placa" type="text" id="placa" required />
            </div>
            <div>
                <label for="ciCliente">Cédula del Cliente:</label>
                <input v-model="ciCliente" type="text" id="ciCliente" required />
            </div>
            <input v-model="fechaInicio" type="datetime-local" id="fechaInicio" required />
            <input v-model="fechaFin" type="datetime-local" id="fechaFin" required />

            <div >
                <label for="numeroTarjeta">Número de Tarjeta de Crédito:</label>
                <input v-model="numeroTarjeta" type="text" id="numeroTarjeta" required />
            </div>
            <button type="submit">Reservar Vehículo</button>
        </form>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>
  
<script>
import { reservarVehiculoFachada } from "@/helpers/clienteVehiculo";

export default {
    data() {
        return {
            placa: "",
            ciCliente: "",
            fechaInicio: "",
            fechaFin: "",
            numeroTarjeta: "",
            vehiculoDisponible: true,
            mensaje: "",
            disponible:true
        };
    },
    methods: {
        async realizarReserva() {
            try {
                const fechaInicioDate = new Date(this.fechaInicio);
                const fechaFinDate = new Date(this.fechaFin);

                const fechaInicioFormatted = `${fechaInicioDate.getFullYear()}-${('0' + (fechaInicioDate.getMonth() + 1)).slice(-2)}-${('0' + fechaInicioDate.getDate()).slice(-2)}T${('0' + fechaInicioDate.getHours()).slice(-2)}:${('0' + fechaInicioDate.getMinutes()).slice(-2)}:${('0' + fechaInicioDate.getSeconds()).slice(-2)}`;
                const fechaFinFormatted = `${fechaFinDate.getFullYear()}-${('0' + (fechaFinDate.getMonth() + 1)).slice(-2)}-${('0' + fechaFinDate.getDate()).slice(-2)}T${('0' + fechaFinDate.getHours()).slice(-2)}:${('0' + fechaFinDate.getMinutes()).slice(-2)}:${('0' + fechaFinDate.getSeconds()).slice(-2)}`;

                const respuesta = await reservarVehiculoFachada({
                    placa: this.placa,
                    ciCliente: this.ciCliente,
                    fechaInicio: fechaInicioFormatted,
                    fechaFin: fechaFinFormatted,
                    numeroTarjeta: this.numeroTarjeta,
                });

                console.log(respuesta)

                if (!respuesta ==="El vehículo de placa: " + this.placa + " no está disponible") {
                    this.mensaje = `¡Reserva realizada con éxito! Número de reserva: ${respuesta.numeroReserva}`;
                    console.log(respuesta)
                } else {
                    this.mensaje = "El vehículo no está disponible en las fechas seleccionadas.";
                    this.vehiculoDisponible = false;
                    console.log(respuesta)
                }
            } catch (error) {
                console.error("Error al realizar la reserva:", error);
                this.mensaje = "Error al realizar la reserva. Por favor, inténtelo de nuevo.";
                console.log(respuesta)
            }
        },


    },
};
</script>

<style>
/* Estilos CSS si es necesario */
</style>
  