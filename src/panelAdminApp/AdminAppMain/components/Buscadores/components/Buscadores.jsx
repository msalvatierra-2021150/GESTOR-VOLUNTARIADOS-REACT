import { useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { ModalBusqueda } from "./ModalBusqueda";
import { helperBusqueda } from "../helpers/helperBusqueda";
import { Collapse } from "react-bootstrap";

export const Buscadores = () => {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState([]);
  const [number, setNumber] = useState(0);
  const [option, setOption] = useState("");
  const [termino, setTermino] = useState("");

  const [openCollapse, setOpenCollapse] = useState(null);

  const handleCollapseToggle = (collapseId) => {
    if (openCollapse === collapseId) {
      setOpenCollapse(null); // Close the clicked collapse if it's already open
    } else {
      setOpenCollapse(collapseId); // Open the clicked collapse and close others
    }
  };

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmitEvent = async (event, option) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    setShowModal(true);
    let response = [];
    let number = 0;
    let terminoBusqueda = inputValue;
    switch (option) {
      case "fundacion":
        const { fundaciones, totalFundaciones } = await helperBusqueda(option, inputValue, 0, 5);
        response = fundaciones;
        number = totalFundaciones;
        option = "fundacion";
        break;
      case "voluntario":
        const { voluntarios, totalVoluntarios } = await helperBusqueda(option, inputValue, 0, 5);
        response = voluntarios;
        number = totalVoluntarios;
        option = "voluntario";
        break;
      case "convocatoria":
        const { convocatorias, totalConvocatoria } = await helperBusqueda(option, inputValue, 0, 5);
        response = convocatorias;
        number = totalConvocatoria;
        option = "convocatoria";
        break;
      case "aplicacion":
        const aplicacion = await helperBusqueda(option, inputValue);
        response = aplicacion;
        response === undefined ? (number = 0) : (number = 1);
        option = "aplicacion";
        break;
    }
    setResponse(response);
    setNumber(number);
    setOption(option);
    setTermino(terminoBusqueda);
    setInputValue("");
  };

  return (
    <>
      <div className="card rounded">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
              <Button
                className="btn btn-primary  w-100"
                onClick={() => handleCollapseToggle("collapse1")}
                aria-expanded={openCollapse === "collapse1"}
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar Fundaciones
              </Button>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-2">
              <Button
                className="btn btn-success  w-100"
                onClick={() => handleCollapseToggle("collapse2")}
                aria-expanded={openCollapse === "collapse2"}
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar voluntarios
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center mb-2">
              <Button
                className="btn btn-danger w-100"
                onClick={() => handleCollapseToggle("collapse3")}
                aria-expanded={openCollapse === "collapse3"}
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar convocatorias
              </Button>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center mb-2">
              <Button
                className="btn btn-warning  w-100"
                onClick={() => handleCollapseToggle("collapse4")}
                aria-expanded={openCollapse === "collapse4"}
              >
                <FontAwesomeIcon className="mx-1" icon={faMagnifyingGlass} />{" "}
                Buscar aplicaciones
              </Button>
            </div>
          </div>
          <Collapse in={openCollapse === "collapse1"}>
            <div className="card card-body collapse-content">
              <h6>Ingresa el nombre de la fundacion</h6>
              <form
                className="form-inline my-2 my-lg-0 d-flex justify-content-center"
                onSubmit={(e) => onSubmitEvent(e, "fundacion")}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar fundaciones..."
                  aria-label="Search"
                  value={inputValue}
                  onChange={onInputChange}
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </Collapse>
          <Collapse in={openCollapse === "collapse2"}>
            <div className="card card-body collapse-content">
              <h6>Ingresa el nombre del voluntario</h6>
              <form
                className="form-inline my-2 my-lg-0 d-flex justify-content-center"
                onSubmit={(e) => onSubmitEvent(e, "voluntario")}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar voluntario..."
                  aria-label="Search"
                  value={inputValue}
                  onChange={onInputChange}
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </Collapse>
          <Collapse in={openCollapse === "collapse3"}>
            <div className="card card-body collapse-content">
              <h6>Ingresa el nombre de la convocatoria</h6>
              <form
                className="form-inline my-2 my-lg-0 d-flex justify-content-center"
                onSubmit={(e) => onSubmitEvent(e, "convocatoria")}>
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar convocatorias..."
                  aria-label="Search"
                  value={inputValue}
                  onChange={onInputChange}
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </Collapse>
          <Collapse in={openCollapse === "collapse4"}>
            <div className="card card-body collapse-content">
              <h6>Ingresa el ID de la aplicacion</h6>
              <form 
              className="form-inline my-2 my-lg-0 d-flex justify-content-center"
              onSubmit={(e) => onSubmitEvent(e, "aplicacion")}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Buscar aplicaciones..."
                  aria-label="Search"
                  value={inputValue}
                  onChange={onInputChange}
                />
                <Button
                  className="btn btn-outline-success my-sm-0"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </form>
            </div>
          </Collapse>
        </div>
      </div>
      <ModalBusqueda
        searchResults={response}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        option={option}
        registros={number}
        termino={termino}
      ></ModalBusqueda>
    </>
  );
};
