import Search from "./Search";
import Current from './Current';
import FiveDay from './FiveDay';
import AddRemoveFavorites from './AddRemoveFavorites';

const Home = () => {
    // const citiesAuto = require("../jsons/citiesAuto.json");
    // const current = require("../jsons/telaviv.json");
    // const fiveDay = require("../jsons/5day-forecast.json");
    return (
        <div>
            <Search/>
            <AddRemoveFavorites/>
            <Current/>
            <FiveDay/>
        </div>
    )
}

export default Home;