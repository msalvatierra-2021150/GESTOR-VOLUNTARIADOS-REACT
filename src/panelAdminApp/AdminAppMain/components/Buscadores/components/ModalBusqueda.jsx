import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-bootstrap";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { helperBusqueda } from "../helpers/helperBusqueda";
import { Fundacion } from "./Fundacion";
import { Voluntario } from "./Voluntario";
import { Convocatoria } from "./Convocatoria";
import { Aplicacion } from "./Aplicacion";

export const ModalBusqueda = ({ searchResults, isOpen, onClose, option, registros, termino }) => {
    if (!isOpen) return null;
    const maxResultsPerPage = 5;
    const totalPages = Math.ceil(registros / maxResultsPerPage);
    const maxButtons = Math.min(totalPages, 5);
    const [currentPage, setCurrentPage] = useState(1);
    const [matches, setMatches] = useState([]);

    const handleClick = (page) => {
        setCurrentPage(page);
        handleSearch(page);
    };

    const handlePrevPage = () => { if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1); };

    const handleNextPage = () => { if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1); };

    const handleSearch = async (limite) => {
        switch (option) {
            case "fundacion":
                const { fundaciones } = await helperBusqueda(option, termino, (limite - 1) * maxResultsPerPage, limite * maxResultsPerPage);
                setMatches(fundaciones);
                break;
            case "voluntario":
                const { voluntarios } = await helperBusqueda(option, termino, (limite - 1) * maxResultsPerPage, limite * maxResultsPerPage);
                setMatches(voluntarios);
                break;
            case "convocatoria":
                const { convocatorias } = await helperBusqueda(option, termino, (limite - 1) * maxResultsPerPage, limite * maxResultsPerPage);
                setMatches(convocatorias);
                break;
        };

    };

    useEffect(() => { handleSearch(currentPage); }, [currentPage]);
    useEffect(() => { setMatches(searchResults); }, [searchResults]);
    useEffect(() => { if (!isOpen) setMatches([]);  }, [isOpen]);
    return (
        <>
            <Modal show={isOpen}>
                <Modal.Header>
                    <Modal.Title className="text-dark">Resultados de la búsqueda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {registros === 0 ? <p>No se encontraron resultados</p> : <p>Se encontraron {registros} coincidencias: </p>}
                    {option === "fundacion" && (<Fundacion matches={matches} />)}
                    {option === "voluntario" && (<Voluntario matches={matches} />)}
                    {option === "convocatoria" && (<Convocatoria matches={matches} />)}
                    {option === "aplicacion" && (<Aplicacion matches={searchResults} />)}
                </Modal.Body>
                <Modal.Footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="container">
                                    <div className="row mt-2">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="col-12">
                                                <ul className="pagination mb-sm-0">
                                                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                                        <button className="page-link" onClick={handlePrevPage}>
                                                            <FontAwesomeIcon icon={faChevronLeft} />
                                                        </button>
                                                    </li>
                                                    {[...Array(maxButtons)].map((_, index) => {
                                                        const page = index + 1;
                                                        return (
                                                            <li className={`page-item ${currentPage === page ? "active" : ""}`} key={page}>
                                                                <button className="page-link" onClick={() => handleClick(page)}>
                                                                    {page}
                                                                </button>
                                                            </li>
                                                        );
                                                    })}
                                                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                                        <button className="page-link" onClick={handleNextPage}>
                                                            <FontAwesomeIcon icon={faChevronRight} />
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                            <div className="col-12">
                                                <div className="col-12">
                                                    <button className="btn btn-danger" onClick={onClose}>
                                                        Cerrar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
};
