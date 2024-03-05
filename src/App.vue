<template>
  <NavBar />
  <div id="page">
    <router-view></router-view>

    <div>
        <div>
          <h1 class="bienvenida">¡Bienvenido a tu viaje de ensueño! Descubre nuestra selección de autos para alquilar.</h1>  
        </div>
        
        <div>
          <h1 class="leyenda">Renta un auto, haz historia.</h1>
        </div>
        <div class="img-portada">
          <img src="./assets/car.jpg" alt="">
        </div>
        
        

    </div>
    
    
  </div>
  
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

.bienvenida{
  font-size: 2vmin;
  text-shadow: 
    3px 3px 1px rgb(161, 161, 161),
    2px 2px 2px rgb(245, 245, 245);
    ;
}
@media screen {
    .bienvenida{
      font-size: 10vmin;
    }
}


.img-portada{
  width: 50%;
  
}


.img-portada img{
  padding-top: 2rem;
  width: 60%;
}
</style>
