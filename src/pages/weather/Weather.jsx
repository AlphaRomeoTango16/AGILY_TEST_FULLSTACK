import {useEffect, useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import MainCard from '../../component/MainCard'
import Card from '../../component/Card'
import styled from 'styled-components'

function Weather() {
    const {state} = useLocation();
    const navigate = useNavigate();

    const  city = state.city;

    const [coordinates, setCoordinates] = useState('')
    const [weather, setWeather] = useState('');

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const now = new Date();
    const frDate = now.toLocaleDateString('fr-FR', options)

    useEffect(() => {
        console.log('coordinates', coordinates)
    }, [coordinates])

    useEffect(() => {
        getLocationCoordinates(city)
    }, [city])

    useEffect(() => {
        getWeather(coordinates)
    }, [coordinates])

    const getLocationCoordinates = async (cityName) => {
        await axios.post('http://localhost:3001', {
            'city': cityName
        })
        .then((response) => setCoordinates(response.data[0]))
    };

    const getWeather = async (coordinates) => {
        await axios.post('http://localhost:3001/weather', {
            'lat': coordinates.lat,
            'lon': coordinates.lon
        })
        .then((response) => setWeather(response.data))
    };

   const _render = () => {
       if (weather) {
           return (
            <Container>
                <Column1>
                    <ButtonBack onClick={() => navigate('/')}><Arrow icon={faArrowLeft} /></ButtonBack>
                    <MainCard
                            date={frDate}
                            weather={weather[0]}
                        />
                </Column1>
                <Column2>
                    {weather.shift() && weather.map((dayWeather, index) => {
                        return (
                            <Card
                                key={index}
                                index={index}
                                icon={dayWeather.weather[0].icon}
                                temp={dayWeather.temp.day}
                            />
                        )
                    })

                    }
                </Column2>
            </Container>
           )
       }
   }

    return(
        _render()
    );
}

export default Weather

const Container = styled.div`
    display: flex;
    background-image: url('https://cdn.paris.fr/paris/2019/10/01/huge-b3661d1d3cb578bc5752cc0d4237d592.jpg');
    width: 100%;
    height: 100vh;
`

const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
    padding: 30px 30px 0px 30px;
`

const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    justify-content: space-between;
    padding: 30px 30px 0px 30px;
    margin-bottom: 30px;
`

const ButtonBack = styled.button`
    width: 50px;
    height: 50px;
    background-color: #124601;
    border-radius: 100px;
    border: none;
    cursor: pointer;
`

const Arrow = styled(FontAwesomeIcon)`
    font-size: 20px;
    color: white;
`