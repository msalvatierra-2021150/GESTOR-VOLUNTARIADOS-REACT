import axios from 'axios';
import Swal from 'sweetalert2';

export const apiContarFundaciones = async (id) => {
    try {  
        const URL = `https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/adminFundacion/contar`;

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
        const URL = `https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/voluntario/contar`;

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
        const URL = `https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/voluntariados/contar`;

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
        const URL = `https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/convocatoria/contar`;

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