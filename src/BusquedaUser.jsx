import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const BusquedaUser = ({ termino, setTermino }) => {
    const onSearch = (e) => {
        e.preventDefault();
        if (termino.trim().length < 1) return;
        setTermino("");
    };
    const convertString = (string) => { return string.replace(/ /g, "+"); };
    const resultadosRoute = "/search";

    return (
        <form
            className="form-inline my-2 my-lg-0 d-flex justify-content-center"
            onSubmit={onSearch}
        >
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar fundaciones..."
                aria-label="Search"
                value={termino}
                onChange={(e) => setTermino(e.target.value)}
            />
            <Link to={`${resultadosRoute}?q=${convertString(termino)}`}>
                <Button className="btn btn-outline-success my-sm-0" type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Link>
        </form>
    );
};
