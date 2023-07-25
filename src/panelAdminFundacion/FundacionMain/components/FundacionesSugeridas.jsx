import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { apiGetFundaciones } from "../api/apiFundaciones";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye} from "@fortawesome/free-solid-svg-icons";

export const FundacionesSugeridas = () => {
  const verFundacion = () => {

  }

  const [fundaciones, setFundaciones] = useState([]);

  const viewFundacionesList = async () => {
    const getListFundacionesFromApi = await apiGetFundaciones();
    setFundaciones(getListFundacionesFromApi);
  };

  useEffect(() => {
    viewFundacionesList();
  }, []);

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <h6 className="card-title">Otras Fundaciones</h6>
          <hr />
          {fundaciones.length !== 0 ? (
            fundaciones.map((f) => {
              return (
                <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                  <div className="d-flex align-items-center hover-pointer">
                    <Image
                      className="img-xs rounded-circle"
                      src={f.fotoPerfil}
                      alt=""
                    />
                    <div className="ms-2">
                      <p>{f.nombre}</p>
                    </div>
                  </div>
                  <button className="btn btn-icon" onClick={() => verFundacion()} >
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