import { useEffect, useState, useContext } from "react";
import { Image, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import DataContext from '../DataContext';
import { apiSearchConvocatorias } from "../api/apiConvocatorias";

export const PublicacionesFundacion = () => {
  const dataContext = useContext(DataContext);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getCoincidencias = async () => {
      const { coincidencias, registros } = await apiSearchConvocatorias(dataContext.searchData.termino, dataContext.searchData.nombreDep);
      setConvocatorias(coincidencias);
      setTotalPages(Math.ceil(registros / maxResultsPerPage));
    };

    const getCoincidenciasSinFiltro = async () => {
      const { coincidencias, registros } = await apiSearchConvocatorias();
      setConvocatorias(coincidencias);
      setTotalPages(Math.ceil(registros / maxResultsPerPage));
    };

    if (dataContext.searchData === '') { getCoincidenciasSinFiltro(); }

    if (dataContext.searchData !== '') { getCoincidencias(); }
  }, [dataContext.searchData]);

  const maxResultsPerPage = 5;
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

  const handlePrevPage = () => { if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1); };

  const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1); };

  const handleClick = (page) => {
    setCurrentPage(page);
    handleSearch(page);
  };

  const handleSearch = async (limite) => {
    const { coincidencias } = await apiSearchConvocatorias(dataContext.searchData.termino, dataContext.searchData.nombreDep, (limite - 1) * maxResultsPerPage, limite * maxResultsPerPage);
    setConvocatorias(coincidencias);
  };

  useEffect(() => { handleSearch(currentPage); }, [currentPage]);
  const handleGoBack = () => navigate(-1);

  return (
    <>
      {!dataContext.searchData.search ? (
        <>
          <button className="btn btn-danger" onClick={handleGoBack}>Cerrar la busqueda</button>
          {totalPages === 0 && (<p className="text-center">No se encontraron resultados</p>)}
          {
            convocatorias.map((c) => {
              return (
                <div className="card rounded mt-2" key={c._id}>
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image className="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                        <div className="ml-2"><p>{c.fundacion.nombre}</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="mb-4 tx-14">¿De que se trata?: {c.titulo}</h5>
                    <p className="mb-3 tx-14">Descripcion del voluntariado: {c.descripcion}</p>
                    <p className="mb-3 tx-14">Cupo disponible: {c.cupo}</p>
                    <p className="mb-3 tx-14">En donde es el voluntariado: {c.lugar}</p>
                    <p className="mb-3 tx-14">Fecha inicio: {formatDate(c.fecha_inicio)}</p>
                    <p className="mb-3 tx-14">Hora inicio: {formatTime(c.fecha_inicio)}</p>
                    <p className="mb-3 tx-14">Fecha fin: {formatDate(c.fecha_fin)}</p>
                    <p className="mb-3 tx-14">Hora fin: {formatTime(c.fecha_fin)}</p>
                    <Image
                      className="img-fluid"
                      src={c.array_img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })
          }
        </>
      ) : (
        <>
          {
            convocatorias.map((c) => {
              return (
                <div className="card rounded mt-2" key={c._id}>
                  <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <Image className="img-xs rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                        <div className="ml-2"><p>{c.fundacion.nombre}</p></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="mb-4 tx-14">¿De que se trata?: {c.titulo}</h5>
                    <p className="mb-3 tx-14">Descripcion del voluntariado: {c.descripcion}</p>
                    <p className="mb-3 tx-14">Cupo disponible: {c.cupo}</p>
                    <p className="mb-3 tx-14">En donde es el voluntariado: {c.lugar}</p>
                    <p className="mb-3 tx-14">Fecha inicio: {formatDate(c.fecha_inicio)}</p>
                    <p className="mb-3 tx-14">Hora inicio: {formatTime(c.fecha_inicio)}</p>
                    <p className="mb-3 tx-14">Fecha fin: {formatDate(c.fecha_fin)}</p>
                    <p className="mb-3 tx-14">Hora fin: {formatTime(c.fecha_fin)}</p>
                    <Image
                      className="img-fluid"
                      src={c.array_img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })
          }
        </>
      )}
      <div className="container mb-4">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row mt-2">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="col-12">
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
          </div>
        </div>
      </div>
    </>
  );
};