import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    // {
    //     path: '/actualizar',
    //     component: EstudiantesActualizar
    // },

    {
         path: '/clientes/buscarVehiculos',
         component: ()=> import ('@/pages/ClientePage.vue')
     },

     {
        path: '/empleados/retirarSinReserva',
        component: ()=> import ('@/pages/RetirarVehiSinReservaPage.vue')
    },
    {
        path: '/reportes/reserva',
        component: ()=> import ('@/pages/ReportePage.vue')
    },
   

  
    
]


const router = createRouter({history: createWebHashHistory(), routes})

export default router
