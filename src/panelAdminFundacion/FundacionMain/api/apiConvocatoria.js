import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = "http://localhost:8080/api/convocatoria/";
const URLF = "http://localhost:8080/api/adminFundacion/";
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

export const apiPostConvocatoria = async (titulo,descripcion,lugar,cupo,fechaHoraStart,fechaHoraEnd,horaInicio,horaFinal,imagen) => {
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("lugar", lugar);
    formData.append("cupo", cupo);
    formData.append("fechaHoraStart", fechaHoraStart);
    formData.append("fechaHoraEnd", fechaHoraEnd);
    formData.append("horaInicio", horaInicio);
    formData.append("horaFinal", horaFinal);
    formData.append("imagen", imagen);

    try {
        
        const userSavecv = await axios.post(`${URL}agregar`,formData,
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
export const apiUpdateConvocatoria = async (id,titulo,descripcion,lugar,cupo,fechaHoraStart,fechaHoraEnd,horaInicio,horaFinal,imagen) => {
    
    const formData = new FormData();
    formData.append("id", id);
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("lugar", lugar);
    formData.append("cupo", cupo);
    formData.append("fechaHoraStart", fechaHoraStart);
    formData.append("fechaHoraEnd", fechaHoraEnd);
    formData.append("horaInicio", horaInicio);
    formData.append("horaFinal", horaFinal);
    formData.append("imagen", imagen);

    try {
        
        const userSavecv = await axios.put(`${URL}editar/${id}`,formData,
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
export const apiFundacionDelete = async (id) => {
    try {
        await axios.delete(`${URLF}eliminar`,
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