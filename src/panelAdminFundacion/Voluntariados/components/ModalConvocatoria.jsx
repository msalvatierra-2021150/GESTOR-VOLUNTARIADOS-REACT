import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Image } from "react-bootstrap";

export const ModalConvocatoria = ({onClose, Convocatoria}) => {

    const [showMOdal, setshowMOdal] = useState(true)    

    useEffect(() => {
      setshowMOdal(true);
    }, []);

    const handleClose = () => {
      setshowMOdal(false);
      onClose();
    };

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
      
  return (
    <>
    <Modal show={showMOdal} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title className="text-dark">Convocatoria</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className="container">
            <div className="row">
            <div className="card-body">
                  <h5 className="mb-4 tx-14">¿De que se trata?: {Convocatoria.titulo}</h5>
                  <p className="mb-3 tx-14">
                    Descripcion del voluntariado: {Convocatoria.descripcion}
                  </p>
                  <p className="mb-3 tx-14">Cupo disponible: {Convocatoria.cupo}</p>
                  <p className="mb-3 tx-14">
                    En donde es el voluntariado: {Convocatoria.lugar}
                  </p>
                  <p className="mb-3 tx-14">
                    Fecha inicio: {formatDate(Convocatoria.fecha_inicio)}
                  </p>
                  <p className="mb-3 tx-14">
                    Hora inicio: {formatTime(Convocatoria.fecha_inicio)}
                  </p>
                  <p className="mb-3 tx-14">
                    Fecha fin: {formatDate(Convocatoria.fecha_fin)}
                  </p>
                  <p className="mb-3 tx-14">
                    Hora fin: {formatTime(Convocatoria.fecha_fin)}
                  </p>
                  <Image className="img-fluid" src={Convocatoria.imagen} alt="" />
                </div>
            </div>
        </div>
    </Modal.Body>
        <Modal.Footer>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <button className="btn btn-danger" onClick={onClose}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
    
  )
}
