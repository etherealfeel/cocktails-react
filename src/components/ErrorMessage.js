import styled from "styled-components"

const ErrorMessage = () => {
  return (
    <ErrorText>
      An error has occurred...
    </ErrorText>
  )
}

const ErrorText = styled.h1`
    text-align: center;
    margin: 4rem auto;
    color: violet;
`

export default ErrorMessage
