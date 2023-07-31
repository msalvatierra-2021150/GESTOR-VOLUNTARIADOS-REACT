import React from "react";
import { Image, Button, Form, Dropdown } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Convocatoria } from "../models/models.convocatoria";
import { formConvocatoriaHelper, formOptions } from "../helpers/formConvocatoriaHelper";
import Swal from 'sweetalert2';
import { uploadFile } from "../../CrearCuenta/api/apiFundacion";
export const NuevaPublicacion = ({nombreFudacion, imgPerfil}) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nuevaC, setNuevaC] = useState(Convocatoria)
  const departamentosGuatemala = [
    "Guatemala","Baja Verapaz","Alta Verapaz","El Progreso",
    "Izabal","Zacapa","Chiquimula","Santa Rosa","Jalapa",
    "Jutiapa","Sacatepéquez","Chimaltenango","Escuintla",
    "Sololá","Totonicapán","Quetzaltenango","Suchitepéquez",
    "Retalhuleu","San Marcos","Huehuetenango","Quiché",,"Petén"
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const crud = async () => {
    let horaInicioInput;
    let fechaHoraStartInput;
    let horaFinalInput;
    let fechaHoraEndInput
    if(nuevaC.horaInicio===undefined){
      horaInicioInput = document.getElementsByName("horaInicio")[0].value;
    }
    if(nuevaC.fechaHoraStart===undefined){
       fechaHoraStartInput = document.getElementsByName("fechaHoraStart")[0].value;
    }
    if(nuevaC.horaFinal===undefined){
       horaFinalInput = document.getElementsByName("horaFinal")[0].value;
    }
    if(nuevaC.fechaHoraEnd===undefined){
       fechaHoraEndInput = document.getElementsByName("fechaHoraEnd")[0].value;
    }
    setLoading(true);
    let photoImg='';
    if(nuevaC.imagenFile==="si"){
      photoImg = await uploadFile(file.imagen);
   }
   setLoading(false);

    await formConvocatoriaHelper(nuevaC,photoImg,horaInicioInput,fechaHoraStartInput,horaFinalInput,fechaHoraEndInput,1);
  };

  const handleChange = (e) => {

    e.preventDefault();
    const nombreArchivo = e.target.name;
    const archivo = e.target.files[0];
    setFile((prevFormulario) => ({
      ...prevFormulario,
      [nombreArchivo]: archivo,
    }));
    setNuevaC({...nuevaC, [nombreArchivo+"File"]:'si'});
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
  };
 
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
                    src={imgPerfil}
                    alt=""
                  />
                  <div className="ml-2 d-flex align-items-center">
                    <p className="ms-2">{nombreFudacion}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <Form.Group controlId="exampleForm.ControlTextarea" onSubmit={handleSubmit()}>
                <div className="form-floating mb-3">
                  <input
                    {...register("titulo")}
                    type="text"
                    placeholder=" "
                    className="form-control"
                    value={nuevaC.titulo}
                    onChange={({ target: { value } }) => {
                      setNuevaC(() => ({ ...nuevaC, titulo: value }));
                    }}
                  />
                  <label htmlFor="floatingTextInput1">
                    Título de la convocatoria
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    {...register("descripcion")}
                    type="text"
                    placeholder=" "
                    className="form-control"
                    value={nuevaC.descripcion}
                    onChange={({ target: { value } }) => {
                      setNuevaC(() => ({ ...nuevaC, descripcion: value }));
                    }}
                  />
                  <label htmlFor="floatingTextInput1">
                    Descripción</label>
                </div>
                <select
                  className="form-select mb-3"
                  aria-label="Default select example"

                  {...register("lugar")}
                        type="text"
                        placeholder=" "
                    
                        value={nuevaC.lugar}
                        onChange={({ target: { value } }) => {
                          setNuevaC(() => ({ ...nuevaC, lugar: value }));
                        }}
                >
                  <option>Departamento</option>
                  {
                    departamentosGuatemala.map(d =>{
                      return (
                        <option  key={d}>{d} </option>
                       
                      )
                    })
                  } 
                </select>
                <div className="form-floating mb-3">
                  <input
                    {...register("cupo")}
                    type="number"
                    placeholder=" "
                    className="form-control"
                    value={nuevaC.cupo}
                    onChange={({ target: { value } }) => {
                      setNuevaC(() => ({ ...nuevaC, cupo: value }));
                    }}
                  />
                  <label htmlFor="floatingTextInput1">Cupo</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    {...register("horaInicio")}
                    type="time"
                    className="form-control"
                    name="horaInicio"
                    value={(nuevaC.horaInicio)}
                    onChange={({ target: { value } }) => {
                        
                        setNuevaC(() => ({ ...nuevaC,horaInicio: value }));
                    }
                    }
                  />
                  <label htmlFor="floatingTextInput1">Hora de Inicio</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    {...register("fechaHoraStart")}
                    type="date"
                    name="fechaHoraStart"
                    className="form-control"
                    value={(nuevaC.fechaHoraInicio)}
                    onChange={({ target: { value } }) => {
                        
                        setNuevaC(() => ({ ...nuevaC,fechaHoraStart: value }));
                    }
                    }
                  />
                  <label htmlFor="floatingTextInput1">Fecha de Inicio</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                     {...register("horaFinal")}
                     type="time"
                     className="form-control"
                     name="horaFinal"
                     value={(nuevaC.horaFinal)}
                     onChange={({ target: { value } }) => {
                         setNuevaC(() => ({ ...nuevaC,horaFinal: value }));
                     }
                     }
                  />
                  <label htmlFor="floatingTextInput1">Hora de finalizacion</label>
                </div>
               
                <div className="form-floating mb-3">
                  <input
                    {...register("fechaHoraEnd")}
                    type="date"
                    name="fechaHoraEnd"
                    className="form-control"
                    value={(nuevaC.fechaHoraFin)}
                    onChange={({ target: { value } }) => {
                        setNuevaC(() => ({ ...nuevaC,fechaHoraEnd: value }));
                    }
                    }
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
                        name="imagen"
                        id="imagen" 
                          onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="card-footer">
              <div className="d-flex post-actions">
                <Button onClick={crud}className="btn btn-primary btn-icon-text btn-edit-profile">
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
      {loading && loadigbar()}
    </>
  );
};
