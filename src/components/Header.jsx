import React from "react";
import { Container, Dropdown, FormControl, Nav, Navbar } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">QuickShop</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success">
              <FaCartShopping color="white" fontSize="25px" />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <span style={{ padding: 10 }}> Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
