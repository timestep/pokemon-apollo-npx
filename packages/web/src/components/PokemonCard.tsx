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
          <Fieldset label="Type">{pokemon.type.join(' ')}</Fieldset>
          <Fieldset label="HP">{pokemon.base.HP}</Fieldset>
        </Flex>
        <br />
        <Fieldset label="Image">
          <img src={BASE_IMAGE_URL(pokemon.id)} />
        </Fieldset>
        <br />
        <Fieldset label="Base Stats">
          <Flex>
            <Fieldset label="Atk">{pokemon.base.Attack}</Fieldset>
            <Fieldset label="Def">{pokemon.base.Defense}</Fieldset>
            <Fieldset label="Spd">{pokemon.base.Speed}</Fieldset>
          </Flex>
        </Fieldset>
      </WindowContent>
    </Window>
  );
};
