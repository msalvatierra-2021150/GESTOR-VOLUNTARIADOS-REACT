import axios from 'axios';
import Swal from 'sweetalert2';

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/convocatoria/";
const token = localStorage.getItem('token');

export const apiConvocatorias = async (desde, limite) => {
    try {
        const { data: { convocatorias, totalConvocatoria } } = await axios.get(`${URL}mostrar-all?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
        return { convocatorias, totalConvocatoria };
    } catch ({ response: { data: { msg } } }) {
        if (msg === 'Token no válido') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error en la busqueda de convocatorias',
                text: msg
            });
        }
    }
}

export const apiConvocatoriasCerradas = async (desde, limite) => {
    try {
        const { data: { convocatorias, totalConvocatoria } } = await axios.get(`${URL}mostrar-cerradas?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
        return { convocatorias, totalConvocatoria };
    } catch ({ response: { data: { msg } } }) {
        if (msg === 'Token no válido') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error en la busqueda de convocatorias cerradas',
                text: msg
            });
        }
    }
}
