import React from "react";
import { Button } from "react-bootstrap";

export const OperacionCuentaAdmin = ({ operacion = "Edit" , id = ''}) => {
  let showPassword = true;
  if (operacion === "Editar") {
    showPassword = false;
  }
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
                {operacion} Cuenta
              </h4>
              <form>
                <div className="row">
                  <div className={showPassword ? "col-md-6 col-sm-12" : "col-12"}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput1">
                        Nombre 
                      </label>
                    </div>
                  </div>
                  {showPassword ? (
                    <div className="col-md-6 col-sm-12">
                      <div className="form-floating mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder=" "
                        />
                        <label htmlFor="floatingEmailInput">Contraseña</label>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="correo"
                        placeholder=" "
                      />
                      <label htmlFor="floatingTextInput2">
                        Correo electrónico
                      </label>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Foto de Perfil</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="curriculumvitae"
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Mi Fondo de Perfil</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="curriculumvitae"
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
                    {operacion} Cuenta
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
