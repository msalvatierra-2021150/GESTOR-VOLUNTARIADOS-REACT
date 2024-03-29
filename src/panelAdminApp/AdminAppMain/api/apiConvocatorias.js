import axios from "axios";
import Swal from "sweetalert2";

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/convocatoria/";
const token = localStorage.getItem("token");

export const apiSearchConvocatorias = async (titulo, lugar, desde, limite) => {
    try {
        if (lugar === undefined && titulo === undefined) {
            const { data: { coincidencias, registros } } = await axios.get(`${URL}mostrar-activas?desde=${desde}&limite=${limite}`,
                { headers: { 'x-token': token } });
            return { coincidencias, registros };
        }
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: "error",
            title: "Error en la busqueda de convocatorias",
            text: msg,
        });
    }
};