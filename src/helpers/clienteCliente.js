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