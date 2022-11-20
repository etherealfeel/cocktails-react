import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import useFetch from './../hooks/useFetch';

const Drink = () => {
  const params = useParams();
  const {data: drink, loading, error} = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`, 'all', 'single');

  return (
    <Container>
      <h2>{drink?.strDrink}</h2>
      <Info>
        <img src={drink?.strDrinkThumb} alt={drink?.strDrink}/>
        <div className="description">
          <p><span>Name:</span> {drink?.strDrink}</p>
          <p><span>Type:</span> {drink?.strAlcoholic}</p>
          <p><span>Category:</span> {drink?.strCategory}</p>
          <p><span>Glass:</span> {drink?.strGlass}</p>
          <p><span>Instructions:</span> {drink?.strInstructions}</p>
          <p><span>Ingredients:</span></p>
          <ul>
            <li>{drink?.strIngredient1}</li>
            <li>{drink?.strIngredient2}</li>
            <li>{drink?.strIngredient3}</li>
            <li>{drink?.strIngredient4}</li>
          </ul>
        </div>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  margin: 2.5rem auto;
  max-width: 80rem;

  h2 {
    text-align: center;
    margin: 1.5rem auto;
    color: #fff;
  }
`
const Info = styled.div`
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



export default Drink
