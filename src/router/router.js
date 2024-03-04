import { createRouter, createWebHashHistory } from "vue-router";
import ActualizarCliente from "../components/ActualizarClienteEmpleados.vue";
import FormularioCliente from "../components/FormularioCliente.vue";
import FormularioVehiculo from "../components/FormularioVehiculo.vue";


const routes = [
    // {
    //     path: '/actualizar',
    //     component: EstudiantesActualizar
    // },

    {
        path: '/clientes/buscarEmpleados',
        component: FormularioCliente
    },
    {
        path: '/clientes/buscarVehiculos',
        component: FormularioVehiculo
    },


]


const router = createRouter({ history: createWebHashHistory(), routes })

export default router
