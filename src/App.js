import Navbar from "./components/Navbar";
import { BrowserRouter } from 'react-router-dom';
import SearchForm from "./components/SearchForm";
import Pages from "./pages/Pages";
import { StyledDiv } from "./shared/styledComponents";

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


export default App;
