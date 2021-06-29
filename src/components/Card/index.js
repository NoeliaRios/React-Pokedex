import "./style.scss";

function Card({ pokemon }) {
  return (
    <div className="card-body-wrapper">
      <div className="card-name">
        <h4>{pokemon.name}</h4>
        <span>#{pokemon.id}</span>
      </div>
      <div className="card-img">
        <div className="sprite-wrapper">
          <img
            className="sprite_img"
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
          />
        </div>
      </div>
      {/* <div className="Card__types">
        {pokemon.types.map((type, i) => {
          return (
            <div
              key={i}
              className="Card__type"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div> */}
      {/* <div className="Card__info">
        <div className="Card__data Card__data--weight">
          <p className="title">Weight</p>
          <p>{pokemon.weight}</p>
        </div>
        <div className="Card__data Card__data--weight">
          <p className="title">Height</p>
          <p>{pokemon.height}</p>
        </div>
        <div className="Card__data Card__data--ability">
          <p className="title">Ability</p>
          <p>{pokemon.abilities[0].ability.name}</p>
        </div>
      </div> */}
    </div>
  );
}

export default Card;
