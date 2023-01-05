import {Routes,Route} from 'react-router-dom';
import {useState,createContext} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import './App.css';

export const AppContext = createContext(null);

// ---- Api has limited calls ---- //

function App() {
  const [currentCityName,setCurrentCityName] = useState("Tel Aviv");
  const [cityKey,setCityKey] = useState("215854");
  const [currentCity, setCurrentCity] = useState([]);

  return (
    <AppContext.Provider value={{
      currentCityName,
      setCurrentCityName,
      cityKey,
      setCityKey,
      currentCity,
      setCurrentCity
    }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
