import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

function Home() {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        navigate('/weather', {
            state: {
                city: city
            }
        })
    };

    return(
        <Container>
            <TitleContainer>
                <Title1>The Forecast</Title1>
                <Title2>Weather App</Title2>
            </TitleContainer>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <Empty/>
                    <InputCity type='text' name='city' placeholder='Search'></InputCity>
                    <SearchButton type='submit'><SearchIcon icon={faSearch} /></SearchButton>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default Home

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Title1 = styled.p`
    font-size: 50px;
    font-weight: 900;
    font-family: Assistant;
    background: linear-gradient(to bottom, #25c55e 0%, #59d073 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
`

const Title2 = styled.p`
    font-size: 50px;
    font-weight: 900;
    font-family: Assistant;
    background: linear-gradient(to bottom, #8dd984 0%, #d1e499 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
`

const FormContainer = styled.div`
    display: flex;
`

const Form = styled.form`
    display: flex;
`

const Empty = styled.div`
    display: flex;
    background-color: white;
    border-radius: 20px 0px 0px 20px;
    width: 10px;
`

const InputCity = styled.input`
    border: none;
    width: 300px;
    height: 39px;
    ::placeholder,
        ::-webkit-input-placeholder {
            color: #124601;
            font-weight: bold;
        }
        :-ms-input-placeholder {
            color: #124601;
            font-weight: bold;
        }
`


const SearchButton = styled.button`
    border: none;
    background-color: white;
    border-radius: 0px 10px 10px 0px;
    width: 35px;
    cursor: pointer;
`

const SearchIcon = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: #124601;
`