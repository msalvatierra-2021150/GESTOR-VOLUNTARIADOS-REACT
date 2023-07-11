import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import banco from "../../../img/logo.png";
import Swal from 'sweetalert2';
import { apiAplicacionDeVoluntario } from "../api/AplicacionDeVoluntario";
import { useNavigate } from 'react-router-dom';

export const PublicacionesFundacion = ({ soloConvocatorias = "" }) => {
  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const aplicarVoluntariado = async () => {
    const result = await apiAplicacionDeVoluntario('641e8631f3251766b3b74281');

    setShow(!result);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "¡Gracias, por sumarte al cambio!",
        text: "Has aplicado a esta convocatoria correctamente.",
        confirmButtonText: "Ok",
      })
    }
  }

  return (
    <>
      {soloConvocatorias ? (
        <div className=" mt-5">
          <div className=" offset-3 col-6">
            <div className="card rounded">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-xs rounded-circle"
                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                      alt=""
                    />
                    <div className="ml-2">
                      <p>Obras Sociales del Hermano Pedro</p>
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
                      <Dropdown.Item>
                        <Link to="/editar-convocatoria">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="mx-1"
                          />
                          Editar publicacion
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/aplicaciones">
                          <FontAwesomeIcon icon={faEye} className="mx-1" />
                          Ver aplicaciones
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <p className="mb-3 tx-14">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus minima delectus nemo unde quae recusandae assumenda.
                </p>
                <Image
                  className="img-fluid"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt=""
                />
              </div>
              <div className="card-footer">
                <div className="d-flex post-actions">{/*Aplicar */}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card rounded">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Image
                  className="img-xs rounded-circle"
                  src="https://hermanopedrogt.org/wp-content/uploads/2022/06/ISOTIPO-06.png"
                  alt=""
                />
                <div className="ml-2">
                  <p className="mx-2">Obras Sociales del Hermano Pedro</p>
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
                  <Dropdown.Item>
                    <Link to="/editar-convocatoria">
                      <FontAwesomeIcon icon={faPenToSquare} className="mx-1" />
                      Editar publicacion
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/aplicaciones">
                      <FontAwesomeIcon icon={faEye} className="mx-1" />
                      Ver aplicaciones
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="card-body">
            <p className="mb-3 tx-14">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus minima delectus nemo unde quae recusandae assumenda.
            </p>
            <Image
              className="img-fluid"
              src="https://hermanopedrogt.org/wp-content/uploads/2019/07/38-a%C3%B1os-VOLUNTARIADO2-1-1024x1024.jpg"
              alt=""
            />
          </div>
          <div className="card-footer">
            <div className="d-flex flex-column align-items-center">
              <h6>¿Te interesaría participar? ¡Aplica!</h6>
              <Button variant="primary" onClick={handleShow}>Aplicar a la convocatoria</Button>
            </div>
          </div>
        </div>
      )}
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
