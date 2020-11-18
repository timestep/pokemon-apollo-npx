import React from 'react';
import { Window, WindowContent, WindowHeader } from 'react95';

export const Primary = () => (
  <Window className="window">
    <WindowHeader className="window-header">
      <span>react95.exe</span>
    </WindowHeader>
    <WindowContent>
      <div>
        <h1>
          Welcome to your own <a href="http://localhost:8080/graphiql">GraphQL</a> web front end!
        </h1>
        <h2>You can start editing source code and see results immediately</h2>
      </div>
    </WindowContent>
  </Window>
);
