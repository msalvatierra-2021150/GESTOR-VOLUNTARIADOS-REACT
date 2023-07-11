import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from "./img/logo-dark.png";
import { Link } from "react-router-dom";

export const NavBarSinLogeo = () => {
  
  const token = localStorage.getItem('token')

  return (
    <>
    {!token ? (
              <Navbar bg="success" expand="lg" className="py-3">
              <Container className=" d-flex justify-content-center">
                <Link to="/login" className="centrar-logo">
                  <Image style={{ width: "55%" }} src={logo} fluid />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                  <Nav.Link
                      className="mx-2 text-center text-white text-nowrap"
                      href="#link">
                      Crea tu experiencia
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2 text-center text-white text-nowrap"
                      href="#link">
                      Blog
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2 text-center text-white text-nowrap"
                      href="#link">
                      Acerca de nosotros
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2 text-center text-white text-nowrap"
                      href="#link">
                      Ayuda
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
    ) : null}
    </>
  )
}
