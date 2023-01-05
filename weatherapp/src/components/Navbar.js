import { NavLink, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ThermostatIcon from "@mui/icons-material/Thermostat";

const Navbar = () => {
  return (
    <Box className="navbar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <Link className="link" to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <ThermostatIcon />
              Herolo Weather App
            </IconButton>
          </Link>
          <NavLink className="link" to="/">Home</NavLink>
          <NavLink className="link" to="/favorites">Favorites</NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
