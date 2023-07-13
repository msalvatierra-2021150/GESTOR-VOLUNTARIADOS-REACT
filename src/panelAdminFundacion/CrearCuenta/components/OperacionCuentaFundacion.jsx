import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavBarSinLogeo } from "../../../NavBarSinLogeo";

export const OperacionCuentaFundacion = ({ operacion = "Edit" , id = ''}) => {
  let showPassword = true;
  if (operacion === "Editar") {
    showPassword = false;
  }
  return (
    <>
      <NavBarSinLogeo/>
      <div className="banner">
        <div className="container p-3 crear-cuenta">
          <div
            className="card mx-2 mt-n5 shadow-lg mt-5"
            style={{ borderRadius: "0px", border: "none" }}
          >
            <div className="card-body p-5">
              <h4
                className="card-title mb-3 text-dark text-uppercase"
                style={{ fontWeight: "700" }}
              >
                {operacion} Cuenta Fundacion
              </h4>
              <form>
                <div className="row">
                  <div className={showPassword ? "col-md-6 col-sm-12" : "col-12"}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput1">
                        Nombre de la Fundación
                      </label>
                    </div>
                  </div>
                  {showPassword ? (
                    <div className="col-md-6 col-sm-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder=" "
                        />
                        <label htmlFor="floatingEmailInput">Contraseña</label>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="correo"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput2">
                        Correo electrónico
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="sitioWeb"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Sitio Web</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="telefono"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Teléfono</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="direccion"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Dirección</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="horarios"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Horarios</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-floating mb-3">
                      <textarea
                        type="text"
                        className="form-control"
                        id="acercade"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Acerca de</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de perfil</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="imgperfil"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de Fondo</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="imgfondo"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <label className="my-2">Vincule sus redes sociales: </label>
                  <div className="input-group mb-3">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <input
                          type="text"
                          className="form-control ml-3"
                          placeholder="URL de Instagram"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <input
                          type="text"
                          className="form-control ml-3"
                          placeholder="URL de Facebook"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="URL de Twitter"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "0px" }}
                  >
                    {operacion} Cuenta
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
