import { useParams } from "react-router-dom";
import useFetch from "./../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { DrinkContainer, Info } from "../shared/styledComponents";

const Drink = () => {
  const params = useParams();
  const {
    data: drink,
    isLoading,
    error,
  } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`,
    1,
    "single",
  );

  const spinner = isLoading ? <Spinner /> : null,
    errorMessage = error ? <ErrorMessage /> : null;

  return (
    <>
      {spinner}
      {errorMessage}
      <DrinkContainer>
        <h2>{drink?.strDrink}</h2>
        <Info>
          <img src={drink?.strDrinkThumb} alt={drink?.strDrink} />
          <div className="description">
            <p>
              <span>Name:</span> {drink?.strDrink}
            </p>
            <p>
              <span>Type:</span> {drink?.strAlcoholic}
            </p>
            <p>
              <span>Category:</span> {drink?.strCategory}
            </p>
            <p>
              <span>Glass:</span> {drink?.strGlass}
            </p>
            <p>
              <span>Instructions:</span> {drink?.strInstructions}
            </p>
            <p>
              <span>Ingredients:</span>
            </p>
            <ul>
              <li>{drink?.strIngredient1}</li>
              <li>{drink?.strIngredient2}</li>
              <li>{drink?.strIngredient3}</li>
              <li>{drink?.strIngredient4}</li>
            </ul>
          </div>
        </Info>
      </DrinkContainer>
    </>
  );
};

export default Drink;
