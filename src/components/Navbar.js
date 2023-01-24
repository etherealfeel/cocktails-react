import { useState } from "react";
import { BiDrink } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { Nav, NavList, ListItem, StyledNavLink, MobileIcon } from "../shared/styledComponents";
import { NavLinks as data } from "../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const closeMobileMenu = () => {
    setShow(false);
  };

  return (
    <Nav>
      <MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <BiDrink />}</MobileIcon>
      <NavList show={show}>
        {data.map((link) => (
          <ListItem key={link.label}> 
            <StyledNavLink
              to={link.to}
              end={link.label === "Home"}
              onClick={closeMobileMenu}>
              <h2>{link.label}</h2>
            </StyledNavLink>
          </ListItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navbar;
