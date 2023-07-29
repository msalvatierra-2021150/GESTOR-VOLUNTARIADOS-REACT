import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { apiSearchFundaciones } from '../src/panelVoluntario/VoluntarioMain/api/ApiFundacion';
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchResults = () => {
    const maxResultsPerPage = 5;
    const [searchResults, setSearchResults] = useState([]);
    const [results, setResults] = useState(0);
    let { search } = useLocation();
    let query = new URLSearchParams(search);
    let termino = query.get('q');

    const searchData = async () => {
        const { fundaciones, totalFundaciones } = await apiSearchFundaciones(termino);
        setSearchResults(fundaciones);
        setResults(totalFundaciones);
    };

    const totalPages = Math.ceil(results / maxResultsPerPage);
    const maxButtons = Math.min(totalPages, 5);
    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
        setCurrentPage(page);
        handleSearch(page);
    };

    const handleSearch = async (limite) => {
        const { fundaciones } = await apiSearchFundaciones(
            termino,
            (limite - 1) * maxResultsPerPage,
            limite * maxResultsPerPage
        );
        setSearchResults(fundaciones);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        searchData();
    }, [termino]);

    useEffect(() => {
        handleSearch(currentPage);
    }, [currentPage]);
    return (
        <>
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    <div className="d-flex flex-column align-items-center">
                        <Link to="/home" className="text-center mt-5 btn btn-danger">Volver al inicio</Link>
                    </div>
                    {
                        searchResults.map((f) => {
                            return (
                                <div className="mt-5" key={f._id}>
                                    <div className=" offset-2 col-8">
                                        <div className="card rounded">
                                            <div className="card-header">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <img className="img-xs rounded-circle" src={f.fotoPerfil} alt="NF" />
                                                        <div className="ml-2">
                                                            <p>{f.nombre}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-3 tx-14">
                                                    Correo de la institución: {f.correo}
                                                </p>
                                                <p className="mb-3 tx-14">
                                                    Sitio web: {f.sitio_web}
                                                </p>
                                                <p className="mb-3 tx-14">
                                                    Teléfono: {f.telefono}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="container">
                            <div className="row mt-2">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    <div className="col-12">
                                        <ul className="pagination mb-sm-0">
                                            <li
                                                className={`page-item ${currentPage === 1 ? "disabled" : ""
                                                    }`}
                                            >
                                                <button className="page-link" onClick={handlePrevPage}>
                                                    <FontAwesomeIcon icon={faChevronLeft} />
                                                </button>
                                            </li>
                                            {[...Array(maxButtons)].map((_, index) => {
                                                const page = index + 1;
                                                return (
                                                    <li
                                                        className={`page-item ${currentPage === page ? "active" : ""
                                                            }`}
                                                        key={page}
                                                    >
                                                        <button
                                                            className="page-link"
                                                            onClick={() => handleClick(page)}
                                                        >
                                                            {page}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                            <li
                                                className={`page-item ${currentPage === totalPages ? "disabled" : ""
                                                    }`}
                                            >
                                                <button className="page-link" onClick={handleNextPage}>
                                                    <FontAwesomeIcon icon={faChevronRight} />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
