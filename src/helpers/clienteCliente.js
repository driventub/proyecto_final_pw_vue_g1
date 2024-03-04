import axios from "axios";


const incertar = async(body)=>{
    axios.post("http://localhost:8080/api/v1.0/Renta/clientes",body).then(ret => ret.data);
}


export const insertarFachada = async(body)=>{
    await incertar(body);
}



export const verClientes = async () => {
    
        const response = await axios.get("http://localhost:8080/api/v1.0/Renta/clientes");
        return response.data;
    
};

export const verClientesFachada = async () => {
    
        const clientes = await verClientes();
        return clientes;

};

export const eliminarCliente = async (id) => {
        await axios.delete(`http://localhost:8080/api/v1.0/Renta/clientes/${id}`);
        console.log(`Cliente con ID ${id} eliminado correctamente`);
    
};

export const eliminarClienteFachada = async (id) => {
    
        await eliminarCliente(id);
        console.log(`Cliente con ID ${id} eliminado correctamente a través de la fachada`);
    
};

const actualizarClienteId = async (cedula, body) => {
    console.log(body);
    const data = await axios.put(`http://localhost:8080/api/v1.0/Renta/clientes/${cedula}`, body).then(r => r.data);
    console.log(data)

}


export const  actualizarFachadaClienteId = async (cedula, body) => {
    
    await actualizarClienteId(cedula, body);
    
}

