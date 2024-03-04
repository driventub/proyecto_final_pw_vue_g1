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
        path:'/empleados/ingresarVehiculo',
        component: () => import('../pages/VehiculoRegistrarPage.vue')
    },
    // {
    //     path: '/actualizar',
    //     component: EstudiantesActualizar
    // },
    
]


const router = createRouter({history: createWebHashHistory(), routes})

export default router
