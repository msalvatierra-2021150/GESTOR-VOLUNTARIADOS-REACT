import React from "react";
import { Button } from "react-bootstrap";

export const EditarConvocatoria = () => {
  return (
    <>
      <div className="banner">
        <div className="container p-3 crear-cuenta">
          <div
            className="card mx-2 mt-n5 shadow-lg mt-5"
            style={{ borderRadius: "0px", border: "none" }}
          >
            <div className="card-body p-5">
              <h4
                className="card-title mb-3 text-dark text-uppercase"
                style={{ fontWeight: "700" }}
              >
                Editar convocatoria
              </h4>
              <form>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="nombreconvocatoria"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput1">
                        Nombre de la convocatoria
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="departamento"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Departamento</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="estado"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput2">
                        Estado
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="Number"
                        className="form-control"
                        id="cupo"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Cupo</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        id="telefono"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Fecha de inicio</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        id="direccion"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Fecha de finalización</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-floating mb-3">
                      <textarea
                        type="text"
                        className="form-control"
                        id="descripcion"
                        placeholder=" "
                      />
                      <label htmlFor="floatingEmailInput">Descripción</label>
                    </div>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de la  convocatoria 1</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="imgperfil"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de la  convocatoria 2</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="imgperfil"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de la  convocatoria 3</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="imgperfil"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "0px" }}
                  >
                    Guardar Cambios
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
