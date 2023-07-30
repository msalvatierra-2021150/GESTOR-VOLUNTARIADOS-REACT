import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  formOptions,
  formAdminHelper,
} from "../helpers/formAdminHelper";
import Swal from 'sweetalert2';
import { Admin } from "../models/admin.models";
import { apiGetAdmin } from "../../Perfil/api/apiAdmin";
import { Footer } from "../../../Footer";
import { uploadFile } from "../api/apiAdmin";
export const OperacionCuentaAdmin = ({ operacion = "Edit" , id = ''}) => {
  let showPassword = true;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState(Admin);
  const [option, setoption] = useState(1)
  if (operacion === "Editar") {
    showPassword = false;
    
  } 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  useEffect(() => {
    setAdmin({ ...admin });
    operacion === "Crear"? [setoption(1)]:[setoption(2),listAdmin()]
  }, []);

  const listAdmin = async () => {
    const adminList = await apiGetAdmin();   
    setAdmin(adminList);
  }

  const crud = async () => {
    console.log(file);
    console.log(admin);
    setLoading(true);
    let photoPerfil='';
      let photoFondo='';
      if (admin.fotoPerfilFile==="si") {
        photoPerfil = await uploadFile(file.fotoPerfil);
      }
      if (admin.fotoFondoFile==="si") {
        photoFondo = await uploadFile(file.fotoFondo);
      }
      setLoading(false);
    await formAdminHelper(admin,photoFondo,photoPerfil,option);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.name;
    const archivo = e.target.files[0];

    setFile((prevFormulario) => ({
      ...prevFormulario,
      [nombreArchivo]: archivo,
    }));
    setAdmin({...admin, [nombreArchivo+"File"]:'si'});
  };

  const loadigbar = () => {
    let timerInterval;
    Swal.fire({
      title: "Cargando Informacion",
      html: "Espere un poco",
      timer: 20000,
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
              <form className="formulario" onSubmit={handleSubmit(crud)}>
                <div className="row">
                  <div className={showPassword ? "col-md-6 col-sm-12" : "col-12"}>
                    <div className="form-floating mb-3">
                      <input
                        {...register("nombre")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={admin.nombre}
                        onChange={({ target: { value } }) => {
                          setAdmin(() => ({ ...admin, nombre: value }));
                        }}
                      />
                     {errors.nombre && <span>{errors.nombre.message}</span>}

                      <label htmlFor="floatingTextInput1">
                        Nombre 
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
                           value={admin.password}
                           onChange={({ target: { value } }) => {
                             setAdmin(() => ({ ...admin, password: value }));
                           }}
                        />
                       {errors.password && (<span>{errors.password.message}</span>)}

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
                        value={admin.correo}
                        onChange={({ target: { value } }) => {
                          setAdmin(() => ({ ...admin, correo: value }));
                        }}
                      />
                     {errors.correo && <span>{errors.correo.message}</span>}
                
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
                        name="fotoPerfil"
                            id="fotoPerfil"
                            onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Mi Fondo de Perfil</label>
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
      <Footer/>
      {loading && loadigbar()}
    </>
  );
};
