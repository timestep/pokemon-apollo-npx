import * as React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset } from 'react95';
// tslint:disable-next-line:no-submodule-imports
import original from 'react95/dist/themes/original';
import { Main } from './container/Main';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: teal;
  }
  ${styleReset}
`;

const App = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Main />
    </ThemeProvider>
  </>
);

export default App;
