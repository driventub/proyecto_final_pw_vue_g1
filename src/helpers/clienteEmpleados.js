import axios from "axios";

const insertarVehiculo = async (body) => {
    return axios.post("http://localhost:8080/api/v1.0/Renta/vehiculos", body).then(r => r.data);
}

export const insertarFachada = async (body) => {

    return await insertarVehiculo(body);
}