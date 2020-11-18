import React from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';

export const Primary = () => (
  <Window className="window">
    <WindowHeader className="window-header">
      <span>pokedex.exe</span>
    </WindowHeader>
    <WindowContent>
      <div>
        <h1> Welcome to the Pokedex! </h1>
        <h2>You can start by selecting the Pokemon Type below</h2>
      </div>
    </WindowContent>
  </Window>
);
