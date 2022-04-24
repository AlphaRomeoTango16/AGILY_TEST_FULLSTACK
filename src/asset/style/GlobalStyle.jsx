import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
* {
    font-family: 'Poppins, Heiti SC', Helvetica, sans-serif;
}
body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #124601;
    color: white;
    margin: 0;
}
`
function GlobalStyle() {

    return <StyledGlobalStyle/>
}

export default GlobalStyle