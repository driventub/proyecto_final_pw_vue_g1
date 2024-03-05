<template>
  

    
        <FormConsultarvehiculo @listaVehiculos="listarVehiculos" />
    <div v-if="vehiculos != null">
        <TablaVehiculo :listaVehiculos="vehiculos" />
    </div>
    <div v-if="mensaje1">
        <h1>NO SE ENCONTRARON RESULTADOS</h1>

    


  </div>
</template>

<script>
import FormConsultarvehiculo from '../components/ConsultarVehiculo.vue'
import TablaVehiculo from '../components/TablaVehiculo.vue'
export default {

    components:{
        FormConsultarvehiculo,
        TablaVehiculo
    },

    data(){
      return{
          vehiculos:null,
          mensaje1: false
      }
    },

    methods:{
         async listarVehiculos (listaVehiculos){
          
            if(listaVehiculos.length === 0){
                console.log(listaVehiculos);
                this.vehiculos = null;
                this.mensaje1 = true;
                
            }else{
                this.vehiculos = listaVehiculos;
                console.log(this.vehiculos);
                this.mensaje1 = false;
            }
        }
    },

}
</script>

<style>

</style>