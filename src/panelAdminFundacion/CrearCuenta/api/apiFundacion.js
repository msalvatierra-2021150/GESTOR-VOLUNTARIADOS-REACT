import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = "http://localhost:8080/api/adminFundacion/";

export const apiGetFundacion = async () => {
    try { 

        const { data: { fundacion } } = await axios.get(`${URL}mostrar`,
            { headers: { "x-token": token } });

        return fundacion;

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

export const apiPostFundacion = async ( nombre,acerca_de,correo,password,sitio_web,telefono,direccion,horarios,fotoPerfil,fotoFondo,facebook,instagram,twitter) => {
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("acerca_de", acerca_de);
    formData.append("correo", correo);
    formData.append("password", password);
    formData.append("sitio_web", sitio_web);
    formData.append("telefono", telefono);
    formData.append("direccion", direccion);
    formData.append("horarios", horarios);
    formData.append("fotoPerfil", fotoPerfil);
    formData.append("fotoFondo", fotoFondo);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("twitter", twitter);
    try {
        
        const userSavecv = await axios.post(`${URL}agregar`,formData,{
            headers:{'x-token':token}
        });
  
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
export const apiUpdateFundacion = async (id, nombre,acerca_de,correo,password,sitio_web,telefono,direccion,horarios,fotoPerfil,fotoFondo,facebook,instagram,twitter) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("acerca_de", acerca_de);
    formData.append("correo", correo);
    formData.append("password", password);
    formData.append("sitio_web", sitio_web);
    formData.append("telefono", telefono);
    formData.append("direccion", direccion);
    formData.append("horarios", horarios);
    formData.append("fotoPerfil", fotoPerfil);
    formData.append("fotoFondo", fotoFondo);
    formData.append("facebook", facebook);
    formData.append("instagram", instagram);
    formData.append("twitter", twitter);

     try {
        const userSavecv = await axios.put(`${URL}editar`, formData,{
            headers:{'x-token':token}
        });

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
                    window.location.href = '/login';
                }
            });
        } {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }


}