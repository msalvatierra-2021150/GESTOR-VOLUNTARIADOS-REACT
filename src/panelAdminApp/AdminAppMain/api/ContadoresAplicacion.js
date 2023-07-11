import axios from 'axios';
import Swal from 'sweetalert2';

export const apiContarFundaciones = async (id) => {
    try {  
        const URL = `http://localhost:8080/api/adminFundacion/contar`;

        const { data: { cantidadFundaciones } } = await axios.get( URL);
        
        return cantidadFundaciones;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de al mostrar estadisticas',
            text: msg
        });
    }
}

export const apiContarVoluntario = async (id) => {
    try {  
        const URL = `http://localhost:8080/api/voluntario/contar`;

        const { data: { cantidadVoluntarios } } = await axios.get( URL) ;
        
        return cantidadVoluntarios;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de al mostrar estadisticas',
            text: msg
        });
    }
}

export const apiContarVoluntariado = async (id) => {
    try {  
        const URL = `http://localhost:8080/api/voluntariados/contar`;

        const { data: { cantidadVoluntariados } } = await axios.get( URL) ;
        
        return cantidadVoluntariados;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de al mostrar estadisticas',
            text: msg
        });
    }
}

export const apiContarConvocatorias = async (id) => {
    try {  
        const URL = `http://localhost:8080/api/convocatoria/contar`;

        const { data: { cantidadConvocatorias } } = await axios.get( URL) ;
        
        return cantidadConvocatorias;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de al mostrar estadisticas',
            text: msg
        });
    }
}