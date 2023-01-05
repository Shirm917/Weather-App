import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../App';
import moment from 'moment';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const FiveDay = () => {
    const {cityKey} = useContext(AppContext);
    const [fiveDayForecast,setfiveDayForecast] = useState([]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(()=> {
        if (cityKey) {
            fetch(`${BASE_URL}/forecasts/v1/daily/5day/${cityKey}?apikey=${API_KEY}`)
            .then(result => result.json())
            .then(data => setfiveDayForecast(data))
            .catch(err => console.log(err))
        }
    }, [cityKey])

    return (
        !fiveDayForecast || fiveDayForecast.length === 0 ? null 
        :
        <>
            <h1 className="title">{fiveDayForecast.Headline.Text}</h1>
            <Stack 
                className="forecastContainer"
                direction="row"
                spacing={2}
            >
                {
                    fiveDayForecast.DailyForecasts.map(day => {
                        return (
                            <Item key={day.EpochDate} className="weatherContainers">
                                <p>{moment(day.Date).utc().format("ddd")}</p>
                                <p>Low: {day.Temperature.Minimum.Value}° F</p>
                                <p>High: {day.Temperature.Maximum.Value}° F</p>
                            </Item>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default FiveDay;