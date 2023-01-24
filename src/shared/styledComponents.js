import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

//App
export const StyledDiv = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

//Home
export const MainContainer = styled.div`
  max-width: 85%;
  margin: 1rem auto;
  padding: 1rem 0.5rem;
  h3 {
    padding: 0.25rem 0.5rem;
    color: #fff;
  }
`;

export const SlideCard = styled.div`
  border-radius: 1.2rem;
  min-height: 18rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 4;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    height: 30%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
      font-size: 1.1rem;
    }
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

//Category && Searched
export const Grid = styled(motion.div)`
  display: grid;
  padding: 2rem 6rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  max-height: 25rem;
  background-color: #fff;
  box-shadow: 2px 5px 3px 0px #b947ff;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  min-width: 0;
  margin-bottom: 1rem;

  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    bottom: 1rem;
    font-family: "Comfortaa", cursive;
    width: 6rem;
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.25rem;
    color: #fff;
    background-color: #44006e;
    border: none;
    border-radius: 0.2rem;
    transition: all 0.5s ease;
    :hover {
      background-color: violet;
      color: #000;
    }
  }

  :hover {
    box-shadow: 4px 10px 5px 0px #b947ff;
  }

  @media screen and (max-width: 568px) {
    max-height: 30rem;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 6rem;
  margin: 0 auto;
`;

//SearchForm
export const StyledForm = styled.form`
  margin: 2rem 9rem;

  @media screen and (max-width: 568px) {
    text-align: center;
    margin: 6rem 0 1.5rem 0;
  }

  div {
    width: 100%;
    position: relative;
    margin: 0 auto;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
  }

  input {
    outline: none;
    border: none;
    border-radius: 1.5rem;
    padding: 1.5rem 2.5rem;
    font-size: 1.5rem;
    width: 100%;
    box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
    font-family: "Comfortaa", cursive;

    @media screen and (max-width: 568px) {
      width: 60%;
    }
  }
`;

//About
export const AboutContainer = styled.div`
  margin: 2.5rem auto;
  max-width: 80rem;

  h2 {
    text-align: center;
    margin: 1.5rem auto;
    color: #50405a;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    :hover {
      color: violet;
    }
  }
`;

//Navbar
export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 0 0 4rem 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  box-shadow: 10px 10px 50px #000;
  svg {
    font-size: 2rem;
    color: gray;
  }
  @media screen and (max-width: 1300px) {
    margin: 0 1rem;
  }
  @media screen and (max-width: 960px) {
    background-color: transparent;
    box-shadow: none;
    margin: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1200px) {
    gap: 2rem;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-rem")});
    transition: opacity 0.5s ease;
    background-color: #000;
  }
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  font-family: "Megrim", cursive;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  text-align: center;
  cursor: pointer;
  transform: scale(0.75);
  transition: color 0.5s ease;

  :hover {
    color: #fff;
  }

  &.active {
    color: violet;
  }

  @media screen and (max-width: 1200px) {
    width: 3rem;
  }

  @media screen and (max-width: 768px) {
    width: 1rem;
    transform: scale(0.55);
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    background-color: #eaeaea;
    border-radius: 2rem;
    padding: 1rem;
    top: 0;
    right: 0;
    transform: translate(-30%, 30%);
    font-size: 1rem;
    box-shadow: 5px 5px 50px #000;
    transition: opacity 0.5s ease;
    svg {
      color: #000;
    }

    &:hover {
      cursor: pointer;
      background-color: #000;
      box-shadow: 5px 5px 100px #b947ff;
      border: 2px solid #fff;
      svg {
        color: violet;
      }
    }
  }
`;

//Drink
export const DrinkContainer = styled.div`
  margin: 2.5rem auto;
  padding: 0 1rem;
  max-width: 80rem;

  h2 {
    text-align: center;
    margin: 1.5rem auto;
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 0 0.5rem;

  img {
    width: 36rem;
    height: 36rem;
    border-radius: 0.5rem;

    @media screen and (max-width: 1200px) {
      width: 70%;
      height: 70%;
      margin: 0 auto;
    }
  }

  p {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    color: #50405a;
    span {
      font-weight: bold;
      color: #fff;
    }
  }

  ul {
    list-style: none;
    color: #50405a;
    li {
      padding: 0.25rem 1.5rem;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

//ErrorMessage
export const ErrorText = styled.h1`
  text-align: center;
  margin: 4rem auto;
  color: violet;
`;
