import React, { useEffect, useState } from "react";
import { Image, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { apiConvocatoriaDelete, apiGetConvocatoria } from "../api/apiConvocatoria";
import Swal from 'sweetalert2'; 
export const PublicacionesFundacion = () => {
  const [convocatoria, setConvocatoria] = useState([])
  const viewConvocatoriaList = async () => {
    const getListConvocatoriaFromApi = await apiGetConvocatoria();
    
    setConvocatoria(getListConvocatoriaFromApi);
  };
  useEffect(() => {
    viewConvocatoriaList();
  }, []);

  
  const eliminar= async (id) => {
    let result = await apiConvocatoriaDelete(id);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "Convocatoria Eliminado",
        text: "Se ha eliminado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Ok",
        
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
           
            window.location.href = '/home';

        }
    });
    } else {
      Swal.fire({
        icon: "info",
        title: "Error",
        text: "No se ha podido eliminar",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
    });
    }
  }
  return (
    <>
    {
      convocatoria !== null ? [
        convocatoria.map((p) =>{
          return(
          <div className=" mt-5" key={p._id}>
          <div className=" offset-3 col-6">
            <div className="card rounded">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Image
                      className="img-xs rounded-circle"
                      sec={p.imagen}
                      alt=""
                    />
                    <div className="ml-2">
                      <p>{p.titulo}</p>
                    </div>


                  </div>
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
                      <Dropdown.Item onClick={ ()=> localStorage.setItem("idConvocatoria", p._id)}>
                        <Link to="/editar-convocatoria">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="mx-1"
                          />
                          Editar publicacion
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/aplicaciones">
                          <FontAwesomeIcon icon={faEye} className="mx-1" />
                          Ver aplicaciones
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <p className="mb-3 tx-14">
                  {p.descripcion}
                </p>
                <Image
                  className="img-fluid"
                  src={p.imagen}
                  alt=""
                />
              </div>
              <div className="mt-3">
            <label className="tx-11 font-weight-bold mb-0 text-uppercase">
             Eliminar: 
            </label>
            <a onClick={()=>eliminar(p._id)} className="text-decoration-underline">Eliminar convocatoria</a>
          </div>
              <div className="card-footer">
                <div className="d-flex post-actions">{/*Aplicar */}</div>
              </div>
            </div>
          </div>
        </div>
          )
        })
      ]: [
        <div className="card rounded">
        <div className="card-header">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Image
                className="img-xs rounded-circle"
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt=""
              />
              <div className="ml-2">
                <p>Mike Popescu</p>
              </div>
            </div>
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
                  <Link to="/editar-convocatoria">
                    <FontAwesomeIcon icon={faPenToSquare} className="mx-1" />
                    Editar publicacion
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/aplicaciones">
                    <FontAwesomeIcon icon={faEye} className="mx-1" />
                    Ver aplicaciones
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="card-body">
          <p className="mb-3 tx-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusamus minima delectus nemo unde quae recusandae assumenda.
          </p>
          <Image
            className="img-fluid"
            src="https://bootdey.com/img/Content/avatar/avatar6.png"
            alt=""
          />
        </div>
        <div className="card-footer">
          <div className="d-flex post-actions">{/*Aplicar */}</div>
        </div>
      </div>
      ]
    }
      
    </>
  );
};
