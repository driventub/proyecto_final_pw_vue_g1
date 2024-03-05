<template>
  
  <div>
        <ConsultarVehiculo/>
        <VehiculoReservar2/>
        <RetirarVehiculo/>

        

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
    }

}
</script>

<style>

</style>