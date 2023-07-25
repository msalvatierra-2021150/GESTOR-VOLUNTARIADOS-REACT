import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
export const ModalDocumentos = ({ onClose, users }) => {
  const [showMOdal, setshowMOdal] = useState(true);

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
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">DPI</th>
                        <th scope="col">CV</th>
                        <th scope="col">Antecedentes</th>
                      </tr>
                    </thead>
                  </table>
                  <tbody>
                    {users.map((u) => {
                      return (
                        <tr key={u._id}>
                          <td>
                            {u.nombre}
                            {" |  "}
                          </td>
                          <td>
                            {u.telefono}
                            {" |  "}
                          </td>
                          {u.rol === "ADMIN_APP"
                            ? [<div className='d-flex justify-content-center' >
                              <p className="mt-3">Es administrador</p></div>]
                            : [
                                <div>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                      onClick={() => VisualizarPdf(u.DPI)}
                                    >
                                      DPI
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                      onClick={() => VisualizarPdf(u.CV)}
                                    >
                                      CV
                                    </button>
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      type="button"
                                      onClick={() =>
                                        VisualizarPdf(u.antecedentes)
                                      }
                                    >
                                      Antecedentes
                                    </button>
                                  </td>
                                </div>,
                              ]}
                        </tr>
                      );
                    })}
                  </tbody>
                </div>
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
