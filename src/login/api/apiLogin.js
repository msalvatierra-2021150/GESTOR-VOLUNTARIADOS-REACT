import axios from 'axios';
import Swal from 'sweetalert2';

export const apiLogin = async (correo, password) => {
    try {
        const URL = 'https://backend-volunteer360-fi00ose6q-msalvatierra-2021150.vercel.app/api/auth/login'
        const response = await axios.post(`${URL}`, {
            correo,
            password
        });
        const token = response.data.token;
        //Guardar token en el almacenamiento local del navegador (Local storage)
        (token) ? localStorage.setItem("token", token) : null;
        return token;
    } catch ({ response: { data: { msg } } }) {
        Swal.fire({
            icon: 'error',
            title: 'Error de Login',
            text: msg
        });
    }
}
