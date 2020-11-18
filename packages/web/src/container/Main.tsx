import React, { useState } from 'react';
import { ChoosePokemonType } from '../components/ChoosePokemonType';
import { PokemonCard } from '../components/PokemonCard';
import { PokemonList } from '../components/PokemonList';
import { Primary } from '../components/Primary';
import { Flex, FlexCol } from '../styled/Flex';

export const Main = () => {
  const [type, setType] = useState('');
  const [iChooseYou, setChosenPokemon] = useState('');
  return (
    <Flex>
      <FlexCol>
        <Primary />
        <ChoosePokemonType onChange={(pokemonType: string) => setType(pokemonType)} />
      </FlexCol>
      <FlexCol>
        <PokemonCard pokemon={iChooseYou} />
      </FlexCol>
      <FlexCol>
        <PokemonList type={type} onSelect={(pokemon: any) => setChosenPokemon(pokemon)} />
      </FlexCol>
    </Flex>
  );
};
