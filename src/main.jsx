import ReactDOM from 'react-dom'
import IndexPage from './pages/IndexPage'
import GloablStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'

const App = () => {
	return (
		<>
			<GloablStyle />
			<ThemeProvider theme={theme}>
				<IndexPage />
			</ThemeProvider>
		</>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
