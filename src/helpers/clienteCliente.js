import axios from "axios";


const insertarCliente = async (body) => {
    return axios.post("http://localhost:8080/api/v1.0/Renta/clientes", body).then(r => r.data);
}

const buscarCedula = async (cedula) =>{
    //http://localhost:8080/api/v1.0/Renta/clientes/123
    return axios.get("http://localhost:8080/api/v1.0/Renta/clientes/"+cedula).then(r => r.data);
}
const actualizarCliente = async (body) => {
    return axios.put("http://localhost:8080/api/v1.0/Renta/clientes", body).then(r => r.data);

}

export const insertarFachada = async (body) => {

    return await insertarCliente(body);
}
export const buscarFachada = async (cedula) =>{
    return await buscarCedula(cedula);
}

export const actualizarFachadaCliente = async (body) => {
    return await actualizarCliente(body);
}