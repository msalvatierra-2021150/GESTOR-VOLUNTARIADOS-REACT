import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  apiContarConvocatorias,
  apiContarFundaciones,
  apiContarVoluntariado,
  apiContarVoluntario,
} from "../api/ContadoresAplicacion";

export const InformacionUser = () => {
  const [cantidadFundaciones, setcantidadFundaciones] = useState(0);
  const [cantidadVoluntarios, setcantidadVoluntarios] = useState(0);
  const [cantidadVoluntariados, setcantidadVoluntariados] = useState(0);
  const [cantidadConvocatorias, setcantidadConvocatorias] = useState(0);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchFundacionesData = async () => {
      try {
        const response = await apiContarFundaciones(); // Assuming apiContarFundaciones() is an asynchronous function that returns a promise
        setcantidadFundaciones(response); // Set the desired value from the API response
      } catch (error) {
        console.log(error);
      }
    };
    fetchFundacionesData(); // Call the fetch function when the component mounts or when a dependency changes
  }, []); // Pass an empty dependency array if you only want to fetch data once when the component mounts

  useEffect(() => {
    const fetchVoluntariosData = async () => {
      try {
        const response = await apiContarVoluntario();
        setcantidadVoluntarios(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVoluntariosData();
  }, []);

  useEffect(() => {
    const fetchVoluntariadosData = async () => {
      try {
        const response = await apiContarVoluntariado();
        setcantidadVoluntariados(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVoluntariadosData();
  }, []);

  useEffect(() => {
    const fetchConvocatoriasData = async () => {
      try {
        const response = await apiContarConvocatorias();
        setcantidadConvocatorias(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConvocatoriasData();
  }, []);

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between mb-2">
            <h6 className="card-title mb-0">¡Bienvenido @Admin!</h6>
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdownMenuButton3"
                className="btn p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-horizontal icon-lg pb-3px"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/editar-cuenta-fundacion">
                    <FontAwesomeIcon icon={faPenToSquare} className="mx-1" />
                    Editar
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <p>"Juntos, cambiemos el mundo, un voluntariado a la vez."</p>
          <div className="mt-3">
            <h6>Estadisticas</h6>
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Cantidad de fundaciones registradas:
            </label>
            <p className="text-muted">{cantidadFundaciones}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Cantidad de volunatios registrados:
            </label>
            <p className="text-muted">{cantidadVoluntarios}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Voluntariados activos:
            </label>
            <p className="text-muted">{cantidadVoluntariados}</p>
          </div>
          <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
              Convocatorias realizadas:
            </label>
            <p className="text-muted">{cantidadConvocatorias}</p>
          </div>
          <div className="mt-3 d-flex social-links"></div>
        </div>
      </div>
    </>
  );
};
