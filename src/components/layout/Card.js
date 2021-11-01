import React from "react";

const Card = ({ pokemon }) => {
  return (
    <div className='Card'>
      <div className='Card__img'>
        <img src={pokemon.sprites.front_default} />
      </div>
      <div className='Card__Name'>{pokemon.name}</div>
      <div className='Card__types'>
        {pokemon.types.map((type) => {
          return <div className='Card__type'>{type.type.name}</div>;
        })}
      </div>
      <div className='Card_info'>
        <div className='Card__data'>
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
