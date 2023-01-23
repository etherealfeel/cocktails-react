import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

//App
export const StyledDiv = styled.div`
  min-height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(42,0,75,1) 100%, rgba(68,68,68,1) 100%, rgba(255,255,255,1) 100%, rgba(4,4,60,1) 100%, rgba(9,9,121,0) 100%);  
`

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
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

//Category
export const Grid = styled(motion.div)`
  display: grid;
  padding: 2rem 20rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
`;

export const Card = styled.div`
  min-height: 25rem;
  background-color: #fff;
  box-shadow: 2px 5px 3px 0px #b947ff;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  min-width: 0;

  img {
    width: 100%;
    object-fit: cover;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
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
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 6rem;
  margin: 0 auto;
`;

//SearchForm
export const StyledForm = styled.form`
  margin: 1.5rem 30rem;

  div {
    width: 100%;
    position: relative;
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
export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: black;
  svg {
    font-size: 2rem;
    color: gray;
  }
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Megrim", cursive;
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  width: 6rem;
  height: 6rem;
  text-align: center;
  cursor: pointer;
  transform: scale(0.75);
  h4 {
    color: #fff;
    font-size: 0.8rem;
  }

  &.active {
    color: #fff;

    svg {
      color: #fff;
    }

    h4 {
      color: #fff;
    }
  }
`;

//Drink
export const DrinkContainer = styled.div`
  margin: 2.5rem auto;
  max-width: 80rem;

  h2 {
    text-align: center;
    margin: 1.5rem auto;
    color: #fff;
  }
`
export const Info = styled.div`
  display: flex;
  gap: 2.5rem;

  img {
    width: 38rem;
    height: 38rem;
    border-radius: 0.5rem;
  }

  p {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    color: #50405A;
    span {
      font-weight: bold;
      color: #fff;
    }
  }

  ul {
    list-style: none;
    color: #50405A;
    li {
      padding: 0.25rem 1.5rem;
      font-size: 1.5rem;
    }
  }
`

//ErrorMessage
export const ErrorText = styled.h1`
    text-align: center;
    margin: 4rem auto;
    color: violet;
`