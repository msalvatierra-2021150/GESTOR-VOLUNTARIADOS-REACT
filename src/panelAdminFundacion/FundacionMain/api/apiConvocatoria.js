import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/convocatoria/";

export const apiGetConvocatoriaById = async (id) => {
    try {
        console.log(id);
        const { data: { convocatorias } } = await axios.get(`${URL}mostrarById/${id}`,
            { headers: { "x-token": token } });

        return convocatorias;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }
}
export const apiGetConvocatoria = async () => {
    try {

        const { data: { convocatorias } } = await axios.get(`${URL}mostrar`,
            { headers: { "x-token": token } });

        return convocatorias;

    } catch ({ response: { data: { msg } } }) {
        if (msg === "Token no válido") {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "OK",
            }).then((result) => {
                if (result.isConfirmed) {
                } else {
                }
            });
        }
    }
}

export const apiPostConvocatoria = async (titulo,descripcion,lugar,cupo,fechaHoraStart,fechaHoraEnd,horaInicio,horaFinal,photoImg) => {


    try {
        
        const userSavecv = await axios.post(`${URL}agregar`,{
                titulo:titulo,
                descripcion:descripcion,
                lugar:lugar,
                cupo:cupo,
                fechaHoraStart,
                fechaHoraEnd,
                horaInicio,
                horaFinal,
                imagen:photoImg
        },
        { headers: { "x-token": token } });
  
        return true;

    } catch ({ response: { data: { msg } } }) {
       
        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/';
                }
            });
        } {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
export const apiUpdateConvocatoria = async (id,titulo,descripcion,lugar,cupo,fechaHoraStart,fechaHoraEnd,horaInicio,horaFinal,photoImg) => {
    try {
        
        const userSavecv = await axios.put(`${URL}editar/${id}`,{
            id:id,
            titulo:titulo,
            descripcion:descripcion,
            lugar:lugar,
            cupo:cupo,
            fechaHoraStart:fechaHoraStart,
            fechaHoraEnd:fechaHoraEnd,
            horaInicio:horaInicio,
            horaFinal:horaFinal,
            imagen:photoImg
        },
        { headers: { "x-token": token } });
  
        return true;

    } catch ({ response: { data: { msg } } }) {
       
        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/';
                }
            });
        } {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}

export const apiConvocatoriaDelete = async (id) => {
    try {
        await axios.delete(`${URL}eliminar/${id}`,
        { headers: { "x-token": token } });
        return true;
    } catch ({ response: { data: { msg } } }) {

        if (msg === "Token no válido") {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (msg) {
            return msg;
        }
    }

}