import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem('token');

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/voluntariados/";
const URLV = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/voluntario/voluntarioF";

export const getVoluntariadosActivos = async ( desde, limite) => {
    try {
        if (!desde && !limite) {
            desde = 0;
            limite = 10;
        }
        const { data: { coincidencias, totalCoincidencias } } = await axios.get(`${URL}?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
            console.log(coincidencias);
        return { coincidencias, totalCoincidencias };
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
                title: 'Error al listar Voluntariados Activos',
                text: msg
            });
        }
    }
};
export const getVoluntario = async ( id) => {
    try {
        
        const { data: { arreglo} } = await axios.post(`${URLV}`,
        {ids:id},
            { headers: { 'x-token': token } });
            
        return arreglo;
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
                title: 'Error al listar Voluntariados Activos',
                text: msg
            });
        }
    }
};