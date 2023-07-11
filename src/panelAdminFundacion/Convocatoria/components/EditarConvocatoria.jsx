import React, { useEffect } from "react";
import { Image, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formConvocatoriaHelper,formOptions } from "../../FundacionMain/helpers/formConvocatoriaHelper";
import { Convocatoria } from "../../FundacionMain/models/models.convocatoria";
import { apiGetConvocatoriaById } from "../../FundacionMain/api/apiConvocatoria";
export const EditarConvocatoria = ({objetos}) => {
  const [nuevaC, setNuevaC] = useState(Convocatoria)
  const departamentosGuatemala = [
    "Guatemala","Baja Verapaz","Alta Verapaz","El Progreso",
    "Izabal","Zacapa","Chiquimula","Santa Rosa","Jalapa",
    "Jutiapa","Sacatepéquez","Chimaltenango","Escuintla",
    "Sololá","Totonicapán","Quetzaltenango","Suchitepéquez",
    "Retalhuleu","San Marcos","Huehuetenango","Quiché",,"Petén"
  ];
  const idConvocatoria = localStorage.getItem('idConvocatoria');
  const listFundacion = async () => {
    const convocatoriaList = await apiGetConvocatoriaById(idConvocatoria);
    
    setNuevaC(convocatoriaList);
  };
  useEffect(() => {
    
    listFundacion();
   }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  const crud = async (data) => {
   
    await formConvocatoriaHelper(nuevaC,2);
  };
  const handleChange = (e) => {

    e.preventDefault();
    const nombreArchivo = e.target.name;
    const archivo = e.target.files[0];
    console.log(archivo);
    setNuevaC((prevFormulario) => ({
      ...prevFormulario,
      [nombreArchivo]: archivo,
    }));
  };
  
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
              <Form.Group controlId="exampleForm.ControlTextarea" onSubmit={handleSubmit(crud)}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
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
                        Nombre de la convocatoria
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
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
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                      <input
                       {...register("estado")}
                       type="text"
                       placeholder=" "
                       className="form-control"
                       value={nuevaC.estado}
                       onChange={({ target: { value } }) => {
                         setNuevaC(() => ({ ...nuevaC, estado: value }));
                       }}
                      />
                      <label htmlFor="floatingTextInput2">
                        Estado
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
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
                      <label htmlFor="floatingEmailInput">Cupo</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                    <input
                    {...register("horaInicio")}
                    type="time"
                    className="form-control"
                   value={nuevaC.fecha_inicio === undefined ? []:(nuevaC.fecha_inicio).substr(11, 5)}
                    onChange={({ target: { value } }) => {
                        
                        setNuevaC(() => ({ ...nuevaC,horaInicio: value }));
                    }
                    }
                  />
                  <label htmlFor="floatingTextInput1">Hora de Inicio</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                    <input
                    {...register("fechaHoraStart")}
                    type="date"
                    className="form-control"
                    value={nuevaC.fecha_inicio === undefined ? []:(nuevaC.fecha_inicio).substr(0, 10)}
                    onChange={({ target: { value } }) => {
                        
                        setNuevaC(() => ({ ...nuevaC,fechaHoraStart: value }));
                    }
                    }
                  />
                  <label htmlFor="floatingTextInput1">Fecha de Inicio</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                    <input
                     {...register("horaFinal")}
                     type="time"
                     className="form-control"
                     value={nuevaC.fecha_fin === undefined ? []:(nuevaC.fecha_fin).substr(11, 5)}
                     onChange={({ target: { value } }) => {
                         
                         setNuevaC(() => ({ ...nuevaC,horaFinal: value }));
                     }
                     }
                  />
                  <label htmlFor="floatingTextInput1">Hora de finalizacion</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="form-floating mb-3">
                    <input
                    {...register("fechaHoraEnd")}
                    type="date"
                    className="form-control"
                    value={nuevaC.fecha_fin === undefined ? []:(nuevaC.fecha_fin).substr(0, 10)}
                    onChange={({ target: { value } }) => {
                        setNuevaC(() => ({ ...nuevaC,fechaHoraEnd: value }));
                    }
                    }
                  />
                  <label htmlFor="floatingTextInput1">
                    Fecha Finalización:
                  </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
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
                        name="imagen"
                        id="imagen" 
                          onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  
                 
                </div>
                <div className="text-center">
                  <Button
                     onClick={crud}
                    type="submit"
                    className="btn btn-primary"
                    style={{ borderRadius: "0px" }}
                  >
                    Guardar Cambios
                  </Button>
                </div>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
