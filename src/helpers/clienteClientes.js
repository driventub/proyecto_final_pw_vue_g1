import axios from "axios";

export const consultarVehiculos = async (marca, modelo) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos?marca=${marca}&modelo=${modelo}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar vehículos:", error);
        throw error; 
    }
};

export const consultarVehiculosFachada = async (marca, modelo) => {
    try {
        return await consultarVehiculos(marca, modelo);
    } catch (error) {
        console.error("Error al consultar vehículos:", error);
        throw error; 
    }
};



const insertarCliente = (body) => {

    axios.post("http://localhost:8080/api/v1.0/Renta/clientes", body).then(r => r.data);
    console.log(body)
}


export const insertarFachada = async (body) => {
    await insertarCliente(body);
}


const actualizarCliente = (cedula, body) => {
    const data = axios.patch(`http://localhost:8080/api/v1.0/Renta/clientes/${cedula}`, body).then(r => r.data);
    console.log(data)

}


export const actualizarFachadaCliente = async (id, body) => {
    return await actualizarCliente(id, body);
}