import React, { useState, useContext }  from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { PublicacionesFundacion } from "./PublicacionesFundacion"
import DataContext from '../DataContext';

const departamentos = [
  "Sin filtros",
  "Guatemala",
  "Alta Verapaz",
  "Baja Verapaz",
  "Chimaltenango",
  "Chiquimula",
  "El Progreso",
  "Escuintla",
  "Huehuetenango",
  "Izabal",
  "Jalapa",
  "Jutiapa",
  "Petén",
  "Quetzaltenango",
  "Quiché",
  "Retalhuleu",
  "Sacatepéquez",
  "San Marcos",
  "Santa Rosa",
  "Sololá",
  "Suchitepéquez",
  "Totonicapán",
  "Zacapa",
];

export const NuevaPublicacion = () => {
  const dataContext = useContext(DataContext);

  const [nombreDep, setNombreDep] = useState("");
  const [termino, setTermino] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termino.trim().length < 1) return;
    if (nombreDep === "Sin filtros") setNombreDep("");
    const data = {search : false, nombreDep, termino};
    dataContext.setSearchData(data);
  };

  return (
    <>
      <div className="card rounded">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="ml-2 d-flex align-items-center">
              <h5>Buscador de convocatorias</h5>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex">
            <div className="row g-0">
              <div className="col-4">
                <select
                  className="form-select"
                  aria-label=".form-select-sm example"
                  onClick={(e) => setNombreDep(e.target.value)}
                >
                  {
                    departamentos.map((d) => {
                      return <option key={d} value={d}>{d}</option>
                    })
                  }
                </select>
              </div>
              <div className="col-8">
                <form className="d-flex">
                  <input
                    className="form-control me-0"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={termino}
                    onChange={(e) => setTermino(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit" onClick={(e) => handleSubmit(e)}>
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};