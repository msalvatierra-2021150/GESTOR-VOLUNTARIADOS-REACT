import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavBarSinLogeo } from "../../../NavBarSinLogeo";
import { Voluntario } from "../models/models.voluntario";
import {
  formOptions,
  formVoluntarioHelper,
} from "../helpers/formVoluntarioHelper";
import Swal from 'sweetalert2';
import { useEffect } from "react";
import { apiGetVoluntario } from "../../Perfil/api/apiVoluntario";
import { uploadFile } from "../api/apiFile";
 
export const OperacionCuentaVoluntario = ({ operacion }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usuario, setUsuario] = useState(Voluntario);
  const [option, setoption] = useState(1);
  let showPassword = true;
  if (operacion === "Editar") {
    showPassword = false;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  useEffect(() => {
    setUsuario({ ...usuario });
    operacion === "Crear" ? [setoption(1)] : [setoption(2), listVoluntario()];
  }, []);

  const listVoluntario = async () => {
    const voluntario = await apiGetVoluntario();
    setUsuario(voluntario);
    
  
  };
  
  const agregarArchivos = async ()=>{
    
    setLoading(true);
    let fileDpi='';
    let fileCv='';
    let fileAntecedentes='';
    let photoPerfil='';
    let photoFondo='';
    

    if(usuario.DPIFile==="si"){
       fileDpi = await uploadFile(file.DPI);
    }
    if(usuario.CVFile==="si"){
       fileCv = await uploadFile(file.CV);
       console.log(fileCv);
    }
    if (usuario.antecedentesFile==="si") {
      fileAntecedentes = await uploadFile(file.antecedentes);
    }
    if (usuario.fotoPerfilFile==="si") {
      photoPerfil = await uploadFile(file.fotoPerfil);
    }
    if (usuario.fotoFondoFile==="si") {
      photoFondo = await uploadFile(file.fotoFondo);
    }
    setLoading(false);
    
    await formVoluntarioHelper(usuario,fileCv,fileDpi,fileAntecedentes,photoFondo,photoPerfil, option);
  }
  
  const crud = async () => {
   
    
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    const nombreArchivo = e.target.name;
    const archivo = e.target.files[0];
  
    setFile((prevFormulario) => ({
      ...prevFormulario,
      [nombreArchivo]: archivo,
    }));
    setUsuario({...usuario, [nombreArchivo+"File"]:'si'});
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
                {operacion} Cuenta Voluntario
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
                        value={usuario.nombre}
                        onChange={({ target: { value } }) => {
                          setUsuario(() => ({ ...usuario, nombre: value }));
                        }}
                      />
                      {errors.nombre && <span>{errors.nombre.message}</span>}
                      <label htmlFor="floatingTextInput1">Nombre</label>
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
                          value={usuario.password}
                          onChange={({ target: { value } }) => {
                            setUsuario(() => ({ ...usuario, password: value }));
                          }}
                        />
                        {errors.password && (
                          <span>{errors.password.message}</span>
                        )}
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
                        value={usuario.correo}
                        onChange={({ target: { value } }) => {
                          setUsuario(() => ({ ...usuario, correo: value }));
                        }}
                      />
                      {errors.correo && <span>{errors.correo.message}</span>}
                      <label htmlFor="floatingTextInput2">
                        Correo electrónico
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                        {...register("direccion")}
                        type="text"
                        placeholder=" "
                        className="form-control"
                        value={usuario.direccion}
                        onChange={({ target: { value } }) => {
                          setUsuario(() => ({ ...usuario, direccion: value }));
                        }}
                      />
                      {errors.direccion && (
                        <span>{errors.direccion.message}</span>
                      )}
                      <label htmlFor="floatingEmailInput">Dirección</label>
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
                        value={usuario.telefono}
                        onChange={({ target: { value } }) => {
                          setUsuario(() => ({ ...usuario, telefono: value }));
                        }}
                      />
                      {errors.telefono && (
                        <span>{errors.telefono.message}</span>
                      )}
                      <label htmlFor="floatingEmailInput">Teléfono</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12"></div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Curriculum Vitae</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        name="CV"
                        id="CV"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">Antecedentes Penales</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        name="antecedentes"
                        id="antecedentes"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 col-sm-12">
                    <label className="my-2">DPI</label>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        name="DPI"
                        id="DPI"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
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
                </div>
                <div className="row">
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
                    onClick={()=>agregarArchivos()}
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
