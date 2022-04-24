import {useState, useEffect}  from 'react'
import PropTypes  from 'prop-types'
import styled from 'styled-components'

Card.propTypes = {
    icon : PropTypes.string.isRequired,
    temp : PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
}

function Card({icon, temp, index,}) {
    const [day, setDay] = useState('')
    const [dateNumber, setDateNumber] = useState('')
    
    useEffect(() => {
        nextDate(new Date(), index)
    }, [index])

    function nextDate(date, number) {
        const newNumber = number + 1;
        const newDate = new Date(date);
        const datePlus = new Date(newDate.setDate(newDate.getDate() + newNumber));
        const options1 = { weekday: 'long', };
        const dayFinal = datePlus.toLocaleDateString('fr-FR', options1)
        const options2 = {  month: 'long', day: 'numeric' };
        const dateNumberFinal = datePlus.toLocaleDateString('fr-FR', options2)
        
        setDay(dayFinal);
        setDateNumber(dateNumberFinal);
    }

    return (
        <Container>
            <Icon src={'http://openweathermap.org/img/wn/'+ icon +'@4x.png'}/>
            <NextDate>
                <Day>{day}</Day>
                <DateNumber>{dateNumber}</DateNumber>
            </NextDate>
            <Temperature>{Math.round(temp)}°C</Temperature>
        </Container>
    )
}

export default Card

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #124601;
    border-radius: 20px;
    width: 300px;
    height: 70px;
    cursor: pointer;
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    margin-left: 10px;
`

const NextDate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Day = styled.p`
    font-weight: bold;
    margin: 0;
`

const DateNumber = styled.p`
    font-size: 13px;
    margin: 0;
`

const Temperature = styled.p`
    font-size: 23px;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
    margin-right: 20px;
`