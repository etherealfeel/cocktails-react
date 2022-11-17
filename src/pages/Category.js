import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState([]);
    let params = useParams();

    const getCategory = async (name) => {
      const request = await fetch(`https:\\www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`);
      const data = await request.json();
      const lessDrinks = data.drinks.slice(0, 20);
      setCategory(lessDrinks);
    }

    useEffect(() => {
        getCategory(params.type);
    }, [params])
  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
      {category.map((drink) => {
        return (
          <Card key={drink.idDrink}>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <h4>{drink.strDrink}</h4>
            <StyledLink to={'/details/'+drink.idDrink}>
              <button>Details</button>
            </StyledLink>
          </Card>
        )
      })}
  </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  padding: 2rem 20rem;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
`;

const Card = styled.div`
  position: relative;
  min-height: 25rem;
  background-color: #fff;
  box-shadow: 2px 5px 3px 0px #B947FF;
  padding-bottom: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s linear;
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
    margin: 1rem 0 2rem;
  }

  button {
    position: absolute;
    bottom: 1rem;
    font-family: 'Comfortaa', cursive;
    width: 6rem;
    display: block;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 1.25rem;
    color: #fff;
    background-color: #44006E;
    border: none;
    border-radius: 0.2rem;
    transition: all .5s ease;
    :hover {
      background-color: violet;
      color: #000;
    }
  }

  :hover {
    box-shadow: 4px 10px 5px 0px #B947FF;
  }
`

const StyledLink = styled(Link)`
  display: block;
  width: 6rem;
  margin: 0 auto;
`

export default Category
