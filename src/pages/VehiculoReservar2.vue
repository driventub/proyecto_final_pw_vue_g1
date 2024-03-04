<template>
    <div>
        <h2>Reservar Vehículo</h2>
        <form @submit.prevent="reservarVehiculo">
            <div>
                <label for="placa">Placa del Vehículo:</label>
                <input type="text" id="placa" v-model="placa" required>
            </div>
            <div>
                <label for="cedula">Cédula del Cliente:</label>
                <input type="text" id="cedula" v-model="cedula" required>
            </div>
            <div>
                <label for="fechaInicio">Fecha de Inicio:</label>
                <input type="date" id="fechaInicio" v-model="fechaInicio" required>
            </div>
            <div>
                <label for="fechaFin">Fecha de Fin:</label>
                <input type="date" id="fechaFin" v-model="fechaFin" required>
            </div>
            <div v-if="mostrarPago">
                <label for="numeroTarjeta">Número de Tarjeta de Crédito:</label>
                <input type="text" id="numeroTarjeta" v-model="numeroTarjeta" required>
            </div>
            <button type="submit">Reservar</button>
        </form>
        <p v-if="mensajeReserva">{{ mensajeReserva }}</p>
    </div>
</template>

<script>
import { reservarVehiculoFachada } from "../helpers/clienteCliente"

export default {
    data() {
        return {
            placa: '',
            cedula: '',
            fechaInicio: '',
            fechaFin: '',
            numeroTarjeta: '',
            mensajeReserva: ''
        };
    },
    methods: {
        async reservarVehiculo() {

            const fechaInicioDate = new Date(this.fechaInicio);
            const fechaFinDate = new Date(this.fechaFin);

            const fechaInicioFormatted = `${fechaInicioDate.getFullYear()}-${('0' + (fechaInicioDate.getMonth() + 1)).slice(-2)}-${('0' + fechaInicioDate.getDate()).slice(-2)}T${('0' + fechaInicioDate.getHours()).slice(-2)}:${('0' + fechaInicioDate.getMinutes()).slice(-2)}:${('0' + fechaInicioDate.getSeconds()).slice(-2)}`;
            const fechaFinFormatted = `${fechaFinDate.getFullYear()}-${('0' + (fechaFinDate.getMonth() + 1)).slice(-2)}-${('0' + fechaFinDate.getDate()).slice(-2)}T${('0' + fechaFinDate.getHours()).slice(-2)}:${('0' + fechaFinDate.getMinutes()).slice(-2)}:${('0' + fechaFinDate.getSeconds()).slice(-2)}`;


            const reserva = {
                placa: this.placa,
                ciCliente: this.cedula,
                fechaInicio: fechaInicioFormatted,
                fechaFin: fechaFinFormatted,
                numeroTarjeta: this.numeroTarjeta
            };

            try {
                const mensaje = await reservarVehiculoFachada(reserva);
                this.mensajeReserva = mensaje;
            } catch (error) {
                console.error("Error al reservar vehículo:", error);
                this.mensajeReserva = "Error al realizar la reserva. Por favor, inténtelo de nuevo más tarde.";
            }
        }
    }
};
</script>