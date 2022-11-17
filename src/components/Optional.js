import { useState, useEffect } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';

const Optional = () => {
    const [optional, setOptional] = useState([]);

    useEffect(() => {
        getOptional();
    }, [])

    const getOptional = async () => {
        const request = await fetch('https:\\www.thecocktaildb.com/api/json/v1/1/filter.php?a=Optional_alcohol');
        const data = await request.json(); 
        const lessDrinks = data.drinks.slice(0, 10);
        setOptional(lessDrinks);
    }
  return (
    <div>
      <Container>
            <h3>Optional</h3>
            <Splide options={{
                perPage: 5,
                autoplay: true,
                pauseOnHover: true,
                interval: 1000,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '5rem',
            }}>
                {optional.map((item) => {
                    return (
                        <SplideSlide key={item.idDrink}>
                            <Link to={'/details/'+item.idDrink}>
                                <Card>
                                    <p>{item.strDrink}</p>
                                    <img src={item.strDrinkThumb} alt={item.strDrink}/>
                                    <Gradient/>
                                </Card>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </Container>
    </div>
  )
}

const Container = styled.div`
    max-width: 85%;
    margin: 1rem auto;    
    padding: 1rem 0.5rem;
    h3 {
        padding: 0.25rem 0.5rem;
        color: #fff;
    }

`;

const Card = styled.div`
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

const Gradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.5));
`

export default Optional