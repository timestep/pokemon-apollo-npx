import React from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';
import { PokemonTypes } from '../queries/PokemonTypes';

interface Props {
  onChange(type: string): void;
}

export const ChoosePokemonType = ({ onChange }: Props) => (
  <Window className="window">
    <WindowHeader className="window-header">
      <span>Choose Pokemon Type</span>
    </WindowHeader>
    <WindowContent>
      <PokemonTypes onChange={onChange} />
    </WindowContent>
  </Window>
);
