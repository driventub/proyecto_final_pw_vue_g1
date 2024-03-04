import { createRouter, createWebHashHistory } from "vue-router";




const routes = [
    {
        path: '/reservar',
        component: () => import ('@/pages/VehiculoReservar2.vue')
    },

    {
        path: '/retirar/vehiculoRes',
        component: () => import ('@/pages/RetirarVehiculo.vue')
    },

]
const router = createRouter({history: createWebHashHistory(), routes})

export default router
