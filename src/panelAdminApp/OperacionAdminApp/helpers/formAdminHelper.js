import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiPostAdmin, apiUpdateAdmin} from "../api/apiAdmin";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    password: Yup.string().required('La contrasena es requerida'),
    fotoPerfil: Yup.mixed().required('La fotoPerfil es requerida'),
    fotoFondo: Yup.mixed().required('La fotoFondo es requerida'),
});

export const formOptions = { resolver: yupResolver(formSchema) };
export const formAdminHelper = async (admin, option) => {
    let resultado;

    switch (option) {
        case 1:
        
        resultado = await apiPostAdmin(
                admin.nombre,
                admin.correo,
                admin.password,
                admin.fotoPerfil,
                admin.fotoFondo
            )
             
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Admin creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/login'
                    } else {
                        window.location.href = '/login'
                    }
                })
            }
            break;
            case 2:
                resultado = await apiUpdateAdmin(
                admin._id,
                admin.nombre,
                admin.correo,
                admin.password,
                admin.fotoPerfil,
                admin.fotoFondo
            );
            
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Admin editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
            break;

    }
}
