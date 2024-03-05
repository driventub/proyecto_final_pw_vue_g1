<template>
  
  <div>

    <h2>Retirar vehículo sin reserva</h2>
        <ConsultarVehiculo v-if="ventana1"/>

        <button class="btn btn-primary" v-if="ventana1" @click="administrarComponent" >Siguiente</button>

        <VehiculoReservar2 v-if="ventana2" />

        <button class="btn btn-secondary" v-if="ventana2" @click="administrarComponent2volver" >Volver</button>
        <button class="btn btn-primary" v-if="ventana2"  @click="administrarComponent2" >Siguiente</button>
      
        <RetirarVehiculo v-if="ventana3" />
        <button class="btn btn-secondary" v-if="ventana3" @click="administrarComponent3" >Volver</button>

        

  </div>
</template>

<script>

import ConsultarVehiculo from './BuscarVehiculoPage.vue'
import VehiculoReservar2 from './VehiculoReservar2.vue';
import RetirarVehiculo from './RetirarVehiculo.vue';

export default {

    components:{
      ConsultarVehiculo,
      VehiculoReservar2,
      RetirarVehiculo
    },
    data(){
      return{
        ventana1:true,
        ventana2:false,
        ventana3:false
      }
    },

    methods:{
          administrarComponent(){
              this.ventana1 = false
              this.ventana2 =true
          },

          administrarComponent2(){
              this.ventana2 = false
              this.ventana3 = true
          },
          administrarComponent2volver(){
            this.ventana2 = false
            this.ventana1 = true
          },
          administrarComponent3(){
            this.ventana3=false
            this.ventana2=true
          }

 
    }

}
</script>

<style scoped>

h2{
    margin-top: 1.5rem;
    font-size: 1.8rem;
    
}

</style>