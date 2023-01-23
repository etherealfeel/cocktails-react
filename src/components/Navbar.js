import React from "react";
import { BiDrink } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Nav, List, StyledNavLink } from "../shared/styledComponents";

const Navbar = () => {
  return (
    <Nav>
      <StyledNavLink
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        to={"/"}
        end>
        <BiDrink />
        <h2>Home</h2>
      </StyledNavLink>
      <List>
        <AiOutlineLeft />
        <StyledNavLink to={"/drinks/Ordinary_Drink"}>
          <h2>Ordinary Drink</h2>
        </StyledNavLink>
        <StyledNavLink to={"/drinks/Cocktail"}>
          <h2>Cocktails</h2>
        </StyledNavLink>
        <StyledNavLink to={"/drinks/Shot"}>
          <h2>Shot</h2>
        </StyledNavLink>
        <StyledNavLink to={"/drinks/Soft_Drink"}>
          <h2>Soft Drink</h2>
        </StyledNavLink>
        <StyledNavLink to={"/drinks/Beer"}>
          <h2>Beer</h2>
        </StyledNavLink>
        <AiOutlineRight />
      </List>
      <StyledNavLink to={"/about"}>
        <h2>About</h2>
      </StyledNavLink>
    </Nav>
  );
};

export default Navbar;
