import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import { apiGetFundaciones } from "../api/ApiFundacion";
import { useEffect } from "react";

export const FundacionesRecientes = () => {
  const [Fundaciones, setFundaciones] = useState([]);

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
          <h6 className="card-title">Fundaciones que quizás te interesen: </h6>
          <div className="latest-photos">
            <div className="row">
              {Fundaciones.map((f) => {
                return (
                  <div className="col-md-4" key={f.id}>
                    <figure>
                      <Image
                        className="img-fluid"
                        src={f.fotoPerfil}
                        alt={f.nombre}
                      />
                    </figure>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
