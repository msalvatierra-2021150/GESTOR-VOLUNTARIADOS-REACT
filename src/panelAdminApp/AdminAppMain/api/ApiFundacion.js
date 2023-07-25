import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem("token");

export const apiGetFundaciones = async () => {
    try {  
        const URL = `http://localhost:8080/api/adminFundacion/mostrar-all`;

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
