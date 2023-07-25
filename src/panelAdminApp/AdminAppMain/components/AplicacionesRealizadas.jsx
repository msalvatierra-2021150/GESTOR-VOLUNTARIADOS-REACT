import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { apiGetAplicacionesDelAdmin } from "../api/AplicacionDelAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import banco from "../../../img/logo.png";

export const AplicacionesRealizadas = () => {
  const [aplicaciones, setAplicaciones] = useState([]);

  const viewConvocatoriaList = async () => {
    const getListApliacionesFromApi = await apiGetAplicacionesDelAdmin();
    setAplicaciones(getListApliacionesFromApi);
  };

  useEffect(() => {
    viewConvocatoriaList();
  }, []);

  //MODAL
  const [show, setShow] = useState(false);
  const [estadoSolicitud, setEstadoSolicitud] = useState('');
  const [tituloConvocatoria, setTituloConvocatoria] = useState('')

  const handleClose = () => {
    setShow(false)
    setEstadoSolicitud('');
    setTituloConvocatoria('');
  };
  const handleShow = (tituloConvocatoria, estadoSolicitud) => {
    setShow(true)
    setEstadoSolicitud(estadoSolicitud);
    setTituloConvocatoria(tituloConvocatoria);
  };

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <h6 className="card-title">Tus aplicaciones</h6>
          <hr />
          {aplicaciones.length !== 0 ? (
            aplicaciones.map((p) => {
              return (
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <div className="d-flex align-items-center hover-pointer">
                    <Image
                      className="img-xs rounded-circle"
                      src={p.convocatoria.fundacion.fotoPerfil}
                      alt=""
                    />
                    <div className="ml-2">
                      <p>{p.convocatoria.titulo}</p>
                      <p className="tx-11 text-muted">Estado: {p.estado} </p>
                    </div>
                  </div>
                  <button className="btn btn-icon" onClick={() => handleShow(p.convocatoria.titulo ,p.estado)} >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
              <p>Aún no has aplicado a ninguna convocatoria :(</p>
            </div>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> {tituloConvocatoria}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-0">
          <div className="d-flex justify-content-center">
            <Image style={{ width: "55%" }} src={banco} fluid />
          </div>
          <p className="fw-semibold text-center">Tu solicitud está en proceso, pronto se te notificará la decisión tomada por la fundación.</p>
          <p className="fw-light text-center">Estado: {estadoSolicitud}</p></Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="success" className="w-25" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};