import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const NuevaPublicacion = () => {
  return (
    <>
      <div className="card rounded">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="ml-2 d-flex align-items-center">
              <h5>Buscador de convocatorias</h5>
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
                <Dropdown.Item href="#">
                  <FontAwesomeIcon icon={faImage} className="mx-1" />
                  Agregar Imagen
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <div className="row g-0">
              <div className="col-4">
                <select
                  className="form-select"
                  aria-label=".form-select-sm example"
                >
                  <option>Departamento</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-8">
                <form className="d-flex">
                  <input
                    className="form-control me-0"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
