import axios from "axios";

// Método con la lógica para retirar vehículo reservado
const retirarVehiculoReservadoLogic = async (nReserva) => {
    try {
        const response = await axios.put(`http://localhost:8080/api/v1.0/Renta/vehiculos/retiro?nReserva=${nReserva}`);
        return response.data;
    } catch (error) {
        console.error("Error al retirar vehículo reservado:", error);
        throw error;
    }
};

export const retirarVehiculoReservadoFachada = async (nReserva) => {
    try {
        return await retirarVehiculoReservadoLogic(nReserva);
    } catch (error) {
        console.error("Error al retirar vehículo reservado:", error);
        throw error;
    }
};

// Método con la lógica para consultar vehículos disponibles
const consultarVehiculosDisponiblesLogic = async (marca, modelo) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos?marca=${marca}&modelo=${modelo}`);
        return response.data;
    } catch (error) {
        console.error("Error al consultar vehículos disponibles:", error);
        throw error;
    }
};

export const consultarVehiculosDisponiblesFachada = async (marca, modelo) => {
    try {
        return await consultarVehiculosDisponiblesLogic(marca, modelo);
    } catch (error) {
        console.error("Error al consultar vehículos disponibles:", error);
        throw error;
    }
};

//crear vehiculos
const crearVehiculoLogic = async (vehiculo) => {
    try {
        const response = await axios.post("http://localhost:8080/api/v1.0/Renta/vehiculos", vehiculo);
        return response.data;
    } catch (error) {
        console.error("Error al crear vehículo:", error);
        throw error;
    }
};

export const crearVehiculoFachada = async (vehiculo) => {
    try {
        return await crearVehiculoLogic(vehiculo);
    } catch (error) {
        console.error("Error al crear vehículo:", error);
        throw error;
    }
};

// Método con la lógica para buscar un vehículo por placa
const buscarVehiculoPorPlacaLogic = async (placa) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1.0/Renta/vehiculos/${placa}`);
        return response.data;
    } catch (error) {
        console.error("Error al buscar vehículo por placa:", error);
        throw error;
    }
};

export const buscarVehiculoPorPlacaFachada = async (placa) => {
    try {
        return await buscarVehiculoPorPlacaLogic(placa);
    } catch (error) {
        console.error("Error al buscar vehículo por placa:", error);
        throw error;
    }
};

// Método con la lógica para reservar un vehículo
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