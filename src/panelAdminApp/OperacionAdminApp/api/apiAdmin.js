import axios from 'axios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

const URL = "http://localhost:8080/api/admin/";


export const apiPostAdmin = async (nombre, correo, password, fotoPerfil,fotoFondo) => {
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("correo", correo);
    formData.append("password", password);
    formData.append("fotoPerfil", fotoPerfil);
    formData.append("fotoFondo", fotoFondo);
    try {
        
        const userSavecv = await axios.post(`${URL}agregar`,formData);
  
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

export const apiUpdateAdmin = async (id, nombre, correo, password, fotoPerfil,fotoFondo) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("nombre", nombre);
    formData.append("correo", correo);
    formData.append("password", password);
    formData.append("fotoPerfil", fotoPerfil);
    formData.append("fotoFondo", fotoFondo);

     try {
        const userSavecv = await axios.put(`${URL}editar`, formData);

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