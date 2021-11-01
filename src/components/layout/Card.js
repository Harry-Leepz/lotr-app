import React from "react";
import "./style.css";

const Card = ({ pokemon }) => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img src={pokemon.sprites.front_default} />
      </div>
      <div className='card-name'>{pokemon.name}</div>
      <div className='card-types'>
        {pokemon.types.map((type) => {
          return <div className='card-type'>{type.type.name}</div>;
        })}
      </div>
      <div className='card-info'>
        <div className='card-data'>
          <p>
            <strong>Weight: </strong>
            {pokemon.weight}
          </p>
          <p>
            <strong>Height: </strong>
            {pokemon.height}
          </p>
          <p>
            <strong>Ability: </strong>
            {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
