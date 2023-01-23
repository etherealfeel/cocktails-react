import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { Card, Grid, StyledLink } from "./../shared/styledComponents";

const Searched = () => {
  let params = useParams();
  const {
    data: drinks,
    isLoading,
    error,
  } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${params.search}`);

  const spinner = isLoading ? <Spinner /> : null,
    errorMessage = error ? <ErrorMessage /> : null;

  return (
    <>
      {spinner}
      {errorMessage}
      {drinks.length ? (
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          {drinks.map((item) => {
            return (
              <Card key={item.idDrink}>
                <img src={item.strDrinkThumb} alt={item.strDrink} />
                <h4>{item.strDrink}</h4>
                <StyledLink to={"/details/" + item.idDrink}>
                  <button>Details</button>
                </StyledLink>
              </Card>
            );
          })}
        </Grid>
      ) : null}
    </>
  );
};

export default Searched;
