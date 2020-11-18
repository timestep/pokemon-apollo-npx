import React from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import { PokemonSearchByType } from '../queries/PokemonSearchByType';

interface Props {
  type: string;
  onSelect(pokemon: any): void;
}

export const PokemonList = ({ type, onSelect }: Props) => (
  <Window className="window">
    <WindowHeader className="window-header">
      <span>Choose Pokemon Type</span>
    </WindowHeader>
    <WindowContent>
      <PokemonSearchByType type={type} onSelect={onSelect} />
    </WindowContent>
  </Window>
);
