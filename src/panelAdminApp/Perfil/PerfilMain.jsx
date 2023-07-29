
import { Perfil } from "./components/Perfil";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiAdminDelete, apiGetAdmin } from "./api/apiAdmin";
import Swal from 'sweetalert2';
import banco from "/src/img/logo.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import { Footer } from "../../Footer";


export const PerfilMain = () => {
  const [usuario, setUsuario] = useState([])
  const viewAdminList = async () => {
    const getListVoluntarioFromApi = await apiGetAdmin();
    setUsuario(getListVoluntarioFromApi);
  };
  useEffect(() => {
    viewAdminList();
  }, []);

  const [show, setShow] = useState(false);
  const [idUsuarioAEliminar, setidUsuarioAEliminar] = useState('')

  const handleClose = () => {
    setShow(false)
  };

  const handleShow = (usuarioId) => {
    setShow(true);
    setidUsuarioAEliminar(usuarioId);
  };

  const eliminarAdmin = async (id) => {
    let result = await apiAdminDelete(id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Lamentamos verte partir",
        text: "Se ha eliminado tu cuenta correctamente.",
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
  };


  return (
    <>
      <div className="container custom-container">
        <div className="profile-page tx-13">
          <div className="row">
            <Perfil fotoFondo={usuario.fotoFondo} fotoPerfil={usuario.fotoPerfil} nombre={usuario.nombre} />
          </div>
          <div className="row profile-body">
            <div className="offset-1 col-10 offset-1">
              <div className="card rounded">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h6 className="card-title mb-0">Acerca de</h6>
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
                          <Link to="/editar-cuenta-adminapp">
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="mx-1"
                            />
                            Editar
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Hi! I'm Amiah the Senior UI Designer at Vibrant. We hope you
                    enjoy the design and quality of Social.
                  </p>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Nombre:
                    </label>
                    <p className="text-muted">{usuario.nombre} </p>
                  </div>
                  <div className="mt-3">
                    Correo Electronico:
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase"></label>
                    <p className="text-muted">{usuario.correo} </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <a  onClick={() => handleShow(usuario._id) } className="text-decoration-underline text-danger">Eliminar mi cuenta</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <Button variant="danger" className="w-25" onClick={() => (eliminarAdmin(idUsuarioAEliminar))}>
            Eliminar
          </Button>
          <Button variant="success" className="w-25" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer/>
    </>
  );
};
