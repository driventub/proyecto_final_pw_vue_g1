<template>
  <div class="contenedor">
    <div class="titulo">
        <h2>ÚNASE A AVIS PREFERRED®</h2>
        <span>Configuremos su cuenta personal.</span>
    </div>
    <div class="hypervinculos" style="display: flex;">
        <a href="">¿YA TIENE UN NÚMERO DE WIZARD DE AVIS DE 6 DÍGITOS? START HERE.</a>
        <a href="">¿Qué es un número de Wizard?</a>
    </div>
    <form class="formulario">
        <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input :v-model="nombre" type="text" class="form-control" id="nombre">
        </div>
        <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input :v-model="apellido" type="text" class="form-control" id="apellido">
        </div>
        <div class="mb-3">
            <label for="cedula" class="form-label">Cedula</label>
            <input :v-model="cedula" type="text" class="form-control" id="cedula">
            
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input :v-model="password" type="password" class="form-control" id="password">
            <div id="passwordHelp" class="form-text">Nunca compartas tu clave con nadie más.</div>
        </div>
        <div class="mb-3">
            <label for="fechaNacimiento" class="form-label">Fecha de nacimiento</label>
            <input :v-model="apellido" type="date" class="form-control" id="fechaNacimiento">
        </div>
        <div class="mb-3">
            <label for="genero" class="form-label">Genero</label>
            <input :v-model="apellido" type="text" class="form-control" id="genero">
        </div>


        <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
  </div>
</template>

<script>
export default {

    

}
</script>

<style scoped>


</style>