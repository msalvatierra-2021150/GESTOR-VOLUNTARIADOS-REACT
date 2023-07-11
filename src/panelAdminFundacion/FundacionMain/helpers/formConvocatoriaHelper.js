import Swal from "sweetalert2"
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { apiPostConvocatoria ,apiUpdateConvocatoria} from "../api/apiConvocatoria";

export const formSchema = Yup.object().shape({
    titulo: Yup.string().required('El titulo es requerido'),
    descripcion: Yup.string().required('La descripcion es requerido'),
    lugar: Yup.string().required('El lugar es requerida'),
    cupo: Yup.number().required('El cupo es requerido'),
    fechaHoraStart: Yup.date().required('La fecha inicio es requerido'),
    fechaHoraEnd: Yup.date().required('La fecha fin es requerido'),
    horaInicio: Yup.string().required('La hora inicio es requerido'),
    horaFinal: Yup.string().required('La hora fin es requerido'),
});

export const formOptions = { resolver: yupResolver(formSchema) };

export const formConvocatoriaHelper = async (convocatoria, option) => {

    let resultado;
    console.log(convocatoria);
    switch (option) {
        case 1:
        
        resultado = await apiPostConvocatoria(
                convocatoria.titulo,
                convocatoria.descripcion,
                convocatoria.lugar,
                convocatoria.cupo,
                convocatoria.fechaHoraStart,
                convocatoria.fechaHoraEnd,
                convocatoria.horaInicio,
                convocatoria.horaFinal,
                convocatoria.imagen
            )
             console.log(resultado);
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Convocatoria creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/home'
                    } else {
                        window.location.href = '/home'
                    }
                })
            }
            break;
            case 2:
                resultado = await apiUpdateConvocatoria(
                    convocatoria._id,
                    convocatoria.titulo,
                    convocatoria.descripcion,
                    convocatoria.lugar,
                    convocatoria.cupo,
                    convocatoria.fechaHoraStart,
                    convocatoria.fechaHoraEnd,
                    convocatoria.horaInicio,
                    convocatoria.horaFinal,
                    convocatoria.imagen
            );
            
            if (resultado) {
                localStorage.removeItem("idConvocatoria");
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "Hotel editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/home'
                    } else {
                        window.location.href = '/home'
                    }
                })
            }
            break;

    }



}