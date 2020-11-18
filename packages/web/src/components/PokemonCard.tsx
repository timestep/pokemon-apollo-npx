import React from 'react';
import { Fieldset, Window, WindowContent, WindowHeader } from 'react95';
import { Flex } from '../styled/Flex';

interface Props {
  pokemon: any;
}

const BASE_IMAGE_URL = (id: string) => {
  while (id.length < 3) {
    id = '0' + id;
  }
  return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${id}.png`;
};

export const PokemonCard = ({ pokemon }: Props) => {
  if (!pokemon) {
    return null;
  }
  return (
    <Window className="window">
      <WindowHeader className="window-header">
        <span>{pokemon.name}</span>
      </WindowHeader>
      <WindowContent>
        <Flex>
          <Fieldset label="ID">{pokemon.id}</Fieldset>
          <Fieldset label="HP">{pokemon.base.HP}</Fieldset>
        </Flex>
        <br/>
        <Fieldset label="Image">
          <img src={BASE_IMAGE_URL(pokemon.id)} />
        </Fieldset>
      </WindowContent>
    </Window>
  );
};
