import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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


const router = createRouter({history: createWebHashHistory(), routes})

export default router
