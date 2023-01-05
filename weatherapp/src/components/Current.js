import {useEffect, useContext} from 'react';
import {AppContext} from '../App';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Current = () => {
    const {cityKey,currentCityName,currentCity,setCurrentCity} = useContext(AppContext);
      
    useEffect(() => {
        if (cityKey) {
            fetch(`${BASE_URL}/currentconditions/v1/${cityKey}?apikey=${API_KEY}`)
            .then(result => result.json())
            .then(data => setCurrentCity(data))
            .catch(err => console.log(err))
        }
    },[cityKey])
    
    return (
        !currentCity || currentCity.length === 0 ? null 
        :
        <div className="current">
            <img src={`https://developer.accuweather.com/sites/default/files/${currentCity[0].WeatherIcon > 9 ? "" : 0}${currentCity[0].WeatherIcon}-s.png`} title={currentCity[0].WeatherText} alt={currentCity[0].WeatherText}/>
            <p>{currentCityName}</p>
            <p>{currentCity[0].Temperature.Imperial.Value}° F</p>
        </div>
    )
}

export default Current;