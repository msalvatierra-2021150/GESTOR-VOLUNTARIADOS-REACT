import React from "react";
import { Image, Button, Form, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

export const NuevaPublicacion = () => {
  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
              <button
                className="btn btn-primary  w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample1"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar Fundaciones
              </button>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-2">
              <button
                className="btn btn-success  w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar voluntarios
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
              <button
                className="btn btn-danger w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar convocatorias
              </button>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-2">
              <button
                className="btn btn-warning  w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar aplicaciones
              </button>
            </div>
          </div>
          <div className="collapse" id="collapseExample1">
            <div className="card card-body">
              <h6>Ingresa el nombre de la fundacion</h6>
              <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar fundaciones..."
                  aria-label="Search"
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </div>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              <h6>Ingresa el nombre del voluntario</h6>
              <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar fundaciones..."
                  aria-label="Search"
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </div>
          <div className="collapse" id="collapseExample3">
            <div className="card card-body">
              <h6>Ingresa el nombre de la convocatoria</h6>
              <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar fundaciones..."
                  aria-label="Search"
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </div>
          <div className="collapse" id="collapseExample4">
            <div className="card card-body">
              <h6>Ingresa el ID de la aplicacion</h6>
              <form className="form-inline my-2 my-lg-0 d-flex justify-content-center">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar fundaciones..."
                  aria-label="Search"
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
