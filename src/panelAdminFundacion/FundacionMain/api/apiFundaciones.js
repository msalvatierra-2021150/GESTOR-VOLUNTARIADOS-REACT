import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = "https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/adminFundacion/";


export const apiGetFundaciones = async () => {
    try { 

        const { data: { fundaciones } } = await axios.get(`${URL}mostrar-all`,
            { headers: { "x-token": token } });

        return fundaciones;

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

export const apiFundacionDelete = async (id) => {
    try {
        await axios.delete(`${URL}eliminar`,
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