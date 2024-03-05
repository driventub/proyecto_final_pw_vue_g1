import { createRouter, createWebHashHistory } from "vue-router";



const routes = [
    {
        path: '/',
        component: ()=> import ('@/pages/inicio.vue')
    },

    {
         path: '/clientes/buscarVehiculos',
         component: ()=> import ('@/pages/BuscarVehiculoPage.vue')
     },

     {
        path: '/empleados/retirarSinReserva',
        component: ()=> import ('@/pages/RetirarVehiSinReservaPage.vue')
    },
    {
        path: '/reportes/reserva',
        component: ()=> import ('@/pages/ReportePage.vue')
    },
   
    {
  
        path: '/empleados/administrarCliente',
        component: ( )=> import ('../components/FormularioCliente.vue')
    },
    {
        path: '/empleados/administrarVehiculo',
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
        path:'/empleados/ingresarVehiculo',
        component: () => import('../pages/VehiculoRegistrarPage.vue')
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
