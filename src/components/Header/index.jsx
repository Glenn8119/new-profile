import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  height: ${props => props.theme.marginHeight};
	display: flex;
  position: fixed;
  top: 0;
  left: 0;
`

const Header = () => {
	const location = useLocation()

	if (location.pathname === '/') return null
	else
		return (
			<NavContainer>
				<NavLink to='/about'>about</NavLink>
				<NavLink to='/skills'>skills</NavLink>
				<NavLink to='/articles'>articles</NavLink>
				<NavLink to='/projects'>projects</NavLink>
			</NavContainer>
		)
}

export default Header
