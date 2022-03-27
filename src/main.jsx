import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/home'
import GloablStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/about'

const App = () => {
	return (
		<>
			<GloablStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path='/' element={<IndexPage />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</ThemeProvider>
		</>
	)
}

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.querySelector('#root')
)
