<template>
  <div id="ventana">
    <h1 class="mb-6">Actualizar Datos del Vehículo</h1>
    <form @submit.prevent="actualizarVehiculo">
      <div>
        <label class="form-label" for="id">ID:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.id"
          type="number"
          id="id"
          required
        />
      </div>

      <div>
        <label class="form-label" for="placa">Placa:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.placa"
          type="text"
          id="placa"
          required
        />
      </div>

      <div>
        <label class="form-label" for="modelo">Modelo:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.modelo"
          type="text"
          id="modelo"
          required
        />
      </div>

      <div>
        <label class="form-label" for="marca">Marca:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.marca"
          type="text"
          id="marca"
          required
        />
      </div>

      <div>
        <label class="form-label" for="anioFabricacion"
          >Año de Fabricación:</label
        >
        <input
          class="form-control"
          v-model="porpsObjeto.anioFablicacion"
          type="text"
          id="anioFabricacion"
          required
        />
      </div>

      <div>
        <label class="form-label" for="paisFabricacion"
          >País de Fabricación:</label
        >
        <input
          class="form-control"
          v-model="porpsObjeto.paisFabricacion"
          type="text"
          id="paisFabricacion"
          required
        />
      </div>

      <div>
        <label class="form-label" for="cilindraje">Cilindraje:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.cilindraje"
          type="number"
          id="cilindraje"
          required
        />
      </div>

      <div>
        <label class="form-label" for="precioVehiculo"
          >Precio del Vehículo:</label
        >
        <input
          class="form-control"
          v-model="porpsObjeto.precioVehiculo"
          type="number"
          id="precioVehiculo"
          required
        />
      </div>

      <div>
        <label class="form-label" for="valorDia">Valor por Día:</label>
        <input
          class="form-control"
          v-model="porpsObjeto.valorDia"
          type="number"
          id="valorDia"
          required
        />
      </div>

      <button class="btn btn-primary" type="submit" style="margin-top: 10px;">Actualizar</button>
    </form>
  </div>
</template>

<script>
import { actualizarFachadaVehiculoId } from "@/helpers/clienteEmpleados";

export default {
  data() {
    return {
      vehiculo: {
        id: "",
        placa: "",
        modelo: "",
        marca: "",
        anioFablicacion: "",
        paisFabricacion: "",
        cilindraje: "",
        precioVehiculo: "",
        valorDia: "",
        disponible: "",
      },
    };
  },

  props: {
    porpsObjeto: {
      require: true,
    },
  },

  methods: {
    async actualizarVehiculo() {
      const body = {
        id: this.porpsObjeto.id,
        placa: this.porpsObjeto.placa,
        modelo: this.porpsObjeto.modelo,
        marca: this.porpsObjeto.marca,
        anioFablicacion: this.porpsObjeto.anioFablicacion,
        paisFabricacion: this.porpsObjeto.paisFabricacion,
        cilindraje: this.porpsObjeto.cilindraje,
        precioVehiculo: this.porpsObjeto.precioVehiculo,
        valorDia: this.porpsObjeto.valorDia,
        disponible: this.porpsObjeto.disponible,
      };

      await actualizarFachadaVehiculoId(this.porpsObjeto.id, body);
      alert("Datos del vehículo actualizados correctamente");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.contenedor {
  width: 700px;
}
h2{
    font-size: 1.2rem;
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
