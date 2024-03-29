import {Splide, SplideSlide} from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
import useFetch from './../hooks/useFetch';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';
import { MainContainer, SlideCard, Gradient } from "../shared/styledComponents";

const Alcoholic = () => {
    const {data: drinks, isLoading, error} = useFetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic', 10);

    const spinner = isLoading ? <Spinner/> : null,
    errorMessage = error ? <ErrorMessage/> : null;
    return (
    <>
        {spinner}
        {errorMessage}
        <MainContainer>
            <h3>Alcoholic</h3>
            <Splide options={{
                perPage: 3,
                autoplay: true,
                pauseOnHover: true,
                interval: 2000,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '1rem',
            }}>
                {drinks.map((item) => {
                    return (
                        <SplideSlide key={item.idDrink}>
                            <Link to={'/details/'+item.idDrink}>
                                <SlideCard>
                                    <p>{item.strDrink}</p>
                                    <img src={item.strDrinkThumb} alt={item.strDrink}/>
                                    <Gradient/>
                                </SlideCard>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </MainContainer>
    </>
  )
}

export default Alcoholic;