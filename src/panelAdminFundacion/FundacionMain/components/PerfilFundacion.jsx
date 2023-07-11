import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const PerfilFundacion = ({fotoP , fotoF, nombre}) => {
 
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
              <div className="d-none d-md-block">
                {/*El Boton es para triggear el collapse de Convocatoria */}
                <button
                  className="btn btn-primary"
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
                  className="btn btn-primary btn-icon-text btn-edit-profile mx-3"
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
              </div>
            </div>
          </div>
          <div className="header-links">
            <ul className="links d-flex align-items-center mt-3 mt-md-0 pb-5"></ul>
          </div>
        </div>
      </div>
    </>
  );
};
