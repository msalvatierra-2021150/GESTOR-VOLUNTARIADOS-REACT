import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Convocatoria = () => {
  return (
    <>
      <div className=" mt-5">
        <div className=" offset-2 col-8">
          <div className="card rounded">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    className="img-xs rounded-circle"
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                    alt=""
                  />
                  <div className="ml-2">
                    <p>Mike Popescu</p>
                  </div>
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
                    <Dropdown.Item>
                      <Link to="/editar-convocatoria">
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="mx-1"
                        />
                        Editar publicacion
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/aplicaciones">
                        <FontAwesomeIcon icon={faEye} className="mx-1" />
                        Ver aplicaciones
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <p className="mb-3 tx-14">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus minima delectus nemo unde quae recusandae assumenda.


                (convocatoria en voluntario)
              </p>
              <Image
                className="img-fluid"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
            </div>
            <div className="card-footer">
              <div className="d-flex post-actions">
                <button className="btn btn-primary">Aplicar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
