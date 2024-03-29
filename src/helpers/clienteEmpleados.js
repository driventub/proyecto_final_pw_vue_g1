import axios from "axios";

const insertarVehiculo = async (body) => {
    return axios.post("http://localhost:8080/api/v1.0/Renta/vehiculos", body).then(r => r.data);
}

export const insertarFachada = async (body) => {

    return await insertarVehiculo(body);
}
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



export const verVehiculos = async () => {
    
    const response = await axios.get("http://localhost:8080/api/v1.0/Renta/vehiculos/buscarTodos");
    return response.data;

};

export const verVehiculoFachada = async () => {

    const vehiculos = await verVehiculos();
    return vehiculos;

};

export const eliminarVehiculo = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1.0/Renta/vehiculos/eliminar/${id}`);
    console.log(`vehiculo con ID ${id} eliminado correctamente`);

};

export const eliminarClienteFachada = async (id) => {

    await eliminarVehiculo(id);
    console.log(`vehiculo con ID ${id} eliminado correctamente a través de la fachada`);

};


const actualizarVehiculoId = (id, body) => {
    console.log(body);
    const data = axios.put(`http://localhost:8080/api/v1.0/Renta/vehiculos/id/${id}`, body).then(r => r.data);
    console.log(data)

}


export const actualizarFachadaVehiculoId = async (id, body) => {
    return await actualizarVehiculoId(id, body);
}



const consultarCliente = async (marca, modelo)=>{
    const data = axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos?marca=${marca}&modelo=${modelo}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarFachada=  async (marca, modelo)=>{
    return await consultarCliente(marca, modelo)
}


const consultarVehiculo = async (placa)=>{
    const data = axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos/${placa}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarVehiculoFacahada=  async (placa)=>{
    return await consultarVehiculo(placa)
}
