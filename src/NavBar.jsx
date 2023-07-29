import {
  isAdminAppAuthenticated,
  isAdminFundacionAuthenticated,
  isUserLogged,
  isVoluntarioAuthenticated,
} from "./login/helpers/isUserAuthenticated";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import banco from "./img/logo-dark.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { BusquedaUser } from "./BusquedaUser";

export const NavBar = () => {
  const [term, setTerm] = useState("");

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  return (
    <>
      {isUserLogged() && (
        <Navbar bg="success" expand="lg" className="py-3">
          <Container className=" d-flex justify-content-center">
            {isAdminAppAuthenticated() ? (
              <Link to="/adminapp-main" className="centrar-logo">
                <Image style={{ width: "55%" }} src={banco} fluid />
              </Link>
            ) :
              <Link to="/home" className="centrar-logo">
                <Image style={{ width: "55%" }} src={banco} fluid />
              </Link>
            }
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/*MUESTRA SI CUMPLE ROL VOLUNTARIO*/}
                {isVoluntarioAuthenticated() ? (
                  <Link
                    to="cuenta"
                    className="mx-2 d-flex align-items-center justify-content-center text-white text-nowrap"
                    href="#link"
                  >
                    <FontAwesomeIcon icon={faUser} className="mx-1" /> Mi Cuenta
                  </Link>
                ) : null}

                {/*MUESTRA SI CUMPLE ROL FUNDACION*/}
                {isAdminFundacionAuthenticated() ? (
                  <Link
                    to="convocatorias-fundacion"
                    className="mx-2 margin-t-tel margin-b-tel d-flex align-items-center justify-content-center text-white text-nowrap"
                  >
                    Ver Convocatorias
                  </Link>
                ) : null}
                                {isAdminFundacionAuthenticated() ? (
                  <Link
                    to="lista-voluntariados"
                    className="mx-2 margin-b-tel d-flex align-items-center justify-content-center text-white text-nowrap"
                  >
                    Ver voluntariados
                  </Link>
                ) : null}

                {/*MUESTRA SI CUMPLE ROL ADMIN */}
                {isAdminAppAuthenticated() ? (
                  <Link
                    to="/crear-cuenta-adminapp"
                    className="mx-2 d-flex align-items-center justify-content-center text-white text-nowrap"
                  >
                    Crear Administrador
                  </Link>
                ) : null}
              
              {/*MUESTRA SI CUMPLE ROL VOLUNTARIO O FUNDACION */}
                {isVoluntarioAuthenticated() || isAdminFundacionAuthenticated() ? (
                  <BusquedaUser termino={term} setTermino={setTerm} />
                ) : null}

                {isAdminAppAuthenticated() ? (
                  <Link
                    to="cuenta-admin"
                    className="mx-2 d-flex align-items-center justify-content-center text-white text-nowrap"
                    href="#link"
                  >
                    <FontAwesomeIcon icon={faUser} className="mx-1" /> Mi Cuenta
                  </Link>
                ) : null}
                <Nav.Link
                  className="mx-2 text-center text-white text-nowrap"
                  href="#link"
                  onClick={logOut}
                >
                  Cerrar Sesión
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};
