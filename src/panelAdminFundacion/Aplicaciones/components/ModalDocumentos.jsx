import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
export const ModalDocumentos = ({ onClose, CV, DPI, antecedentes }) => {
    const [showMOdal, setshowMOdal] = useState(true)    
 
  useEffect(() => {
    setshowMOdal(true);
  }, []);
  const handleClose = () => {
    setshowMOdal(false);
    onClose();
  };

   
  const VisualizarPdf = async (nombreArchivo) => {
    try {
      window.open(nombreArchivo, "_blank");
    } catch (error) {
      console.error("Error al descargar o mostrar el archivo:", error);
    }
  };
  console.log(showMOdal);
  return (
    <>
      <Modal show={showMOdal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-dark">Documentos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Documentos</p>
          <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    Curriculum vitae:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => VisualizarPdf(CV)}
                  >
                    Ver mi CV
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    DPI:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => VisualizarPdf(DPI)}
                  >
                    Ver mi DPI
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    Antecedentes:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => VisualizarPdf(antecedentes)}
                  >
                    Ver Antecedentes
                  </button>
                </div>
              </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="container">
            <div className="row">
              
              <div className="col-6">
                <button className="btn btn-primary" onClick={onClose}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};
