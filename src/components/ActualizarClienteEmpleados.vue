<template>
  <div id="ventana">

      <h1 class="mb-4">Actualizar Datos del Cliente</h1>
      <form @submit.prevent="actualizarCliente">
        <div>
          <label for="cedula">Cédula:</label>
          <input
            class="form-control"
            :value="propsClientes.cedula"
            type="text"
            id="cedula"
            disabled
          />
        </div>

        <div>
          <label class="form-label" for="nombre">Nombre:</label>
          <input
            class="form-control"
            v-model="propsClientes.nombre"
            type="text"
            id="nombre"
            required
          />
        </div>
        <div>
          <label class="form-label" for="apellido">Apellido:</label>
          <input
            class="form-control"
            v-model="propsClientes.apellido"
            type="text"
            id="apellido"
            required
          />
        </div>
        <div>
          <label class="form-label" for="fechaNacimiento"
            >Fecha de Nacimiento:</label
          >
          <input
            class="form-control"
            v-model="propsClientes.fechaNacimiento"
            type="datetime-local"
            id="fechaNacimiento"
            required
          />
        </div>
        <div>
          <label class="form-label" for="tarjetaCredito"
            >Tarjeta de Credito:</label
          >
          <input
            class="form-control"
            v-model="propsClientes.tarjetaCredito"
            type="text"
            id="tarjetaCredito"
          />
        </div>

        <div>
          <label class="form-label" for="genero">Género:</label>
          <select
            class="form-select"
            v-model="propsClientes.genero"
            id="genero"
            required
          >
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <button class="btn btn-primary" type="submit" style="margin-top: 10px;">Actualizar</button>
      </form>

  </div>
</template>

<script>
import { actualizarFachadaClienteId } from "@/helpers/clienteCliente";

export default {
  data() {
    return {
      cliente: {
        id: "",
        cedula: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        genero: "",
        tarjetaCredito: "",
      },
    };
  },
  props: {
    // clienteCedula: {
    //     type: String,
    //     required: true
    // }

    propsClientes: {
      require: true,
    },
  },
  methods: {
    async actualizarCliente() {
      const body = {
        id: this.propsClientes.id,
        cedula: this.propsClientes.cedula,
        nombre: this.propsClientes.nombre,
        apellido: this.propsClientes.apellido,
        fechaNacimiento: this.propsClientes.fechaNacimiento,
        genero: this.propsClientes.genero,
        tipoRegistro: this.propsClientes.tipoRegistro,
        tarjetaCredito: this.propsClientes.tarjetaCredito,
      };

      console.log(body);

      await actualizarFachadaClienteId(this.propsClientes.cedula, body);
      alert("Datos del Cliente actualizados correctamente");
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.contenedor {
  width: 700px;
}
h2 {
  font-size: 1.2rem;
}
@media screen and (min-width: 900px) {
  #ventana {
    min-width: 70vw;
    max-width: 70%;
  }
  h2 {
    font-size: 2rem;
  }
}
</style>
