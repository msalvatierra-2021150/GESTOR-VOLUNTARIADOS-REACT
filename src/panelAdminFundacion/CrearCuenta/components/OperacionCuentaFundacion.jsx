import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavBarSinLogeo } from "../../../NavBarSinLogeo";
import { useState } from "react";
import { Fundacion } from "../models/models.fundacion";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  formOptions,
  formFundacionHelper,
} from "../helpers/formFundacionHelper";
import { apiGetFundacion, uploadFile } from "../api/apiFundacion";
export const OperacionCuentaFundacion = ({ operacion = "Edit", id = "" }) => {
  let showPassword = true;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nuevaF, setNuevaF] = useState(Fundacion);
  const [option, setoption] = useState(1);

  if (operacion === "Editar") {
    showPassword = false;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setNuevaF({ ...nuevaF });
    operacion === "Crear" ? [setoption(1)] : [setoption(2), listFundacion()];
  }, []);

  const listFundacion = async () => {
    const fundacionList = await apiGetFundacion();
    setNuevaF(fundacionList);
  };
  const crud = async () => {
    setLoading(true);
      let photoPerfil='';
      let photoFondo='';
      if (nuevaF.fotoPerfilFile==="si") {
        photoPerfil = await uploadFile(file.fotoPerfil);
      }
      if (nuevaF.fotoFondoFile==="si") {
        photoFondo = await uploadFile(file.fotoFondo);
      }
      setLoading(false);
    await formFundacionHelper(nuevaF,photoFondo,photoPerfil, option);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.name;
    const archivo = e.target.files[0];

    setFile((prevFormulario) => ({
      ...prevFormulario,
      [nombreArchivo]: archivo,
    }));
    setNuevaF({...nuevaF, [nombreArchivo+"File"]:'si'});
  };
   const loadigbar = () => {
    let timerInterval;
    Swal.fire({
      title: "Cargando Informacion",
      html: "Espere un poco",
      timer: 10000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };
  return (
    <>
      <NavBarSinLogeo />
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
                {operacion} Cuenta Fundacion
              </h4>
              <form className="formulario" onSubmit={handleSubmit(crud)}>
                <div className="row">
                  <div
                    className={showPassword ? "col-md-6 col-sm-12" : "col-12"}
                  >
                    <div className="form-floating mb-3">
                      <input
                        {...register("nombre")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.nombre}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, nombre: value }));
                        }}
                      />
                      <label htmlFor="floatingTextInput1">
                        Nombre de la Fundación
                      </label>
                    </div>
                  </div>
                  {showPassword ? (
                    <div className="col-md-6 col-sm-12">
                      <div className="form-floating mb-3">
                        <input
                          {...register("password")}
                          type="password"
                          placeholder=" "
                          className="form-control"
                          value={nuevaF.password}
                          onChange={({ target: { value } }) => {
                            setNuevaF(() => ({ ...nuevaF, password: value }));
                          }}
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
                        {...register("correo")}
                        type="email"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.correo}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, correo: value }));
                        }}
                      />
                      <label htmlFor="floatingTextInput2">
                        Correo electrónico
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("sitio_web")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.sitio_web}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, sitio_web: value }));
                        }}
                      />
                      <label htmlFor="floatingEmailInput">Sitio Web</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("telefono")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.telefono}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, telefono: value }));
                        }}
                      />
                      <label htmlFor="floatingEmailInput">Teléfono</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("direccion")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.direccion}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, direccion: value }));
                        }}
                      />
                      <label htmlFor="floatingEmailInput">Dirección</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("horarios")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.horarios}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, horarios: value }));
                        }}
                      />
                      <label htmlFor="floatingEmailInput">Horarios</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="form-floating mb-3">
                      <textarea
                        {...register("acerca_de")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={nuevaF.acerca_de}
                        onChange={({ target: { value } }) => {
                          setNuevaF(() => ({ ...nuevaF, acerca_de: value }));
                        }}
                      />
                      <label htmlFor="floatingEmailInput">Acerca de</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de perfil</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        name="fotoPerfil"
                        id="fotoPerfil"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Imagen de Fondo</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="fotoFondo"
                        name="fotoFondo"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <label className="my-2">Vincule sus redes sociales: </label>
                  <div className="input-group mb-3">
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faInstagram} />
                        </span>
                        <input
                          {...register("instagram")}
                          type="text"
                          className="form-control ml-3"
                          placeholder="URL de Instagram"
                          value={nuevaF.instagram}
                          onChange={({ target: { value } }) => {
                            setNuevaF(() => ({ ...nuevaF, instagram: value }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <input
                          {...register("facebook")}
                          type="text"
                          className="form-control ml-3"
                          placeholder="URL de facebook"
                          value={nuevaF.facebook}
                          onChange={({ target: { value } }) => {
                            setNuevaF(() => ({ ...nuevaF, facebook: value }));
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="input-group-text" id="basic-addon1">
                          <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <input
                          {...register("twitter")}
                          type="text"
                          className="form-control ml-3"
                          placeholder="URL de twitter"
                          value={nuevaF.twitter}
                          onChange={({ target: { value } }) => {
                            setNuevaF(() => ({ ...nuevaF, twitter: value }));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "0px" }}
                    onClick={crud}
                  >
                    {operacion} Cuenta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loading && loadigbar()}
    </>
  );
};
