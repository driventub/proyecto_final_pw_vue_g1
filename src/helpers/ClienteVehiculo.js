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



