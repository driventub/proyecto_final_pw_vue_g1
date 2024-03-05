<template>
  <div class="contenedor">

    <div id="divpag">
      <form>
        <legend>Retirar vehículo</legend>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idNum">Número de reserva: </span>
          <input type="text" class="form-control" aria-describedby="addon-wrapping" v-model="numero" />
        </div>
      </form>
      <div>
        <button @click="buscar" class="btn btn-primary" style="margin-top: 10px;">BUSCAR</button>
      </div>
      <div v-if="mostrarB">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha </th>
              <th scope="col">Reservado por</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Vehículo</th>
              <td class="table-info">{{ placa }}</td>
              <td class="table-info">{{ modelo }}</td>
              <td class="table-info">{{ estado }}</td>
              <td class="table-info">{{ fecha }}</td>
              <td class="table-info">{{ reservado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button v-if="mostrarButon" @click="registrar" class="btn btn-outline-info">REGISTRAR RETIRO</button>
      </div>
      <div v-if="mostrarR" class="alert alert-primary" role="alert">
        {{ texto }}
      </div>
    </div>
  </div>

</template>

<script>
import { buscarVehiculoReservado, registrarRetiro } from "../helpers/clienteEmpleados"
import NavarEmpleado from "../components/NavBar.vue"
export default {
  components: {
    NavarEmpleado

  },
  data() {
    return {
      numero: null,
      placa: null,
      modelo: null,
      estado: null,
      fecha: null,
      reservado: null,
      mostrarB: false,
      mostrarR: false,
      mostrarButon: false,

      texto: null

    };

  },
  methods: {
    async buscar() {
      const data = await buscarVehiculoReservado(this.numero)
      this.placa = data.placa;
      this.modelo = data.modelo;
      this.estado = data.estado;
      this.fecha = data.fecha;
      this.reservado = data.ciCliente;
      this.mostrarB = true;
      this.mostrarR = false;
      console.log(this.placa);
      if (this.estado === "ND" || data.placa ==null) {
        this.mostrarButon = false
      } else {
        this.mostrarButon = true
      }
    },
    async registrar() {
      this.texto = await registrarRetiro(this.numero)
      this.mostrarR = true;
    }


  }
}
</script>

<style></style>