import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiPostFundacion, apiUpdateFundacion} from "../api/apiFundacion";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    acerca_de: Yup.string().required('El acerda de es requerido'),
    correo: Yup.string().required('El correo es requerida'),
    password: Yup.string().required('La password es requerido'),
    fotoPerfil: Yup.mixed().required('La fotoPerfil es requerida'),
    fotoFondo: Yup.mixed().required('La fotoFondo es requerida'),
    facebook: Yup.string().required('El correo es requerido'),
    instagram: Yup.string().required('La contrasena es requerida'),
    twitter: Yup.string().required('La contrasena es requerida'),
});
export const formOptions = { resolver: yupResolver(formSchema) };

export const formFundacionHelper = async (fundacion, option) => {
    let resultado;
    

    switch (option) {
        case 1:
        
        resultado = await apiPostFundacion(
               fundacion.nombre,
               fundacion.acerca_de,
               fundacion.correo,
               fundacion.password,
               fundacion.sitio_web,
               fundacion.telefono,
               fundacion.direccion,
               fundacion.horarios,
               fundacion.fotoPerfil,
               fundacion.fotoFondo,
               fundacion.facebook,
               fundacion.instagram,
               fundacion.twitter,
            )
             
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Fundacion creado correctamente",
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
                resultado = await apiUpdateFundacion(
                fundacion._id,
                fundacion.nombre,
               fundacion.acerca_de,
               fundacion.correo,
               fundacion.password,
               fundacion.sitio_web,
               fundacion.telefono,
               fundacion.direccion,
               fundacion.horarios,
               fundacion.fotoPerfil,
               fundacion.fotoFondo,
               fundacion.facebook,
               fundacion.instagram,
               fundacion.twitter,
            );
            
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Fundacion editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/cuenta-admin'
                    } else {
                        window.location.href = '/cuenta-admin'
                    }
                })
            }
            break;

    }
}