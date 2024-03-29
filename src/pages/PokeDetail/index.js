import React, { useState, useEffect } from "react";
import "./style.scss";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import typeColors from "../../helpers/typeColours";
import eraseArrow from "../../helpers/eraser";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { usePalette } from "react-palette";
import { getPokemon, getAllPokemon } from "../../services/allPokemon";
import LoadingPage from "../../pages/LoadingPage";


function ItemDetail() {
  const history = useHistory();
  const { pokename } = useParams();
  const location = useLocation();
  const [item, setItem] = useState([]);
  const [specieItem, setSpecieItem] = useState([]);
  const [image_url, setImage_url] = useState("");
  const { data, error } = usePalette(image_url);
  const [loading, setLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [recordedEvo, setRecordedEvo] = useState([]);

  const pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokename}`;
  const specieURL = `https://pokeapi.co/api/v2/pokemon-species/${pokename}`;

  useEffect(() => {
    async function fetchData() {
      let pokeRes = await getAllPokemon(pokeURL);
      setItem(pokeRes);
      setImage_url(pokeRes.sprites.other.dream_world.front_default);
      let specieRes = await getAllPokemon(specieURL);
      setSpecieItem(specieRes);
      let evoRes = await getAllPokemon(specieRes.evolution_chain.url);
      //   setevolutionChain(evoRes.chain.evolves_to[0].evolves_to[0].species.name);
      setEvolutionChain(evoRes.chain);
      setLoading(false);
      await eraseArrow();
    }
    fetchData();
  }, []);

  // console.log("color", data);
  const mystyle = {
    background: `linear-gradient(to right, ${data.vibrant}, ${data.darkVibrant})`,
  };
  const lighten = {
    background: `${data.vibrant}`,
  };
  const gradient = {
    background: `linear-gradient(130deg, rgba(255,255,255,0.5130427170868348) -3%, ${data.vibrant} 50%, ${data.vibrant} 5%`,
  };
  
  return (
    <div className="container-wrapper" style={gradient}>
      {loading ? (
        <LoadingPage/>
      ) : (
        <>
          <Box>
            <IconButton
              variant="outlined"
              color="primary"
              className="backButton"
              onClick={() => {
                history.goBack();
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          </Box>

          <Box className="item-bod">
            <Box className="detail-bod" height="100%">
              <Box className="detail-name">
                <Box className="box-name">
                  <p>{item.name}</p>
                  <span>#{item.id}</span>
                </Box>
              </Box>
              {/* <Box className="front-sprite-wrapper">
                <img
                  src={item.sprites.other["official-artwork"].front_default}
                  alt=""
                />
              </Box> */}
              <Box className="weight-data">
                <p>
                  Height: <span>{(item.height)*10} cm </span>
                </p>

                <p>
                  Weight: <span>{(item.weight)/10} kg</span>
                </p>

                {/* <div className="table-wrapper">
                  <div className="table-title">
                    <span>Egg Groups</span>
                  </div>
                  <div className="table-content">
                    {specieItem.egg_groups.map((egg, i) => {
                      return (
                        <p className="table-content abilities" key={i}>
                          {egg.name}
                          {i < specieItem.egg_groups.length - 1
                            ? ",\u00A0"
                            : ""}
                        </p>
                      );
                    })}
                  </div>
                </div> */}
                {/* <div className="table-wrapper">
                  <div className="table-title">
                    <span>Base Hapiness</span>
                  </div>
                  <div className="table-content">
                    <p>{specieItem.base_happiness}</p>
                  </div>
                </div> */}
                {/* <div className="table-wrapper">
                  <div className="table-title">
                    <span>Habitat</span>
                  </div>
                  <div className="table-content">
                    {specieItem.habitat === null ? (
                      <p> No data </p>
                    ) : (
                      <p className="table-content abilities">
                        {specieItem.habitat.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="table-wrapper">
                  <div className="table-title">
                    <span>Abilities</span>
                  </div>
                  {item.abilities.map((ability, i) => {
                    return (
                      <p className="table-content abilities" key={i}>
                        {ability.ability.name}
                        {i < item.abilities.length - 1 ? ",\u00A0" : ""}
                      </p>
                    );
                  })}
                </div> */}
              </Box>
            </Box>
            <Box className="picture-bod">
              <Box className="front-sprite-wrapper">
                <img
                  src={item.sprites.other["official-artwork"].front_default}
                  alt=""
                />
              </Box>
            </Box>
            <Box className="statistics-bod">
              <Box>
                <div className="Card__types">
                  {item.types.map((type, i) => {
                    return (
                      <div
                        key={i}
                        className="Card__type"
                        style={{
                          backgroundColor: typeColors[type.type.name],
                        }}
                      >
                        {type.type.name}
                      </div>
                    );
                  })}
                </div>
              </Box>
              <Box className="description-wrapper">
                <h2>About</h2>
                <p className="about-text">
                  {specieItem.flavor_text_entries[0].flavor_text}
                </p>
              </Box>
              {/* <Box className="attack-data">
                {specieItem.evolves_from_species == undefined ? (
                  <div>It's first </div>
                ) : (
                  <p>Evolves from: {specieItem.evolves_from_species.name}</p>
                )}
              </Box> */}

              <Box className="stats-name">
                <h2>Base Stats</h2>
                {item.stats.map((stat, i) => {
                  return (
                    // <Box key={i}>
                    //   <h3>
                    //     {stat.stat.name}: {stat.base_stat}
                    //   </h3>
                    // </Box>
                    <div key={i} className="stat-box">
                      {stat.stat.name}: {stat.base_stat}
                    </div>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
