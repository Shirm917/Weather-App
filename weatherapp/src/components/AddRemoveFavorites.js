import {useState, useContext} from 'react';
import {AppContext} from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartUnfilled} from '@fortawesome/free-regular-svg-icons';


const AddRemoveFavorites = () => {
    const {cityKey,currentCityName,currentCity} = useContext(AppContext);
    const [favorites,setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

    const addToFavorites = () => {
        favorites.push({id: cityKey, currentCityName, currentCity})
        setFavorites([...favorites]);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
    const removeFromFavorites = () => {
        const cityIndex = favorites.findIndex(city => {
            return city.id === cityKey
        })
        favorites.splice(cityIndex, 1);
        setFavorites([...favorites]);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    
    return (
        <div>
            <i>{favorites.find(city => city.id === cityKey) ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faHeartUnfilled} />}</i>
            <button onClick={addToFavorites}>Add to favorites</button>
            <button onClick={removeFromFavorites}>Remove from favorites</button>
        </div>
    )
}

export default AddRemoveFavorites;