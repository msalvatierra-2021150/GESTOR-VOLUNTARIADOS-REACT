import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import banco from "../../../img/logo.png";
import Swal from 'sweetalert2';
import { apiSearchConvocatorias } from "../../../panelVoluntario/VoluntarioMain/api/apiConvocatorias";
import { apiAplicacionDelAdmin } from "../api/AplicacionDelAdmin";


export const PublicacionesFundacion = ({ soloConvocatorias = "" }) => {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {

    const getCoincidenciasSinFiltro = async () => {
      const { coincidencias, registros } = await apiSearchConvocatorias();
      setConvocatorias(coincidencias);
      setTotalPages(Math.ceil(registros / maxResultsPerPage));
    };

      getCoincidenciasSinFiltro();
  }, []);

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

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    handleSearch(page);
  };

  //MODAL
  const [show, setShow] = useState(false);
  const [idConvocatoria, setIdConvocatoria] = useState('')

  const handleClose = () => setShow(false);
  const handleShow = (idConvocatoria) => {
    console.log(idConvocatoria);
    setShow(true);
    setIdConvocatoria(idConvocatoria);
  };

  const aplicarVoluntariado = async () => {
    const result = await apiAplicacionDelAdmin(idConvocatoria);

    if (result) {
      Swal.fire({
        icon: "success",
        title: "¡Gracias, por sumarte al cambio!",
        text: "Has aplicado a esta convocatoria correctamente.",
        confirmButtonText: "Ok",
      }).then(() => {
        location.reload();
      });
    }
  };

  return (
    <>
        <>
          {convocatorias.map((c) => {
            return (
              <div className="card rounded mt-2" key={c._id}>
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Image
                        className="img-xs rounded-circle"
                        src={c.fundacion.fotoPerfil}
                        alt={c.fundacion.nombre}
                      />
                      <div className="ml-2">
                        <p className="px-2 fw-semibold">{c.fundacion.nombre}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="mb-4 tx-14">¿De qué se trata?: {c.titulo}</h5>
                  <p className="mb-3 tx-14">
                    Descripción del voluntariado: {c.descripcion}
                  </p>
                  <p className="mb-3 tx-14">Cupo disponible: {c.cupo}</p>
                  <p className="mb-3 tx-14">
                    En dónde es el voluntariado: {c.lugar}
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
                <div className="card-footer">
                  <div className="d-flex flex-column align-items-center">
                    <h6>¿Te interesaría participar? ¡Aplica!</h6>
                    <Button variant="primary" onClick={() => handleShow(c._id)}>
                      Aplicar a la convocatoria
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Aplicación a Convocatoria</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-0">
          <div className="d-flex justify-content-center">
            <Image style={{ width: "55%" }} src={banco} fluid />
          </div>
          <p className="fw-semibold text-center">¿Deseas participar en este voluntariado?</p>
          <p className="fw-light">(Enviarás tu infomación a la fundación, y podrá revisar esta antes de aceptar)</p></Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="success" onClick={aplicarVoluntariado}>
            Si, Deseo Participar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
