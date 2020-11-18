import { gql, useQuery } from '@apollo/client';
import React from 'react';

import { Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow } from 'react95';

const POKEMON_SEARCH_BY_TYPE = gql`
  query pokemonTypes($type: String) {
    pokemonByType(type: $type) {
      type
      name
      id
      base {
        HP
        Attack
        Defense
        Speed
      }
    }
  }
`;

const BASE_SPRITE_URL = (id: string) => {
  while (id.length < 3) {
    id = '0' + id;
  }
  return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/sprites/${id}MS.png?`;
};

interface Props {
  type: string;
  onSelect(pokemon: any): void;
}

export const PokemonSearchByType = ({ type, onSelect }: Props) => {
  const { loading, error, data } = useQuery(POKEMON_SEARCH_BY_TYPE, {
    variables: { type }
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error :(</p>;
  }

  const pokemon: any[] = data.pokemonByType;

  return (
    <Table>
      <TableHead>
        <TableRow head>
          <TableHeadCell disabled>-</TableHeadCell>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Types</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>HP</TableHeadCell>
          <TableHeadCell>Atk</TableHeadCell>
          <TableHeadCell>Def</TableHeadCell>
          <TableHeadCell>Spd</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {pokemon.map(chosenOne => (
          <TableRow key={chosenOne.name + '-name'} onClick={() => onSelect(chosenOne)}>
            <TableDataCell>
              <img src={BASE_SPRITE_URL(chosenOne.id)} />{' '}
            </TableDataCell>
            <TableDataCell>{chosenOne.id}</TableDataCell>
            <TableDataCell style={{ textAlign: 'center' }}>{chosenOne.type.join(' ')}</TableDataCell>
            <TableDataCell>{chosenOne.name}</TableDataCell>
            <TableDataCell>{chosenOne.base.HP}</TableDataCell>
            <TableDataCell>{chosenOne.base.Attack}</TableDataCell>
            <TableDataCell>{chosenOne.base.Defense}</TableDataCell>
            <TableDataCell>{chosenOne.base.Speed}</TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
