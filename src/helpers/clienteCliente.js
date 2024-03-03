import axios from "axios";


const incertar = async(body)=>{
    axios.post("http://localhost:8080/api/v1.0/Renta/clientes",body).then(ret => ret.data);
}


export const insertarFachada = async(body)=>{
    await incertar(body);
}
