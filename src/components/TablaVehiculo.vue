<template>
    <div class="container">

        <div class="tabla-vehiculos">
                <h1>Lista de Vehiculos</h1>
                <table>
                    <tr>
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th>Marca</th>
                        <th>Año</th>
                        <th>Estado</th>
                        <th>Valor por día</th>
                        

                    
                    </tr>
                    <tr v-for="vehiculo in listaVehiculos" :key="vehiculo.id">
                        <td>{{ vehiculo.placa}}</td>
                        <td>{{ vehiculo.modelo }}</td>
                        <td>{{ vehiculo.marca }}</td>
                        <td>{{ vehiculo.anioFablicacion }}</td>
                        <td>{{ vehiculo.disponible }}</td>
                        <td>{{ vehiculo.valorDia}}</td>
                        
                    </tr>
                </table>


            </div>

    </div>
</template>

<script>
export default {

    props:{
        listaVehiculos:[]
    }



}
</script>

<style scoped>

.tabla-vehiculos{
    
    display: grid;

}
</style>