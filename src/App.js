import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import SearchForm from "./components/SearchForm";
import Pages from "./pages/Pages";
import styled from "styled-components";

function App() {
  return (
    <StyledDiv className="App">
      <BrowserRouter>
        <Navbar/>
        <SearchForm/>
        <Pages/>
      </BrowserRouter>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  min-height: 100vh;
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(42,0,75,1) 100%, rgba(68,68,68,1) 100%, rgba(255,255,255,1) 100%, rgba(4,4,60,1) 100%, rgba(9,9,121,0) 100%);  
`

export default App;
