import { Modal } from "react-bootstrap";
export const ModalDocumentos = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className="text-dark">Documentos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Documentos</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-primary" onClick={onClose}>Cerrar</button>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}
