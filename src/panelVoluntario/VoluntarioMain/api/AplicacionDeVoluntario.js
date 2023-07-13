import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem("token");

export const apiAplicacionDeVoluntario = async (id) => {

    try {  
        const URL = `http://localhost:8080/api/aplicacionVoluntariado/aplicar/6493503b2990c0ab608f7c87`;

        const response = await axios.post( URL , {}, {
            headers:{"x-token": token}
        });
        return true;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de al aplicar al voluntariado',
            text: msg
        });
    }
}

export const apiGetAplicacionesDelVoluntario = async (id) => {
    try {  
        const URL = `http://localhost:8080/api/aplicacionVoluntariado/mostrar-voluntario`;

        const { data: { aplicaciones } } = await axios.get( URL , {
            headers:{"x-token": token}
        }); 
        return aplicaciones;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error al mostrar aplicaciones del voluntarios',
            text: msg
        });
    }
}