import "../NavigationBar/Navbar.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  InputGroupAddon,
} from "reactstrap";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { BsHeart, BsBag } from "react-icons/bs";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar className="nav_bar" light expand="md">
          <NavbarBrand href="/" className="navbar_brand">
            Shoppiii
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="nav_links_div">
            <Nav className="ml-auto" navbar>
              <NavItem className="">
                <InputGroup>
                  <Input placeholder="Search" className="nav_input" />
                  <InputGroupAddon
                    addonType="append"
                    style={{ backgroundColor: "white", cursor: "pointer" }}
                  >
                    <BiSearch style={{ width: "20px" }} />
                  </InputGroupAddon>
                </InputGroup>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  <button className="login_Btn">Login</button>
                </NavLink>
              </NavItem>
              <NavItem>
                <BsHeart className="heart_icon" />
              </NavItem>
              <NavItem>
                <BsBag className="bag_icon" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
