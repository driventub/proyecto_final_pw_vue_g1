import axios from "axios";


const obtenerReporte = async (fechaInicio, fechaFin)=>{
    const data = axios.get(`http://localhost:8080/api/v1.0/Renta/reservas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const obtenerReporteFachada=  async (fechaInicio, fechaFin)=>{
    return await obtenerReporte(fechaInicio, fechaFin)
}


