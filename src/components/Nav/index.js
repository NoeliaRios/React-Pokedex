import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import "./style.scss";
import Logo from "../../pokeball.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/" className="logo-link">
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          className="nav-wrapper"
        >
          <Box maxWidth={30} m={1} className="logo-wrapper">
            <img src={Logo} alt="" className="logo-img" />
          </Box>
          <Box>
            {" "}
            <h2 className="logo-h2">Pokedex</h2>
          </Box>
        </Grid>
      </Link>
    </>
  );
}

export default Nav;
