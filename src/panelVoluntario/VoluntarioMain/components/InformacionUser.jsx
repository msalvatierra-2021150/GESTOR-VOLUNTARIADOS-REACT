import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { apiGetUsuarioLogeado } from "../api/ApiUsuario";

export const InformacionUser = () => {
  const [usuario, setUsuario] = useState('');

  const viewUsuarioInfo = async () => {
    const getUsuarioFromApi = await apiGetUsuarioLogeado();
    setUsuario(getUsuarioFromApi);
  };

  useEffect(() => {
    viewUsuarioInfo();
  }, [])
  

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="card-title mb-0">¡Bienvenido {usuario.nombre}!</h6>
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
            <h6>Acerca de Ti</h6>
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Nombre:
            </label>
            <p className="text-muted">{usuario.nombre}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Correo Electrónico:
            </label>
            <p className="text-muted">{usuario.correo}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Teléfono:
            </label>
            <p className="text-muted">{usuario.telefono}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Dirección:
            </label>
            <p className="text-muted">{usuario.direccion}</p>
          </div>
        </div>
      </div>
    </>
  );
};