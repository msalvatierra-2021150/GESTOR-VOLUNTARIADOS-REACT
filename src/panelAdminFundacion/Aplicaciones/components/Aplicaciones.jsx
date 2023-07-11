import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Aplicaciones = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4">
            <div className="mb-3">
              <h5 className="card-title">
                Aplicaciones
                <span className="text-muted fw-normal ms-2">834</span>
              </h5>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
              <div className="info">
              <div
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-primary mx-1 fw-bold text-white"
                > Total aplicaciones: 200
                </div>
                <div
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-success mx-1 fw-bold"
                >Aplicaciones aceptadas: 25
                </div>
                <div
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-danger mx-1 fw-bold"
                >Aplicaciones rechazadas: 75
                </div>
                <div
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".add-new"
                  className="btn btn-warning mx-1 fw-bold text-white"
                > Aplicaciones pendientes: 100
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="ps-4"
                        style={{ width: "50px" }}
                      >
                        <div className="form-check font-size-16">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="contacusercheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="contacusercheck"
                          ></label>
                        </div>
                      </th>
                      <th scope="col">Voluntario</th>
                      <th scope="col">ID de la Convocatoria a la que aplica</th>
                      <th scope="col" >Estado</th>
                      <th scope="col">Documentación</th>
                      <th scope="col" className="text-center" style={{ width: "200px" }}>
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="ps-4">
                        <div className="form-check font-size-16">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="contacusercheck1"
                          />
                        </div>
                      </th>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          className="avatar-sm rounded-circle me-2"
                        />
                        <a href="#" className="text-body">
                          Simon Ryles
                        </a>
                      </td>
                      <td>
                        @34244nfafa34241
                      </td>
                      <td>Pendiente</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                            Ver aplicación
                        </button>
                      </td>
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item">
                          <button type="button" className="btn btn-success">
                            Aceptar
                            </button>
                            <button type="button" className="btn btn-danger mx-1">
                            Rechazar
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 align-items-center pb-4">
          <div className="col-sm-6">
            <div>
              <p className="mb-sm-0">Showing 1 to 10 of 57 entries</p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-sm-end">
              <ul className="pagination mb-sm-0">
                <li className="page-item disabled">
                  <a href="#" className="page-link">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </a>
                </li>
                <li className="page-item active">
                  <a href="#" className="page-link">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a href="#" className="page-link">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
