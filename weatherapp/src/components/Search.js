import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../App';
import "./Search.css"

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Search = () => {
    const {setCurrentCityName, setCityKey} = useContext(AppContext);
    const [search,setSearch] = useState("");
    const [citySuggestions,setCitySuggestions] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${search}`)
        .then(result => result.json())
        .then(data => setCitySuggestions(data))
        .catch(err => console.log(err))
    },[search])

    const autoCompleteCity = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div className="autoComplete">
            <div>
                <input type="text" onChange={autoCompleteCity}/>
            </div>
            {
            !citySuggestions || citySuggestions.length === 0 ? null 
            :
            <ul>
                {
                    citySuggestions.map(city => {
                        return (
                            // here onclick when you setcontext you can setcityname, and setkey to the data 
                            <li key={city.Key}
                            onClick={() => {
                                setCurrentCityName(city.LocalizedName); 
                                setCityKey(city.Key)
                                setCitySuggestions([]) // once we click on something we don't want to see the suggestions anymore
                            }}
                            >
                            {city.LocalizedName}
                            </li>
                        )
                    })
                }
            </ul>

            }
        </div>
    )
}

export default Search;