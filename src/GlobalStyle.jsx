import { createGlobalStyle } from 'styled-components';

const GloablStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #FCF6F4;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }
`
export default GloablStyle