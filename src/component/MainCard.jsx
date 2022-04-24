import PropTypes  from 'prop-types'
import styled from 'styled-components'

MainCard.propTypes = {
    date : PropTypes.string.isRequired,
    weather : PropTypes.object.isRequired,
}

function MainCard({date, weather}) {
    return (
        <Container>
            <Line>
                <Icon src={'http://openweathermap.org/img/wn/'+ weather.weather[0].icon +'@4x.png'}/>
                <CurrentDate>{date}</CurrentDate>
                <Empty/>
            </Line>
            <SubContainer>
                <Column>
                    <Info>Jour - {weather.temp.day}°C</Info>
                    <Info>Nuit - {weather.temp.night}°C</Info>
                    <Info>Humidité - {weather.humidity}%</Info>
                </Column>
                <Column>
                    <Info>Pression - {weather.pressure}hPa</Info>
                    <Info>Vent - {weather.wind_speed} Km/h</Info>
                </Column>
            </SubContainer>
        </Container>
    )
}

export default MainCard

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #124601;
    opacity: 0.95;
    border-radius: 20px 20px 0px 0px;
    padding: 20px;
    width: 300px;
    height: 200px;
`

const Line = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const CurrentDate = styled.div`
    font-weight: bold;
    font-size: 20px;
    color: white;
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
`

const Empty = styled.div`
    width: 50px;
    height: 50px;
`

const SubContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 20px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Info = styled.p`
    margin: 0;
    font-weight: bold;
    color: white;
`