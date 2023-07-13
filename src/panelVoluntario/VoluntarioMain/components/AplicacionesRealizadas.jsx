import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { apiGetAplicacionesDelVoluntario } from "../api/AplicacionDeVoluntario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";

export const AplicacionesRealizadas = () => {
  const [aplicaciones, setAplicaciones] = useState([]);

  const viewConvocatoriaList = async () => {
    const getListApliacionesFromApi = await apiGetAplicacionesDelVoluntario();
    setAplicaciones(getListApliacionesFromApi);
  };

  useEffect(() => {
    viewConvocatoriaList();
  }, []);

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <h6 className="card-title">Tus aplicaciones</h6>
          <hr />
          {aplicaciones !== null ? (
            aplicaciones.map((p) => {
              return (
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <div className="d-flex align-items-center hover-pointer">
                    <Image
                      className="img-xs rounded-circle"
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                    />
                    <div className="ml-2">
                      <p>Mike Popescu</p>
                      <p className="tx-11 text-muted">Estado: {p.estado} </p>
                    </div>
                  </div>
                  <button className="btn btn-icon">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              );
            })
          ) : (
            <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
              <p>Aún no has aplicado a ninguna convocatoria :(</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
