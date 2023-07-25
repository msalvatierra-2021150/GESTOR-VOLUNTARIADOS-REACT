import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiPostVoluntario ,apiUpdateVoluntario} from "../api/apiFile";

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

export const formVoluntarioHelper = async (voluntario,fileCv,fileDpi,fileAntecedentes,photoFondo,photoPerfil, option) => {
    console.log(voluntario);
    let resultado;
    
    switch (option) {
        case 1:
        
        resultado = await apiPostVoluntario(
                voluntario.nombre,
                voluntario.correo,
                voluntario.password,
                voluntario.telefono,
                voluntario.direccion,
                fileCv,
                fileDpi,
                fileAntecedentes,
                photoFondo,
                photoPerfil
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
                resultado = await apiUpdateVoluntario(
                voluntario._id,
                voluntario.nombre,
                voluntario.correo,
                voluntario.password,
                voluntario.telefono,
                voluntario.direccion,
                fileCv,
                fileDpi,
                fileAntecedentes,
                photoFondo,
                photoPerfil
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