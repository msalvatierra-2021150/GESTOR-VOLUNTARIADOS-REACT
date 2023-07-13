import { apiSearchFundaciones } from "../api/apiBusquedas";
import { apiSearchVoluntarios } from "../api/apiBusquedas";
import { apiSearchConvocatorias } from "../api/apiBusquedas";
import { apiSearchAplicacionesId } from "../api/apiBusquedas";

export const helperBusqueda = async (option, termino, desde, limite) => {
    switch (option) {
        case 'fundacion':
            return await apiSearchFundaciones(termino, desde, limite);
        case 'voluntario':
            return await apiSearchVoluntarios(termino, desde, limite);
        case 'convocatoria':
            return await apiSearchConvocatorias(termino, desde, limite);
        case 'aplicacion':
            return await apiSearchAplicacionesId(termino);
        default:
            break;
    }
}
