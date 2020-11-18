import { gql, useQuery } from '@apollo/client';
import React from 'react';

const POKEMON_TYPES = gql`
  query pokemonTypes($lang: String) {
    allPokemonTypes(lang: $lang)
  }
`;

interface Props {
  onChange(type: string): any;
}

export const PokemonTypes = ({ onChange }: Props) => {
  const { loading, error, data } = useQuery(POKEMON_TYPES);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const types: string[] = data.allPokemonTypes;

  return (
    <select onChange={evt => onChange(evt.currentTarget.value)}>
      {types.map((type: string) => (
        <option key={type + '-pokemon'} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
};
