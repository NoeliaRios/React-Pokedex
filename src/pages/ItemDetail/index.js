import React, { useState, useEffect } from "react";
import "./style.scss";
import typeColors from "../../helpers/typeColours";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { usePalette } from "react-palette";
import Palette from "react-palette";

function ItemDetail() {
  const history = useHistory();
  const { pokename } = useParams();
  const location = useLocation();
  const [item, setItem] = useState([]);
  const [specieItem, setSpecieItem] = useState([]);
  const [image_url, setImage_url] = useState("");

  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${pokename}`, setItem);
    fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${pokename}`,
      setSpecieItem
    );
  }, []);

  async function fetchData(url, setter) {
    const getData = await fetch(url);
    const json = await getData.json();
    setter(json);
  }
  setImage_url(item.sprites.other.dream_world.front_default);

  console.log(specieItem);
  const { data, loading, error } = usePalette(image_url);

  return (
    <div className="container-wrapper">
      <div>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          Go back
        </button>
      </div>
      <div className="item-bod">
        <div className="detail-bod">
          <div className="detail-name">
            <div className="box-name">
              <p>{item.name}</p>
              <span>#{item.id}</span>
            </div>
            <div>
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
            </div>
          </div>
          {item.sprites == undefined ? (
            <div>Loading...</div>
          ) : (
            <div className="front-sprite-wrapper">
              <img src={item.sprites.other.dream_world.front_default} alt="" />
            </div>
          )}
          <div className="weight-data">
            <div className="table-wrapper">
              <div className="table-title">
                <span>Height</span>
              </div>
              <div className="table-content">
                <p>{item.height}m </p>
              </div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Weight</span>
              </div>
              <div className="table-content">{item.weight}kg</div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Egg Groups</span>
              </div>
              <div className="table-content">
                {specieItem.egg_groups != null &&
                specieItem.egg_groups.length > 0 ? (
                  specieItem.egg_groups.map((egg, i) => {
                    return (
                      <p className="table-content abilities" key={i}>
                        {egg.name}
                        {i < specieItem.egg_groups.length - 1 ? ",\u00A0" : ""}
                      </p>
                    );
                  })
                ) : (
                  <div>Loading</div>
                )}
                {/* {loading ? (
                  <div>Loading...</div>
                ) : (
                  specieItem.egg_groups.map((egg, i) => {
                    return (
                      <p className="table-content abilities" key={i}>
                        {egg.name}
                        {i < specieItem.egg_groups.length - 1 ? ",\u00A0" : ""}
                      </p>
                    );
                  })
                )} */}
              </div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Base Hapiness</span>
              </div>
              <div className="table-content">
                {specieItem.base_happiness != null &&
                specieItem.base_happiness.length > 0 ? (
                  <div>Loading...</div>
                ) : (
                  <p>{specieItem.base_happiness}</p>
                )}
              </div>
            </div>
            <div className="table-wrapper">
              <div className="table-title">
                <span>Habitat</span>
              </div>
              <div className="table-content">
                {specieItem.habitat == undefined ? (
                  <div>Loading</div>
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
          </div>
        </div>
        <div className="statistics-bod">
          <div className="description-wrapper">
            <p>{item.weight}</p>
          </div>
          <div className="attack-data">
            {specieItem.evolves_from_species == undefined ? (
              <div>Loading...</div>
            ) : (
              <p>Evolves from: {specieItem.evolves_from_species.name}</p>
            )}
          </div>
          <div>
            <h2>Stats</h2>
            {item.stats != null && item.stats.length > 0 ? (
              item.stats.map((stat, i) => {
                return (
                  <div key={i}>
                    <h3>
                      {stat.stat.name}: {stat.base_stat}
                    </h3>
                  </div>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
