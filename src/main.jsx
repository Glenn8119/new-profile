import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import GloablStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import About from './pages/about'
import Articles from './pages/articles'
import Projects from './pages/projects'
import Skills from './pages/skills'

const App = () => {
	return (
		<>
			<GloablStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/skills' element={<Skills />} />
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
