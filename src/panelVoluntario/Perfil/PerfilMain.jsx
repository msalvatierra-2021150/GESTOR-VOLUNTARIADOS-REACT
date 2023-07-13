import React from "react";
import { Perfil } from "./components/Perfil";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const PerfilMain = () => {
  return (
    <>
      <div className="container custom-container">
        <div className="profile-page tx-13">
          <div className="row">
            <Perfil />
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
                          <Link to="/editar-cuenta">
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
                    <p className="text-muted">Khonatan Jose Acalon Ajanel</p>
                  </div>
                  <div className="mt-3">
                    Correo Electronico:
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase"></label>
                    <p className="text-muted">jacalon@correo.com</p>
                  </div>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Mis telefono
                    </label>
                    <p className="text-muted">4573-2317</p>
                  </div>
                  <div className="mt-3">
                    <label className="tx-11 font-weight-bold mb-0 text-uppercase">
                      Mi direccion:
                    </label>
                    <p className="text-muted">
                      52 Av. 4 52-3 Zona 3, Ciudad de Guatemala
                    </p>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mi curriculum vitae:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary">Ver mi CV</button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mis antecedentes Penales:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary">
                        Ver mis antecedentes
                      </button>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label className="tx-11 font-weight-bold mb- text-uppercase">
                        Mi DPI:
                      </label>
                    </div>
                    <div>
                      <button className="btn btn-primary">Ver mi DPI</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
