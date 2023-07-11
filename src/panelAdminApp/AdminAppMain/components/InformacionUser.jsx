import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const InformacionUser = () => {
  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="card-title mb-0">¡Bienvenido @Admin!</h6>
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
                  <Link to='/editar-cuenta-fundacion'>
                    <FontAwesomeIcon icon={faPenToSquare} className="mx-1"/>Editar
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p>
          "Juntos, cambiemos el mundo, un voluntariado a la vez."
          </p>
          <div className="mt-3">
            <h6>Estadisticas</h6>
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Cantidad de fundaciones registradas:
            </label>
            <p className="text-muted">0</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Cantidad de volunatios registrados:
            </label>
            <p className="text-muted">0</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Voluntariados activos:
            </label>
            <p className="text-muted">0</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Convocatorias realizadas:
            </label>
            <p className="text-muted">0</p>
          </div>
          <div className="mt-3 d-flex social-links">

          </div>
        </div>
      </div>
    </>
  );
};