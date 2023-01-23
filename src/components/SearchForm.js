import { useEffect, useRef } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { StyledForm } from "../shared/styledComponents";

const SearchForm = () => {
  const navigate = useNavigate("");
  const searchValue = useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleChangeValue = (e) => {
    if (searchValue.current.value != "") navigate(`/searched/${searchValue.current.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <BiSearchAlt />
        <input
          placeholder="Cocktail name..."
          type="text"
          ref={searchValue}
          onChange={(e) => handleChangeValue(e)}
        />
      </div>
    </StyledForm>
  );
};

export default SearchForm;
