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

  return (
    <>
      <Modal show={showMOdal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="text-dark">Documentos del aplicante</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="container">
          <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    Curriculum vitae:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={() => VisualizarPdf(CV)}
                  >
                    Ver Curriculum Vitae
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    Documento Personal de Identificación:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={() => VisualizarPdf(DPI)}
                  >
                    Ver Documento Personal de Identificación
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <div>
                  <label className="tx-11 font-weight-bold mb- text-uppercase">
                    Antecedentes penales:
                  </label>
                </div>
                <div>
                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={() => VisualizarPdf(antecedentes)}
                  >
                    Ver Antecedentes penales
                  </button>
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
  );
};
