import axios from "axios"

const consultar = async (marca, modelo)=>{
    const data = axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos?marca=${marca}&modelo=${modelo}`).then(r=>r.data);
    console.log(data);
    return data;
}

export const consultarFachada=  async (marca, modelo)=>{
    return await consultar(marca, modelo)
}




const insertar= async (body)=>{
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes10`,body).then(r=>r.data);
    return data;
}

export const insertarFachada=  async (body)=>{
    return await insertar(body)
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





