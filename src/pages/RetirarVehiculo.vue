<template>
  <div class="contenedor" id="ventana">

    <div id="divpag">
      <form class="formulario" @submit.prevent="buscar()">
        <legend>Retirar vehículo</legend>
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="idNum">Número de reserva: </span>
          <input type="number" class="form-control" aria-describedby="addon-wrapping" v-model="numero" required/>
        </div>
        <button type="submit" class="btn btn-primary" style="margin: 10px;">BUSCAR</button>
      </form>
      <div v-if="show" class="alert alert-primary" role="alert">
        {{txtnot}}
      </div>
      <div v-if="mostrarB">
        <table class="table">
          <thead class="table-dark">
            <tr>
              <th scope="col"></th>
              <th scope="col">Placa</th>
              <th class="d-none d-md-table-cell" scope="col">Modelo</th>
              <th scope="col">Estado</th>
              <th class="d-none d-lg-table-cell" scope="col">Fecha </th>
              <th scope="col">Reservado por</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Vehículo</th>
              <td class="table-info">{{ placa }}</td>
              <td  class="d-none d-md-table-cell">{{ modelo }}</td>
              <td class="table-info">{{ estado }}</td>
              <td class="d-none d-lg-table-cell">{{ fecha }}</td>
              <td class="table-info">{{ reservado }}</td>
            </tr>
          </tbody>
        </table>
      
        <div>
          <button @click="registrar" class="btn btn-primary" style="margin: 10px;">REGISTRAR RETIRO</button>
        </div>
        <div v-if="mostrarR" class="alert alert-primary" role="alert">
          {{ texto }}
        </div>
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
      show:false,
      texto: null,
      txtnot:""

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
      
      this.mostrarR = false;
      console.log(this.placa);
      if (this.estado === "ND" || data.placa ==null) {
        this.txtnot='No se encontró una reserva disponible. Intente con otra...';
        this.show=true;
        this.mostrarB=false;
      } else {
        this.show=false;
        this.mostrarB = true;
        
      }
    },
    async registrar() {
      this.texto = await registrarRetiro(this.numero)
      this.mostrarR = true;
    }


  }
}
</script>

<style scoped>
.contenedor {
  width: 500px;
}
h2 {
  font-size: 1.2rem;
}
@media screen and (min-width: 910px) {
  #ventana {
    min-width: 70vw;
    max-width: 70%;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>