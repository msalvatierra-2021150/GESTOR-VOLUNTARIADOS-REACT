import axios from 'axios';
import Swal from 'sweetalert2';

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/";
const token = localStorage.getItem('token');

export const apiSearchFundaciones = async (nombreFundacion, desde, limite) => {
    try {
        const { data: { fundaciones, totalFundaciones } } = await axios.get(`${URL}adminFundacion/buscar/${nombreFundacion}?desde=${desde}&limite=${limite}`);
        return { fundaciones, totalFundaciones };
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la busqueda de fundaciones',
            text: msg
        });
    }
}

export const apiSearchVoluntarios = async (nombreVoluntario, desde, limite) => {
    try {
        const { data: { voluntarios, totalVoluntarios } } = await axios.get(`${URL}voluntario/buscar/${nombreVoluntario}?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
        return { voluntarios, totalVoluntarios };
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la busqueda de voluntarios',
            text: msg
        });
    }
}

export const apiSearchConvocatorias = async (titulo, desde, limite) => {
    try {
        const { data: { convocatorias, totalConvocatoria } } = await axios.get(`${URL}convocatoria/buscar/${titulo}?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
        return { convocatorias, totalConvocatoria };
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error en la busqueda de convocatorias',
            text: msg
        });
    }
}

export const apiSearchAplicacionesId = async (idAplicacion) => {
    try {
        const { data: aplicacion } = await axios.get(`${URL}aplicacionVoluntariado/buscar/${idAplicacion}`,
            { headers: { 'x-token': token } });
        return aplicacion;
    } catch ({ response: { data: { msg } } }) {
        if (msg.message === `Cast to ObjectId failed for value "${idAplicacion}" (type string) at path "_id" for model "AplicacionVoluntariado"`) {
            Swal.fire({
                icon: 'error',
                title: 'Error en la busqueda de aplicaciones',
                text: 'Asegurese de ingresar un numero de registro valido'
            });
        }
    }
}
