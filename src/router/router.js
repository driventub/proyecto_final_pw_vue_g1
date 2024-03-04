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
        component: ( )=> import ('../components/FormularioCliente.vue')
    },
    {
        path: '/clientes/buscarVehiculos',
        component: ( )=> import ('../components/FormularioVehiculo.vue')
    },


    {
        path:'/clientes/registrarCliente',
        component: () => import('../pages/ClienteRegistrarPage.vue')
    },
    {
        path:'/clientes/actualizarCliente',
        component: () => import('../pages/ClienteActualizarPage.vue')
    },
    {
        path:'/empleados/registrarCliente',
        component: () => import('../pages/ClienteRegistrarPageEmpleado.vue')
    },
    {
        path: '/clientes/reservarVehiculos',
        component: () => import ('@/pages/VehiculoReservar2.vue')
    },

    {
        path: '/empleados/retirarReservado',
        component: () => import ('@/pages/RetirarVehiculo.vue')
    },
    
]


const router = createRouter({ history: createWebHashHistory(), routes })

export default router
