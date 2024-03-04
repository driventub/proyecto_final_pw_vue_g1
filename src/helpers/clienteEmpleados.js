import axios from "axios";

export const buscarVehiculoReservado=async(numero)=>{
    return await buscarVehiculoReservadoAxios(numero)
} 

const buscarVehiculoReservadoAxios=async(numero)=>{
    const data=axios.get(`http://localhost:8080/api/v1.0/Renta/reservas/numeroR/${numero}`).then(r=>r.data)
    console.log(data)
    return data
}


export const registrarRetiro=async(numero)=>{
    return await registrarRetiroAxios(numero)
} 

const registrarRetiroAxios=async(numero)=>{
    const data=axios.put(`http://localhost:8080/api/v1.0/Renta/vehiculos/retiro?nReserva=${numero}`).then(r=>r.data).catch(r=>{return r})
    console.log(data)
    return data
}