import { injectGlobal } from 'emotion';

import { THEME } from './theme';

injectGlobal`
  html {
    font: 112.5%/1.5em 'georgia',serif;
  }

  body {
    background-color: ${THEME.backgroundColor};
  }
`;
