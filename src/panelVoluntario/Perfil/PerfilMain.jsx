import React, { useEffect, useState } from "react";
import { Perfil } from "./components/Perfil";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiGetPdfArchivo, apiGetVoluntario, apiVoluntarioDelete } from "./api/apiVoluntario";
import Swal from 'sweetalert2'; 
export const PerfilMain = () => {
  const [usuario, setUsuario] = useState([])
  const viewVoluntarioList = async () => {
    const getListVoluntarioFromApi = await apiGetVoluntario();
    setUsuario(getListVoluntarioFromApi);
  };
  useEffect(() => {
    viewVoluntarioList();
  }, []);
 

  const VisualizarPdf = async (nombreArchivo) => {
   

    try {
      const archivoBlob = await apiGetPdfArchivo(nombreArchivo);

      window.open(archivoBlob, "_blank");
    } catch (error) {
      console.error("Error al descargar o mostrar el archivo:", error);
    }
  };
    const eliminarVoluntario = async (id) => {
    let result = await apiVoluntarioDelete(id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Voluntario Eliminado",
        text: "Se ha eliminado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
    });
    } else {
      Swal.fire({
        icon: "info",
        title: "Error",
        text: "No se ha podido eliminar",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
    });
    }
  };

  return (
    <>
      <div className="container custom-container">
        <div className="profile-page tx-13">
          <div className="row">
            <Perfil fotoFondo={usuario.fotoFondo} fotoPerfil={usuario.fotoPerfil} nombre={usuario.nombre} />
          </div>
          <div className="row profile-body">
            <div className="offset-1 col-10 offset-1">
              <div className="card rounded">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="card-title mb-0">Acerca de</h6>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdownMenuButton3"
                        className="btn p-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-more-horizontal icon-lg pb-3px"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Link to="/editar-cuenta">
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="mx-1"
                            />
                            Editar
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Hi! I'm Amiah the Senior UI Designer at Vibrant. We hope you
                    enjoy the design and quality of Social.
                  </p>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Nombre:
                    </label>
                    <p className="text-muted">{usuario.nombre}</p>
                  </div>
                  <div className="mt-3">
                    Correo Electronico:
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase"></label>
                    <p className="text-muted">{usuario.correo}</p>
                  </div>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Mis telefono
                    </label>
                    <p className="text-muted">{usuario.telefono}</p>
                  </div>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Mi direccion:
                    </label>
                    <p className="text-muted">
                    {usuario.direccion}
                    </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mi curriculum vitae:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary"
                       type="button"
                       onClick={() => VisualizarPdf(usuario.CV)}
                      >Ver mi CV</button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mis antecedentes Penales:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary" 
                      type="button"

                      onClick={() => VisualizarPdf(usuario.antecedentes)}>
                        Ver mis antecedentes
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mi DPI:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary"
                       type="button"
                       onClick={() => VisualizarPdf(usuario.DPI)}
                      >Ver mi DPI</button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mi DPI:
                      </label>
                    </div> 
                    <div>
                      <a onClick={()=>eliminarVoluntario(usuario._id)} className="text-decoration-underline">Eliminar mi cuenta</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
