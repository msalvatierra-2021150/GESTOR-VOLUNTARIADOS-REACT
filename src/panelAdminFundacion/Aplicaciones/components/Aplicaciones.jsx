import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getContadoresConvo, getAplicacionesConvo, aceptarAplicacion, rechazarAplicacion } from "../api/apiAplicaciones";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Footer } from "../../../Footer";
import { ModalDocumentos } from "./ModalDocumentos";

export const Aplicaciones = () => {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  let convo = query.get('id_convocatoria');
  const maxResultsPerPage = 10;
  const [results, setResults] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const getContadores = async () => setContadores(await getContadoresConvo(convo));
  const getAplicaciones = async () => {
    const { aplicaciones, totalAplicaciones } = await getAplicacionesConvo(convo);
    setAplicaciones(aplicaciones);
    setResults(totalAplicaciones);
  }

  const totalPages = Math.ceil(results / maxResultsPerPage);
  const maxButtons = Math.min(totalPages, 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [contadores, setContadores] = useState([]);
  const [aplicaciones, setAplicaciones] = useState([]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };

  const formatTime = (timeString) => {
    const time = new Date(timeString);
    const options = { hour: "numeric", minute: "numeric" };
    return time.toLocaleTimeString("es-ES", options);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    handleSearch(page);
  };

  const handleSearch = async (limite) => {
    const { aplicaciones } = await getAplicacionesConvo(convo, (limite - 1) * maxResultsPerPage, limite * maxResultsPerPage);
    setAplicaciones(aplicaciones);
  };

  useEffect(() => { getContadores(); getAplicaciones(); }, []);
  useEffect(() => { handleSearch(currentPage); }, [currentPage]);

  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1); };
  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1); };

  const aceptarCandidato = async (id) => {
    const response = await aceptarAplicacion(id);
    if (response === 'Acepto la aplicación correctamente') {
      Swal.fire({
        title: "¡Candidato aceptado!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#7fad39",
      });
      getContadores();
      getAplicaciones();
    }
  };

  const rechazarCandidato = async (id) => {
    const response = await rechazarAplicacion(id);
    if (response === 'Rechazo la aplicación correctamente') {
      Swal.fire({
        title: "¡Candidato rechazado!",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#7fad39",
      });
      getContadores();
      getAplicaciones();
    }
  };
  console.log(aplicaciones.voluntario);
  console.log(showModal);
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="mb-3">
              <h5 className="card-title">
                Aplicaciones
                <span className="text-muted fw-normal ms-2">{contadores.aplicaciones_recibidas}</span>
              </h5>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div className="info">
                <div href="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary mx-1 fw-bold text-white">
                  Total aplicaciones: {contadores.aplicaciones_recibidas}
                </div>
                <div href="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-success mx-1 fw-bold">
                  Aplicaciones aceptadas: {contadores.aplicaciones_aceptadas}
                </div>
                <div href="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-danger mx-1 fw-bold">
                  Aplicaciones rechazadas: {contadores.aplicaciones_rechazadas}
                </div>
                <div href="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-warning mx-1 fw-bold text-white">
                  Aplicaciones pendientes: {contadores.aplicaciones_pendientes}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Nombre voluntario</th>
                      <th scope="col">Correo voluntario</th>
                      <th scope="col">Fecha de la aplicación</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Documentación</th>
                      <th scope="col" className="text-center" style={{ width: "200px" }}>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      aplicaciones.map((a) => {
                        return (
                          <tr key={a._id}>
                            <td>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                alt=""
                                className="avatar-sm rounded-circle me-2"
                              />
                              <a href="#" className="text-body">
                                {a.voluntario.nombre}
                              </a>
                            </td>
                            <td>{a.voluntario.correo}</td>
                            <td>
                              {" "}
                              {formatDate(a.fecha)}, {formatTime(a.fecha)}
                            </td>
                            <td>{a.estado}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setShowModal(true)}
                              >
                                Ver Documentación
                              </button>
                            </td>
                            {
                              showModal && (
                                <ModalDocumentos onClose={() => setShowModal(false) } DPI={a.voluntario.DPI} CV={a.voluntario.CV} antecedentes={a.voluntario.antecedentes}/>
                              )
                            }
          
      
                            <td>
                              {a.estado === "Aceptado" ||
                              a.estado === "Rechazado" ? (
                                <div className="text-wrap">
                                  <p>
                                    Ya se tomó la decisión para este voluntario
                                  </p>
                                </div>
                              ) : (
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item">
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      onClick={() => aceptarCandidato(a._id)}
                                    >
                                      Aceptar
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-danger mx-1"
                                      onClick={() => rechazarCandidato(a._id)}
                                    >
                                      Rechazar
                                    </button>
                                  </li>
                                </ul>
                              )}
                            </td>
                          </tr>
                        );
                      })
                      
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Mostrando {(currentPage - 1) * maxResultsPerPage} a {(currentPage) * maxResultsPerPage} de {results} aplicaciones</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={handlePrevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                </li>
                {[...Array(maxButtons)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <li className={`page-item ${currentPage === page ? "active" : ""}`} key={page}>
                      <button className="page-link" onClick={() => handleClick(page)}>
                        {page}
                      </button>
                    </li>
                  );
                })}
                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={handleNextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
};
