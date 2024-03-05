import axios from "axios";

const insertarCliente = async (body) => {
  
    const response = axios
      .post("http://localhost:8080/api/v1.0/Renta/clientes", body)
      .then((r) => r.data);
    return response;
  
};

const buscarCedula = async (cedula) => {
  //http://localhost:8080/api/v1.0/Renta/clientes/123
  return axios
    .get("http://localhost:8080/api/v1.0/Renta/clientes/" + cedula)
    .then((r) => r.data);
};
const actualizarCliente = async (body) => {
  return axios
    .put("http://localhost:8080/api/v1.0/Renta/clientes", body)
    .then((r) => r.data);
};

export const insertarFachada = async (body) => {
  return await insertarCliente(body);
};
export const buscarFachada = async (cedula) => {
  return await buscarCedula(cedula);
};

export const actualizarFachadaCliente = async (body) => {
  return await actualizarCliente(body);
};

export const verClientes = async () => {
  const response = await axios.get(
    "http://localhost:8080/api/v1.0/Renta/clientes"
  );
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
  console.log(
    `Cliente con ID ${id} eliminado correctamente a través de la fachada`
  );
};

const actualizarClienteId = async (cedula, body) => {
  console.log(body);
  const data = await axios
    .put(`http://localhost:8080/api/v1.0/Renta/clientes/${cedula}`, body)
    .then((r) => r.data);
  console.log(data);
};

export const actualizarFachadaClienteId = async (cedula, body) => {
  await actualizarClienteId(cedula, body);
};

const reservarVehiculoLogic = async (reserva) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1.0/Renta/vehiculos/reserva",
      reserva
    );
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

export const busquedaVehiculoFecha = async (placa, fechaInicio, fechaFin) => {
  //return await obtenerEmpleadoAPI(id);
  return await busquedaVehiculoFechaAxios(placa, fechaInicio, fechaFin);
};
const busquedaVehiculoFechaAxios = async (placa, fechaInicio, fechaFin) => {
  const data = axios
    .get(
      `http://localhost:8080/api/v1.0/Renta/vehiculos/busqueda?placa=${placa}&fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`
    )
    .then((r) => r.data);
  console.log(data);
  return data;
};

export const reservarVehiculo = async (reser) => {
  //return await obtenerEmpleadoAPI(id);
  return await reservarVehiculoAxios(reser);
};

const reservarVehiculoAxios = async (reser) => {
  const data = axios
    .post(`http://localhost:8080/api/v1.0/Renta/vehiculos/reserva`, reser)
    .then((r) => r.data);
  console.log(data);
  return data;
};
