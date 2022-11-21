import styled from 'styled-components';

const About = () => {

  return (
    <Container>
      <h2><a href='https://www.thecocktaildb.com/api.php' target='_blank'>API used *click*</a></h2>
    </Container>
  )
}

const Container = styled.div`
  margin: 2.5rem auto;
  max-width: 80rem;

  h2 {
    text-align: center;
    margin: 1.5rem auto;
    color: #50405A;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    transition: all .5s ease;
    :hover {
      color: violet;
    }
  }
`

export default About;
