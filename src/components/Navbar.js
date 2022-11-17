import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {BiDrink} from 'react-icons/bi';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const Navbar = () => {
  return (
    <Nav>
        <StyledLink style={{
            display: 'flex',
            flexDirection: 'row'
        }} to={'/'} end>
            <BiDrink/>
            <h2>Home</h2>
        </StyledLink>
        <List>
            <AiOutlineLeft/>
            <StyledLink to={'/drinks/Ordinary_Drink'}>
                <h2>Ordinary Drink</h2>
            </StyledLink>
            <StyledLink to={'/drinks/Cocktail'}>
                <h2>Cocktails</h2>
            </StyledLink>
            <StyledLink to={'/drinks/Shot'}>
                <h2>Shot</h2>
            </StyledLink>
            <StyledLink to={'/drinks/Soft_Drink'}>
                <h2>Soft Drink</h2>
            </StyledLink>
            <StyledLink to={'/drinks/Beer'}>
                <h2>Beer</h2>
            </StyledLink>
            <AiOutlineRight/>
        </List>
        <StyledLink to={'/about'}>
            <h2>About</h2>
        </StyledLink>
    </Nav>
    
  )
}

const Nav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: black;
    svg {
        font-size: 2rem;
        color: gray;
    }
`

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

`

const StyledLink = styled(NavLink)`
    font-family: 'Megrim', cursive;
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
    transform: scale(.75);
    h4 {
        color: #fff;
        font-size: .8rem;
    }

    &.active{
        color: #fff;

        svg {
        color: #fff;
        }


        h4 {
        color: #fff;
        }
    }
`

export default Navbar