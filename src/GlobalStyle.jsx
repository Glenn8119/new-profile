import { createGlobalStyle } from 'styled-components';

const GloablStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }
`
export default GloablStyle