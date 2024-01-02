import axios from "axios";
import { setData, setDataId } from "../states/dataSlice";
import {
  setNameOrAddress,
  setSearch,
  setSelected,
} from "../states/searchSlice";
import { setDrivers } from "../states/driversSlice";
import { BASE_URL } from "react-native-dotenv";

export const getData =
  (
    deliveryDueDate = new Date().toISOString(),
    deliveryStartDate,
    taskStatusId = ["10", "15", "20"]
  ) =>
  async (dispatch) => {
    try {
      deliveryDueDate = deliveryDueDate?.split("T")[0] + "T23:59:59.999Z";
      const infoUrl = await axios.get(
        `${BASE_URL}/task/tasks?deliveryStartDate=${deliveryStartDate}&deliveryDueDate=${deliveryDueDate}&taskStatusId=${JSON.stringify(
          taskStatusId
        )}`
      );

      return dispatch(setData(infoUrl.data));
    } catch (error) {
      console.log("error en data:", error.message);
      return error.message;
    }
  };

export const getDataById = (id) => async (dispatch) => {
  try {
    const infoUrl = await axios(`${BASE_URL}/task/${id}`);

    return dispatch(setDataId(infoUrl.data));
  } catch (error) {
    console.log("soy error By id:", error.message);
  }
};

export const getDrivers = () => async (dispatch) => {
  try {
    const info = await axios(`${BASE_URL}/drivers`);

    return dispatch(setDrivers(info.data));
  } catch (error) {
    console.log("error en drivers:", error.message);
  }
};

export const getNameOrAddress =
  (nameOrAddress, date = new Date().toISOString()) =>
  async (dispatch) => {
    try {
      console.log("soy date:", date);
      const infoUrl = await axios(
        `${BASE_URL}/search?deliveryDueDate=${date}&nameOrAddres=${nameOrAddress}`
      );

      if (infoUrl) return dispatch(setNameOrAddress(infoUrl.data));
    } catch (error) {
      console.log("soy error nameOrAddress:", error);
      return error;
    }
  };

// Puedo hacer un getDataByDriver con el "driverUserId" parra obtener las tareas de ese conductor. Entonces
// puedo hacer que se registren e inicien sesion los conductores y que vean sus propios datos

/*  Estados: 
- 10 - Nuevo/Sin asignar: Este es el estado inicial asignado a una tarea al momento de su creación.
- 15 - Asignando: La tarea ha sido asignada a un conductor y está esperando confirmación.
- 20 - Asignado: La tarea ha sido oficialmente asignada a un conductor.
- 25 - Procesado: El despachador ha procesado y preparado la tarea para su ejecución.
- 28 - Cargado: La tarea ha sido cargada con éxito en un vehículo o recogida por el conductor.
- 30 - Tránsito: La tarea está actualmente en tránsito, en camino hacia su destino.
- 40 - Llegado: El conductor ha llegado al destino designado.
- 51 - Fallido: El conductor ha encontrado un problema que impide completar la tarea.
- 52 - Devuelto: La tarea está en proceso de ser devuelta al remitente.
- 50 - Completado: La tarea ha sido completada con éxito.

*/

// export const getSearch = (id, date) => async (dispatch) => {
//   try {
//     if (date && id) {
//       const infoUrl = await axios(`${BASE_URL}/search?date=${date}&id=${id}`);

//       if (infoUrl) return dispatch(setSelected(infoUrl.data));
//     } else if (id) {
//       const findId = await axios(`${BASE_URL}/allDataId/${id}`);
//       if (!findId.data || findId.msg) setTimeout(() => {}, 1000);

//       if (findId) return dispatch(setSearch(findId.data));
//     }
//   } catch (error) {
//     console.log("error search:", error);
//   }
// };
