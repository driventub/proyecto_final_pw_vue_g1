<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="#">Rent a Car</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03"
          aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Empleados
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/empleados/registrarCliente">Registrar Cliente</router-link></li>
                <li><router-link class="dropdown-item" to="/empleados/administrarCliente">Administrar Clientes </router-link></li>
                <li><router-link class="dropdown-item" to="/empleados/ingresarVehiculo">Ingresar un Vehiculo</router-link></li>
                <li><router-link class="dropdown-item" to="/empleados/administrarVehiculo">Administrar Vehiculos</router-link></li>
                <li><router-link class="dropdown-item" to="/empleados/retirarReservado">Retirar un vehiculo reservado</router-link></li>
                <li><router-link class="dropdown-item" to="/empleados/retirarSinReserva">Retirar un vehiculo sin reserva</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Clientes
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/clientes/buscarVehiculos">Buscar Vehiculos Disponibles</router-link></li>
                <li><router-link class="dropdown-item" to="/clientes/reservarVehiculos">Reservar Vehiculo</router-link></li>
                <li><router-link class="dropdown-item" to="/clientes/registrarCliente">Registrarse como cliente</router-link></li>
                <li><router-link class="dropdown-item" to="/clientes/actualizarCliente">Actualizar sus datos de cliente</router-link></li>
              </ul>
            </li>
 
            <li class="nav-item dropdown">
              <router-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Reportes
              </router-link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><router-link class="dropdown-item" to="/reportes/reserva">Reporte de Reserva</router-link></li>
 
              </ul>
            </li>
          </ul>
       
        </div>
      </div>
    </nav>
 
    <footer class="footer mt-5 py-3 bg-light">
      <div class="container text-left">
        <span class="text-muted">Derechos Reservados &copy; {{ new Date().getFullYear() }}</span>
      </div>
    </footer>
  </div>
</template>
 
<script>
export default {
 
}
</script>
 
<style scoped>
 
.footer {
  position: fixed;
  bottom: 20px;
  width: 50%;
  height: 20px;
  background-color: #f8f9fa;
  text-align: left;
  padding-left: 20px;
}
</style>