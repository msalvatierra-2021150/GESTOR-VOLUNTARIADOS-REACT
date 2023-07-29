import axios from 'axios';
import Swal from 'sweetalert2';

const URLCC = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/contadoresConvo/";
const URLA = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/aplicacionVoluntariado/";
const URLV = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/voluntariados/";
const token = localStorage.getItem('token');

export const apiCerrarConvo = async (convocatoria_voluntariado, voluntario,estado,fechaHoraInicio,fechaHoraFin) => {
    try {
       
        const response = await axios.post(`${URLV}cerrarConvo`, {
            convocatoria_voluntariado:convocatoria_voluntariado,
            voluntarios:voluntario,
            estado:estado,
            fechaHoraInicio:fechaHoraInicio,
            fechaHoraFin:fechaHoraFin
        });
        const token = response.data.token;
        //Guardar token en el almacenamiento local del navegador (Local storage)
        (token) ? localStorage.setItem("token", token) : null;
        return token;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de Login',
            text: msg
        });
    }
}

export const getContadoresConvo = async (idConvo) => {
    try {
        const { data: { contadoresConvocatoria } } = await axios.get(`${URLCC}mostrar/${idConvo}`,
            { headers: { 'x-token': token } });
        return contadoresConvocatoria;
    } catch ({ response: { data: { msg } } }) {
        console.log(msg);
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
                title: 'Error en la busqueda de contadores de la convocatoria',
                text: msg
            });
        }
    }
};

export const getAplicacionesConvo = async (idConvo, desde, limite) => {
    try {
        const { data: { aplicaciones, totalAplicaciones } } = await axios.get(`${URLA}mostrar/${idConvo}?desde=${desde}&limite=${limite}`,
            { headers: { 'x-token': token } });
        return { aplicaciones, totalAplicaciones };
    } catch ({ response: { data: { msg } } }) {
        console.log(msg);
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
                title: 'Error en la busqueda de las aplicaciones de la convocatoria',
                text: msg
            });
        }
    }
};

export const aceptarAplicacion = async (idAplicacion) => {
    try {
        const { data: { msg } } = await axios.put(`${URLA}aceptar/${idAplicacion}`,
            { headers: { 'x-token': token } });
        return msg;
    } catch ({ response: { data: { msg } } }) {
        console.log(msg);
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
                title: 'Error en la aceptacion de la aplicacion',
                text: msg
            });
        }
    }
};

export const rechazarAplicacion = async (idAplicacion) => {
    try {
        const { data: { msg } } = await axios.put(`${URLA}rechazar/${idAplicacion}`,
            { headers: { 'x-token': token } });
        return msg;
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
                title: 'Error en el rechazo de la aplicacion',
                text: msg
            });
        }
    }
};
