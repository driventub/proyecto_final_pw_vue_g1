<template>
  <NavBar />
  <div id="page">
    <router-view></router-view>
  </div>
  <footer>
    <div class="container text-left">
      <span class="text-muted">Derechos Reservados &copy; {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(255, 255, 255, 0.77);
  margin: 0;
  padding: 0;
}
body{
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./assets/fondo.jpg");

}
#page{
  display: flex;
  justify-content: center;
  align-items: center;

}

.contenedor{

  border-radius: 10px;
  margin: 10px;
  padding: 30px;

  background-color: rgb(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 15px;
  border-radius: 32px;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.329);
}

footer {
  position: fixed;
  margin-top: 40px;
  bottom: 0px;
  width: auto;
  background-color: white;
  text-align: left;
  padding: 0;
}
</style>
