import { useEffect, useState } from "react";
import { Image, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiConvocatoriasCerradas } from "../api/apiConvocatorias";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../../../Footer";

export const ConvocatoriasCerradas = () => {
  const maxResultsPerPage = 5;
  const [results, setResults] = useState(0);

  const getConvocatorias = async () => {
    const { convocatorias, totalConvocatoria } =
      await apiConvocatoriasCerradas();
    setResults(totalConvocatoria);
    setConvocatorias(convocatorias);
  };

  const totalPages = Math.ceil(results / maxResultsPerPage);
  const maxButtons = Math.min(totalPages, 5);
  const [currentPage, setCurrentPage] = useState(1);
  const [convocatorias, setConvocatorias] = useState([]);

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
    const { convocatorias } = await apiConvocatoriasCerradas(
      (limite - 1) * maxResultsPerPage,
      limite * maxResultsPerPage
    );
    setConvocatorias(convocatorias);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getConvocatorias();
  }, []);
  useEffect(() => {
    handleSearch(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="container">
        <div className="col-md-8 offset-md-2">
        <div className="d-flex flex-column align-items-center">
            <h3 className="mt-3">Tus Convocatorias cerradas:</h3>
              <Link
                to="/convocatorias-fundacion"
                className="btn btn-primary btn-block mt-2 mb-3"
              >
                Ver Convocatorias abiertas
              </Link>
          </div>
          {convocatorias.map((c) => {
            return (
              <div className="card rounded mt-2" key={c._id}>
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                    <Image
                        className="img-xs rounded-circle"
                        src={c.fundacion.fotoPerfil}
                        alt=""
                      />
                      <div className="fw-semibold ms-2">
                        <p>{c.fundacion.nombre}</p>
                      </div>
                    </div>
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
                      <Dropdown.Item onClick={ ()=> localStorage.setItem("idConvocatoria",c._id)}>
                          
                          <Link to="/editar-convocatoria">
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="mx-1"
                            />
                            Editar publicacion
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to={`/aplicaciones?id_convocatoria=${c._id}`}>
                            <FontAwesomeIcon icon={faEye} className="mx-1" />
                            Ver aplicaciones
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="mb-4 tx-14">¿De que se trata?: {c.titulo}</h5>
                  <p className="mb-3 tx-14">
                    Descripcion del voluntariado: {c.descripcion}
                  </p>
                  <p className="mb-3 tx-14">Cupo disponible: {c.cupo}</p>
                  <p className="mb-3 tx-14">
                    En donde es el voluntariado: {c.lugar}
                  </p>
                  <p className="mb-3 tx-14">
                    Fecha inicio: {formatDate(c.fecha_inicio)}
                  </p>
                  <p className="mb-3 tx-14">
                    Hora inicio: {formatTime(c.fecha_inicio)}
                  </p>
                  <p className="mb-3 tx-14">
                    Fecha fin: {formatDate(c.fecha_fin)}
                  </p>
                  <p className="mb-3 tx-14">
                    Hora fin: {formatTime(c.fecha_fin)}
                  </p>
                  <Image className="img-fluid" src={c.imagen} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row mt-2">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="col-12">
                    <ul className="pagination mb-sm-0">
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
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
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
