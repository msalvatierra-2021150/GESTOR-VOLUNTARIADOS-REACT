import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export const InformacionFundacion = ({ objetos }) => {
  console.log(objetos);
  return (
    <>
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
                  <Link to="/editar-cuenta-fundacion">
                    <FontAwesomeIcon icon={faPenToSquare} className="mx-1" />
                    Editar
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p>{objetos.acerca_de}</p>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Direccion:
            </label>
            <p className="text-muted">{objetos.direccion} </p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Telefono:
            </label>
            <p className="text-muted">{objetos.telefono}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Correo Electronico:
            </label>
            <p className="text-muted">{objetos.correo}</p>
          </div>
          <div className="mt-3">
            <p className="tx-11 font-weight-bold mb-0 text-uppercase">
              Sitio Web:
            </p>
            <a className="text-muted" href={objetos.sitio_web}>
              Presione Aqui
            </a>
          </div>
          <div className="mt-3 d-flex social-links">
            <a
              href="javascript:;"
              className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon github"
            >
              <a className="text-muted" href={objetos.facebook}>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
             
            </a>
            <a
              href="javascript:;"
              className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="javascript:;"
              className="btn d-flex align-items-center justify-content-center border mr-2 btn-icon instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
