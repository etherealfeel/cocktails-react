import {useEffect, useRef} from 'react'
import styled from 'styled-components'
import {BiSearchAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => { 

    const navigate = useNavigate('');
    const searchValue = useRef();

    useEffect(() => {
        searchValue.current.focus();
      }, []);

    const handleChangeValue = (e) => {
        if(searchValue.current.value!='') navigate(`/searched/${searchValue.current.value}`);
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

  return (
    <FormStyled
        onSubmit={handleSubmit}>
            <div>
                <BiSearchAlt/>
                <input
                    placeholder='Cocktail name...'
                    type='text'
                    ref={searchValue}
                    onChange={e => handleChangeValue(e)}
                />
            </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
    margin: 1.5rem 30rem;

    div {
        width: 100%;
        position: relative;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
    }

    input {
        outline: none;
        border: none;
        border-radius: 1.5rem;
        padding: 1.5rem 2.5rem;
        font-size: 1.5rem;
        width: 100%;
        box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
        font-family: 'Comfortaa', cursive;
    }

`

export default SearchForm
