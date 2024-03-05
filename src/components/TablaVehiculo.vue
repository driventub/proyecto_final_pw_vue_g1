<template>
    <div class="contenedor">

        <div>
            <h1>Lista de Vehiculos</h1>
            <table class="table table-striped">
                <thead>
                    <tr class="table-dark">
                        <th>Placa</th>
                        <th>Modelo</th>
                        <th class="d-none d-sm-table-cell">Marca</th>
                        <th class="d-none d-md-table-cell">Año</th>
                        <th class="d-none d-lg-table-cell">Estado</th>
                        <th class="d-none d-lg-table-cell">Valor por día</th>



                    </tr>
                </thead>
                <tbody>
                    <tr v-for="vehiculo in listaVehiculos" :key="vehiculo.id"
                        :class="{ 'table-light': index % 10 !== 0 }">
                        <td>{{ vehiculo.placa }}</td>
                        <td>{{ vehiculo.modelo }}</td>
                        <td class="d-none d-sm-table-cell">{{ vehiculo.marca }}</td>
                        <td class="d-none d-md-table-cell">{{ vehiculo.anioFablicacion }}</td>
                        <td class="d-none d-lg-table-cell">{{ vehiculo.disponible }}</td>
                        <td class="d-none d-lg-table-cell">{{ vehiculo.valorDia }}</td>

                    </tr>
                </tbody>

            </table>


        </div>

    </div>
</template>

<script>
export default {

    props: {
        listaVehiculos: []
    }



}
</script>

<style scoped>
div {
    margin-top: 20px;
    margin-bottom: 10px;
}

.btn-primary {

    margin-right: 20px;
}

.btn-danger {
    padding-right: 20px;
    text-align: center;
}

.container {
    width: 100%;
    max-width: 1500px;
}
</style>