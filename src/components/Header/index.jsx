import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { css } from 'styled-components'
import { jumpUP } from '../../animation'

const HeaderContainer = styled.nav`
	width: 100%;
	height: ${(props) => props.theme.headerHeight};
	display: flex;
	position: fixed;
	justify-content: center;
	align-items: flex-end;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	font-size: 2.5rem;
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	background-color: ${(props) => `rgba(${props.theme.textRgba}, .7)`};
	z-index: 2;
`

const AnimatedSpan = styled.span`
	color: ${(props) => props.theme.body};
	animation: ${(props) => css`.5s ${jumpUP} ease-in ${props.index / 10}s`};
	min-width: 10px;
`

const Header = () => {
	const location = useLocation()
	const headerContentArr = "Glenn's  profolio".split('')

	const renderContent = () =>
		headerContentArr.map((item, index) => {
			return (
				<AnimatedSpan key={index} index={index}>
					{item}
				</AnimatedSpan>
			)
		})

	if (location.pathname === '/index') return null
	else return <HeaderContainer>{renderContent()}</HeaderContainer>
}

export default Header
