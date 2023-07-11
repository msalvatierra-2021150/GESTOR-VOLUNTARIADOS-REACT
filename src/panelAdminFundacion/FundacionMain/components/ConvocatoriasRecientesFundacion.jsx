import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { apiGetConvocatoria } from "../api/apiConvocatoria";

export const ConvocatoriasRecientesFundacion = () => {
  const [convocatoria, setConvocatoria] = useState([])
  const viewConvocatoriaList = async () => {
    const getListConvocatoriaFromApi = await apiGetConvocatoria();
    
    setConvocatoria(getListConvocatoriaFromApi);
  };
  useEffect(() => {
    viewConvocatoriaList();
  }, []);

  console.log(convocatoria);
  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <h6 className="card-title">Convocatorias recientes</h6>
          
          <div className="latest-photos">
            <div className="row">
          {
            convocatoria !== null ? (
              convocatoria.map((p)=>{
                return(
              <div className="col-md-4" key={p._id}>
                <figure key={p._id}>
                  <Image w-100 key={p._id}
                    className="img-fluid"
                    src={p.imagen}
                    alt=""
                  />
                </figure>
              </div>

                )
              } )
            ):(<div></div>)
          }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
