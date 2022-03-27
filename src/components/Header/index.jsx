import { useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()

  if (location.pathname === '/') return null
  else return <header>Header!!</header>
}

export default Header
