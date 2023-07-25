import { useState } from "react";
import { apiLogin } from "../api/apiLogin";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshakeAngle,
  faPersonShelter,
} from "@fortawesome/free-solid-svg-icons";
import { NavBarSinLogeo } from "../../NavBarSinLogeo";



export const Login = () => {
  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Manejo del state del email y del password
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate(); // create a navigate function

  const handleSubmit = async (event) => {
    event.preventDefault(); //Para que la pagina no se recarge
    const result = await apiLogin(correo, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Los datos ingresados son correctos",
        text: "Ha iniciado sesión correctamente",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          const [header, payload, signature] = result.split('.');
          const decodedPayload = JSON.parse(atob(payload));
          const userRole = decodedPayload.rol;
          localStorage.setItem("role", userRole)
          if (userRole === "ADMIN_APP") {
            window.location.href = "/adminapp-main";
          } else if (userRole === "ADMIN_FUNDACION") {
            window.location.href = "/fundacion-main";
          } else {
            window.location.href = "/home";
          }          
        }
      });
    }
  };

  return (
    <>
      <NavBarSinLogeo/>
      <div className="maincontainer">
        <div className="container-fluid">
          <div className="row no-gutter">

            <div className="col-md-6 d-none d-md-flex bg-image"></div>

            <div className="col-md-6 bg-light">
              <div className="login d-flex align-items-center py-5">

                <div className="container">
                  <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <h3 className="display-4">Bienvenido</h3>
                      <p className="text-muted mb-4">Por favor, ingresa tus datos para iniciar sesión.</p>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                          <input type="text" placeholder="Correo" id="email" value={correo} onChange={(e) => setCorreo(e.target.value)} className="form-control rounded-pill border-0 shadow-sm px-4" required />
                        </div>
                        <div className="mb-3">
                          <input id="password" type="password" placeholder="Contraseña" required className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" value={password} onChange={(p) => setPassword(p.target.value)} />
                        </div>
                        <div className="form-check">
                          <input id="customCheck1" type="checkbox" checked className="form-check-input" value={password} onChange={(p) => setPassword(p.target.value)} />
                          <label className="form-check-label">Recordar mi contraseña</label>
                        </div>
                        <div className="d-grid gap-2 mt-2">
                          <button type="submit" className="btn btn-primary btn-block text-uppercase  shadow-sm">Ingresar</button>
                        </div>
                        <div className="text-center d-flex justify-content-between mt-2"><a href="#" className="font-italic text-muted"> ¿Olvidaste tu contraseña?</a>
                        </div>
                        <hr/>
                        <div className="text-center d-flex justify-content-center mt-2 nuevo"><Link onClick={handleShow} className="font-italic text-muted">¿Eres Nuevo? ¡Registrate!</Link>
                        </div>
                      </form>
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
          <Modal.Title>Elige el tipo de cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
                    <div className="col-lg-10 col-xl-7 mx-auto">
                      <form className="d-flex justify-content-center align-items-center">
                        <div className="form-check">
                          <div className="row">
                            <div className="col-6">
                              <Link to="/crear-cuenta-fundacion" className="btn btn-primary">
                                <p className="mb-0">Fundacion</p>
                                <FontAwesomeIcon
                                  icon={faPersonShelter}
                                  className="mx-1"
                                  size="2xl"
                                />
                              </Link>
                            </div>
                            <div className="col-6">
                              <Link to="/crear-cuenta" className="btn btn-primary">
                                <p className="mb-0">Voluntario</p>
                                <FontAwesomeIcon
                                  icon={faHandshakeAngle}
                                  className="mx-1"
                                  size="2xl"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
