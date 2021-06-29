import React, { useState, useEffect } from "react";
import "./style.scss";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import typeColors from "../../helpers/typeColours";

function ItemDetail({ match }) {
  console.log(match);
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon${match.url}`);
    const item = await data.json();
    setItem(item);
    console.log(item);
  };

  return (
    <Container className="container-wrapper">
      <Box className="item-bod">
        <Box className="detail-bod">
          <Box className="detail-name">
            <Box className="box-name">
              <p>{item.name}</p>
              <span>#{item.id}</span>
            </Box>
            <Box>
              <div className="Card__types">
                {item.types != null && item.types.length > 0 ? (
                  item.types.map((type, i) => {
                    return (
                      <div
                        key={i}
                        className="Card__type"
                        style={{ backgroundColor: typeColors[type.type.name] }}
                      >
                        {type.type.name}
                      </div>
                    );
                  })
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </Box>
          </Box>
          {item.sprites == undefined ? (
            <div>Loading...</div>
          ) : (
            <Box className="front-sprite-wrapper">
              <img src={item.sprites.other.dream_world.front_default} alt="" />
            </Box>
          )}
          <Box className="weight-data">
            <div className="table-wrapper">
              <div className="table-title">
                <span>Height</span>
              </div>
              <div className="table-content">{item.height}</div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Weight</span>
              </div>
              <div className="table-content">{item.weight}</div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Abilities</span>
              </div>
              {item.abilities != null && item.abilities.length > 0 ? (
                item.abilities.map((ability, i) => {
                  return (
                    <p className="table-content abilities" key={i}>
                      {ability.ability.name}
                      {i < item.abilities.length - 1 ? ",\u00A0" : ""}
                    </p>
                  );
                })
              ) : (
                <div>Loading</div>
              )}
            </div>
          </Box>
        </Box>
        <Box className="statistics-bod">
          <Box className="description-wrapper">
            <p>{item.weight}</p>
          </Box>
          <Box className="attack-data">
            <p>{item.name}</p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ItemDetail;
