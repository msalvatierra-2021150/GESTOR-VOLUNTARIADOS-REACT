import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem("token");

export const apiGetFundaciones = async () => {
    try {  
        const URL = `https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/adminFundacion/mostrar-all`;

        const { data: {fundaciones} } = await axios.get( URL , {
            headers:{"x-token": token}
        });
        return fundaciones;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error al Obtener su Información',
            text: msg
        });
    }
}
