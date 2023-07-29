import React, { useEffect, useState } from "react";
import banco from "/src/img/logo.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { apiFundacionDelete } from "../api/apiFundaciones";
import Swal from 'sweetalert2';

export const PerfilFundacion = ({fotoP , fotoF, nombre, id}) => {
 
  const eliminarFundacion= async (id) => {
    let result = await apiFundacionDelete(id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Fundacion Eliminado",
        text: "Se ha eliminado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
    });
    } else {
      Swal.fire({
        icon: "info",
        title: "Error",
        text: "No se ha podido eliminar",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
    });
    }
  }
  const [show, setShow] = useState(false);
  const [idUsuarioAEliminar, setidUsuarioAEliminar] = useState('')

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = (usuarioId) => {
    setShow(true);
    setidUsuarioAEliminar(usuarioId);
  };


  return (
    <>
      <div className="col-12 grid-margin mt-5">
        <div className="profile-header">
          <div className="cover">
            <figure>
              <Image
                src={fotoF}
                alt="profile cover"
              />
            </figure>
            <div className="cover-body d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <Image
                  className="profile-pic"
                  src={fotoP} 
                  alt="profile"
                />
                <span className="profile-name">
                 {nombre}
                </span>
              </div>
              <div className="d-flex justify-content-center flex-sm-row account-buttons-main">
                {/*El Boton es para triggear el collapse de Convocatoria */}
                <button
                  className="btn btn-primary btn-auto"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <FontAwesomeIcon icon={faPlus}  className="mx-1"/>
                  Nueva convocatoria
                </button>
                <Link
                  className="btn btn-warning mx-3 btn-auto"
                  to="/editar-cuenta-fundacion"
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
                    className="feather feather-edit btn-icon-prepend"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>{" "}
                  Editar perfil
                </Link>
                <button
                  className="btn btn-danger me-4 btn-auto"
                  type="button"
                  onClick={() => handleShow(id)}
                >
                  <FontAwesomeIcon icon={faPlus}  className="mx-1"/>
                  Eliminar mi cuenta
                </button>
              </div>
            </div>
          </div>
          <div className="header-links">
            <ul className="links d-flex align-items-center mt-3 mt-md-0 pb-5"></ul>
          </div>
        </div>
        <div className="container account-buttons">
        <div className=" mt-2">
                {/*BOTONES PARA SCREENS DE CELULAR */}
                <button
                  className="btn btn-primary w-100 my-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <FontAwesomeIcon icon={faPlus}  className="mx-1"/>
                  Nueva convocatoria
                </button>
                <Link
                  className="btn btn-warning w-100"
                  to="/editar-cuenta-fundacion"
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
                    className="feather feather-edit btn-icon-prepend"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>{" "}
                  Editar perfil
                </Link>
                <button
                  className="btn btn-danger w-100 mt-2"
                  type="button"
                  onClick={() => handleShow(id)}
                >
                  <FontAwesomeIcon icon={faPlus}  className="mx-1"/>
                  Eliminar mi cuenta
                </button>
              </div>
        </div>

      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ELiminación de cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mb-0">
          <div className="d-flex justify-content-center">
            <Image style={{ width: "55%" }} src={banco} fluid />
          </div>
          <p className="fw-semibold text-center">¿Deseas eliminar tu cuenta?</p>
          <p className="fw-light text-center">Esta acción es irreversible y una vez eliminada tu cuenta, no podrás recuperar la misma.</p></Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
        <Button variant="danger" className="w-25" onClick={() => (eliminarFundacion(idUsuarioAEliminar))}>
            Eliminar
          </Button>
          <Button variant="success" className="w-25" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
