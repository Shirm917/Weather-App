import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Favorites = () => {
  const { setCurrentCityName, setCityKey } = useContext(AppContext);
  const favoritesStorage = JSON.parse(localStorage.getItem("favorites")) || [];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <h1 className="title">Favorites</h1>
      {!favoritesStorage || favoritesStorage.length === 0 ? null : (
        <Stack 
            className="forecastContainer"
            direction="row"
            spacing={2}
        >
          {favoritesStorage.map((favorite) => {
            return (
              <Link to="/" key={favorite.id} className="link">
                {/* // in the onclick setkey and setname in the button, make the buttons another component and so the fetches happen in other ones and citykey and cityname are changed to the current one  */}
                <Item
                  className="weatherContainers"
                  onClick={() => {
                    setCurrentCityName(favorite.currentCityName);
                    setCityKey(favorite.id);
                  }}
                >
                  <p>{favorite.currentCityName}</p>
                  <p>{favorite.currentCity[0].Temperature.Imperial.Value}° F</p>
                  <p>{favorite.currentCity[0].WeatherText}</p>
                </Item>
              </Link>
            );
          })}
        </Stack>
      )}
    </>
  );
};

export default Favorites;
