import axios from "axios";


const insertarCliente = (body) => {

    axios.post("http://localhost:8080/api/v1.0/Renta/clientes", body).then(r => r.data);
    console.log(body)
}

const actualizarCliente = (cedula, body) => {
    const data = axios.patch(`http://localhost:8080/api/v1.0/Renta/clientes/${cedula}`, body).then(r => r.data);
    console.log(data)

}

export const insertarFachada = async (body) => {
    await insertarCliente(body);
}

export const actualizarFachadaCliente = async (id, body) => {
    return await actualizarCliente(id, body);
}

const reservarVehiculoLogic = async (reserva) => {
    try {
        const response = await axios.post("http://localhost:8080/api/v1.0/Renta/vehiculos/reserva", reserva);
        return response.data;
    } catch (error) {
        console.error("Error al reservar vehículo:", error);
        throw error; 
    }
};

export const reservarVehiculoFachada = async (reserva) => {
    try {
        return await reservarVehiculoLogic(reserva);
    } catch (error) {
        console.error("Error al reservar vehículo:", error);
        throw error; 
    }
};






export const busquedaVehiculoFecha = async (placa,fechaInicio,fechaFin) => {
    //return await obtenerEmpleadoAPI(id);
    return await busquedaVehiculoFechaAxios(placa,fechaInicio,fechaFin);
}

const busquedaVehiculoFechaAxios=async(placa,fechaInicio,fechaFin)=>{
    const data = axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos/busqueda?placa=${placa}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`).then(r => r.data)
    console.log(data)
    return data
}

export const reservarVehiculo = async (reser) => {
    //return await obtenerEmpleadoAPI(id);
    return await reservarVehiculoAxios(reser);
}

const reservarVehiculoAxios=async(reser)=>{
    const data = axios.post(`http://localhost:8080/api/v1.0/Renta/vehiculos/reserva`,reser).then(r => r.data)
    console.log(data)
    return data
}

