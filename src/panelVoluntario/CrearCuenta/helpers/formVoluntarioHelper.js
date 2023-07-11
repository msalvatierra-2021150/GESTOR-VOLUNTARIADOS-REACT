import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiPDF ,apiUpdatePDF} from "../api/apiFile";

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    correo: Yup.string().required('El correo es requerido'),
    password: Yup.string().required('La contrasena es requerida'),
    dpi: Yup.string().required('El nombre es requerido'),
    telefono: Yup.number().required('El correo es requerido'),
    direccion: Yup.string().required('La contrasena es requerida'),
    CV: Yup.mixed().required('La CV es requerida'),
    DPI: Yup.mixed().required('El DPI es requerida'),
    antecedentes: Yup.mixed().required('Los antecedentes es requerida'),
});


export const formOptions = { resolver: yupResolver(formSchema) };

export const formVoluntarioHelper = async (voluntario, option) => {

    let resultado;
 
    switch (option) {
        case 1:
        
        resultado = await apiPDF(
                voluntario.nombre,
                voluntario.correo,
                voluntario.password,
                voluntario.dpi,
                voluntario.telefono,
                voluntario.direccion,
                voluntario.CV,
                voluntario.DPI,
                voluntario.antecedentes,
                voluntario.fotoPerfil,
                voluntario.fotoFondo
            )
             console.log(resultado);
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Voluntario creado correctamente",
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
                resultado = await apiUpdatePDF(
                voluntario._id,
                voluntario.nombre,
                voluntario.correo,
                voluntario.password,
                voluntario.dpi,
                voluntario.telefono,
                voluntario.direccion,
                voluntario.CV,
                voluntario.DPI,
                voluntario.antecedentes,
                voluntario.fotoPerfil,
                voluntario.fotoFondo
            );
            
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/cuenta'
                    } else {
                        window.location.href = '/cuenta'
                    }
                })
            }
            break;

    }



}