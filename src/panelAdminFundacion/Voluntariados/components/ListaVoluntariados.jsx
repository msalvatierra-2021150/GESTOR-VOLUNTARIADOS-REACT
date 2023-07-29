import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Footer } from "../../../Footer";
import {
  getVoluntariadosActivos,
  getVoluntario,
} from "../api/apiVoluntariados";
import { ModalDocumentos } from "./ModalDocumentos";
import { ModalConvocatoria } from "./ModalConvocatoria";
import { apiGetConvocatoriaById } from "../../FundacionMain/api/apiConvocatoria";

export const ListaVoluntariados = () => {
  const maxResultsPerPage = 10;
  const [results, setResults] = useState(0);
  const [userFile, setUserFile] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalConvocatoria, setShowModalConvocatoria] = useState(false);

  const getVoluntariados = async () => {
    const { coincidencias, totalCoincidencias } =
      await getVoluntariadosActivos();
    setVoluntariados(coincidencias);
    setResults(totalCoincidencias);
  };

  const totalPages = Math.ceil(results / maxResultsPerPage);
  const maxButtons = Math.min(totalPages, 10);
  const [currentPage, setCurrentPage] = useState(1);
  const [voluntariados, setVoluntariados] = useState([]);
  const [convocatoria, setConvocatoria] = useState({});

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString("es-ES", options);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    handleSearch(page);
  };

  const handleSearch = async (limite) => {
    const { aplicaciones } = await getVoluntariadosActivos(
      (limite - 1) * maxResultsPerPage,
      limite * maxResultsPerPage
    );
    setVoluntariados(aplicaciones);
  };

  useEffect(() => {
    getVoluntariados();
  }, []);
  //useEffect(() => { handleSearch(currentPage); }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const buscarUserFiles = async (id) => {
    const users = await getVoluntario(id);
    setUserFile(users);
    setShowModal(true);
  };

  const mostrarModalConvocatoria = async (id) => {
    const convocatoria = await apiGetConvocatoriaById(id);
    setConvocatoria(convocatoria);
    setShowModalConvocatoria(true);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="mb-3">
              <h5 className="card-title">
                Tus voluntariados activos:
                <span className="text-muted fw-normal ms-2"></span>
              </h5>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div className="info">
                <div
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-danger mx-1 fw-bold text-white"
                >
                  Tus voluntariados activos: {voluntariados.length}
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
                      <th scope="col">ID del Voluntariado</th>
                      <th scope="col">ID de la convocatoria</th>
                      <th scope="col">Nombre convocatoria</th>
                      <th scope="col">Fecha Inicio</th>
                      <th scope="col">Fecha Finalización</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Voluntarios</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voluntariados.length !== 0
                      ? voluntariados.map((v) => {
                          return (
                            <tr key={v._id}>
                              <td>{v._id}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={() =>
                                    mostrarModalConvocatoria(
                                      v.convocatoria_voluntariado._id
                                    )
                                  }
                                >
                                  Ver Convocatoria
                                </button>
                              </td>
                              <td>{v.convocatoria_voluntariado.titulo}</td>
                              <td>{formatDate(v.fechaHoraInicio)}</td>
                              <td>{formatDate(v.fechaHoraFin)}</td>
                              <td>{v.estado ? "Activo" : "Finalizado"}</td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  onClick={() => buscarUserFiles(v.voluntarios)}
                                >
                                  Ver Voluntarios
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : []}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">
                Mostrando {(currentPage - 1) * maxResultsPerPage} a{" "}
                {currentPage * maxResultsPerPage} de {results} voluntariados
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button className="page-link" onClick={handlePrevPage}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                </li>
                {[...Array(maxButtons)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <li
                      className={`page-item ${
                        currentPage === page ? "active" : ""
                      }`}
                      key={page}
                    >
                      <button
                        className="page-link"
                        onClick={() => handleClick(page)}
                      >
                        {page}
                      </button>
                    </li>
                  );
                })}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button className="page-link" onClick={handleNextPage}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showModalConvocatoria && (
        <ModalConvocatoria
          onClose={() => setShowModalConvocatoria(false)}
          Convocatoria={convocatoria}
        />
      )}
      {showModal && (
        <ModalDocumentos onClose={() => setShowModal(false)} users={userFile} />
      )}
    </>
  );
};
