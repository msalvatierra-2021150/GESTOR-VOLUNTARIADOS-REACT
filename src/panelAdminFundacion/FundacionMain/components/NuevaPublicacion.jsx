import React from "react";
import { Image, Button, Form, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export const NuevaPublicacion = () => {
  return (
    <>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div className="card rounded">
            <div className="card-header">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    className="img-xs rounded-circle"
                    src="https://hermanopedrogt.org/wp-content/uploads/2022/06/ISOTIPO-06.png"
                    alt=""
                  />
                  <div className="ml-2 d-flex align-items-center">
                    <p>Obras Sociales del Hermano Pedro</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Form.Group controlId="exampleForm.ControlTextarea">
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
                <div className="form-floating mb-3">
                  <textarea
                    type="text"
                    className="form-control"
                    id="descripcion"
                    placeholder=" "
                  />
                  <label htmlFor="floatingTextInput1">Descripción</label>
                </div>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"
                >
                  <option>Departamento</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="cupo"
                    placeholder=" "
                  />
                  <label htmlFor="floatingTextInput1">Cupo</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="fechaDeInicio"
                    placeholder=" "
                  />
                  <label htmlFor="floatingTextInput1">Fecha de Inicio</label>
                </div>
                <label>Fecha de Finalizacion: </label>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    id="FechaFin"
                    placeholder=" "
                  />
                  <label htmlFor="floatingTextInput1">
                    Fecha Finalización:
                  </label>
                  <div className="">
                    <label className="my-2">Imagen de la convocatoria</label>
                    <div>
                      <input
                        type="file"
                        className="form-control"
                        id="imgperfil"
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="card-footer">
              <div className="d-flex post-actions">
                <Button className="btn btn-primary btn-icon-text btn-edit-profile">
                  Publicar
                </Button>
                <Button
                  className="btn btn-danger mx-1 btn-icon-text btn-edit-profile"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
