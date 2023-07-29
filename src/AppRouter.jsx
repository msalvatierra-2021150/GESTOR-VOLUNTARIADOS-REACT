//IMPORTACIONES GENERALES
import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"
import { Login } from "./login/components/Login"
import { isAdminAppAuthenticated, isUserLogged, isVoluntarioAuthenticated, isAdminFundacionAuthenticated } from "./login/helpers/isUserAuthenticated"

//IMPORTACIONES VOLUNTARIO
import { VoluntarioMain } from "./panelVoluntario/VoluntarioMain/VoluntarioMain";
import { OperacionCuentaVoluntario } from "./panelVoluntario/CrearCuenta/components/OperacionCuentaVoluntario";
import { PerfilMain } from "./panelVoluntario/Perfil/PerfilMain";
import { SearchResults } from "./SearchResults";

//IMPORTACIONES FUNDACION
import { FundacionMain } from "./panelAdminFundacion/FundacionMain/FundacionMain";
import { OperacionCuentaFundacion} from "./panelAdminFundacion/CrearCuenta/components/OperacionCuentaFundacion";
import { PublicacionesFundacion } from "./panelAdminFundacion/FundacionMain/components/PublicacionesFundacion";
import { EditarConvocatoria } from "./panelAdminFundacion/Convocatoria/components/EditarConvocatoria";
import { Aplicaciones } from "./panelAdminFundacion/Aplicaciones/components/Aplicaciones";


//IMPORTACIONES FUNDACION
import { AdminAppMain } from "./panelAdminApp/AdminAppMain/AdminAppMain";
import { PerfilMain as PerfilAdminMain} from "./panelAdminApp/Perfil/PerfilMain";
import { OperacionCuentaAdmin } from "./panelAdminApp/OperacionAdminApp/components/OperacionCuentaAdmin";
import { ConvocatoriasCerradas } from "./panelAdminFundacion/FundacionMain/components/ConvocatoriasCerradas";
import { HomePage } from "./HomePage/HomePage";
import { ListaVoluntariados } from "./panelAdminFundacion/Voluntariados/components/ListaVoluntariados";

export const AppRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* Generales*/}
                {/* Chequea si  el usuario esta logeado o no*/}
                <Route path="/" element= {<HomePage/>} >
                </Route>
                <Route path="/login" element={!isUserLogged() ? <Login/> : <Navigate to="/home" />}>
                </Route>
                <Route path="/cuenta" element={isAdminFundacionAuthenticated() ? <FundacionMain/> : <PerfilMain/>}>
                </Route>
                <Route path="/crear-cuenta" element={!isUserLogged() ? (<OperacionCuentaVoluntario operacion="Crear"/>) : (<Login/>) } >
                </Route>
                <Route path="/crear-cuenta-fundacion" element={!isUserLogged() ? (<OperacionCuentaFundacion operacion="Crear"/>) : (<Navigate to="/login" />) } >
                </Route>
                
                {/*
                {/* RUTAS SOLO PARA ADMIN_APP*/}
                {/* FUNCIONES DEL ADMIN_APP EN HOTEL*/}
                <Route path="/adminapp-main" element={isAdminAppAuthenticated() ? (<AdminAppMain/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/cuenta-admin" element={isAdminAppAuthenticated() ? (<PerfilAdminMain/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/editar-cuenta-adminapp" element={isAdminAppAuthenticated() ? (<OperacionCuentaAdmin operacion="Editar"/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/crear-cuenta-adminapp" element={isAdminAppAuthenticated() ? (<OperacionCuentaAdmin operacion="Crear"/>) : (<Navigate to="/login" />) } >
                </Route>

                {/* RUTAS SOLO PARA ADMIN_FUNDACION*/}
                <Route path="/fundacion-main" element={isAdminFundacionAuthenticated() ? (<FundacionMain />) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/aplicaciones" element={isAdminFundacionAuthenticated() ? (<Aplicaciones />) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/editar-cuenta-fundacion" element={isAdminFundacionAuthenticated() ? (<OperacionCuentaFundacion operacion="Editar"/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/convocatorias-fundacion" element={isAdminFundacionAuthenticated() ? (<PublicacionesFundacion soloConvocatorias={true}/>) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/historial-convocatorias" element={isAdminFundacionAuthenticated() ? (<ConvocatoriasCerradas />) : (<Navigate to="/login" />) } >
                </Route>
                <Route path="/editar-convocatoria" element={isAdminFundacionAuthenticated() ? (<EditarConvocatoria/>) : (<Navigate to="/login" />) } >
                </Route>  
                <Route path="/lista-voluntariados" element={isAdminFundacionAuthenticated() ? (<ListaVoluntariados/>) : (<Navigate to="/login" />) } >
                </Route>                  
                
                {/* RUTAS SOLO PARA USUARIOS*/}
                {/* FUNCIONES DEL USUARIO AL LOGEARSE*/}
                <Route path="/home" element={isVoluntarioAuthenticated() ? (<VoluntarioMain/>) : (<FundacionMain/>) } >
                </Route>
                <Route path="/editar-cuenta" element={isVoluntarioAuthenticated() ? (<OperacionCuentaVoluntario operacion="Editar"/>) : (<Login/>) } >
                </Route>
                <Route path="/search" element={isVoluntarioAuthenticated() || isAdminFundacionAuthenticated() ? (<SearchResults />) : (<Login/>) } > 
                </Route>

            </Routes>
        </>
    )
}
