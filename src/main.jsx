import ReactDOM from 'react-dom'
import { Route, Routes } from 'react-router-dom'
import GloablStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Index from './pages/index'
import Home from './pages/home'
import About from './pages/about'
import Articles from './pages/articles'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Aside from './components/Aside'
import Footer from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faFacebook, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faFacebook, faGithub, faFontAwesome)

const App = () => {
	return (
		<>
			<GloablStyle />
			<ThemeProvider theme={theme}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/index' element={<Index />} />
					<Route path='/about' element={<About />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/skills' element={<Skills />} />
				</Routes>
				<Aside />
				<Footer />
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
