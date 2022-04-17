import styled, { css } from 'styled-components'
import { fadeInLeft, pop } from '../../animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useLocation } from 'react-router-dom'

const StyledFooter = styled.footer`
	position: fixed;
	display: flex;
	bottom: 0;
	left: 0;
	align-items: center;
	height: ${(props) => props.theme.footerHeight};
	width: 100%;
  animation: ${fadeInLeft} 1.5s linear;
`

const StyledLine = styled.div`
	width: 85%;
	height: 100%;
  position: relative;

	&::before {
		display: block;
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		background-color: #b1b0b0;
		width: 100%;
		height: 1px;
	}

	&::after {
		display: block;
		content: '';
		position: absolute;
		top: 60%;
		left: 0;
		background-color: #b1b0b0;
		width: 90%;
		height: 1px;
	}
`

const IconList = styled.li`
	width: 15%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

  & > a:not(:last-child){
    margin-right: .6rem;
  }
`

const IconLink = styled.a`
  color: black;
  animation: ${props => css`${pop} 4s linear ${props.delay} infinite`};

	&:visited,
	&:active,
  &:focus {
		color: inherit;
	}
`

const Footer = () => {
	const location = useLocation()
	if (location.pathname === '/index') return null
	return (
		<StyledFooter>
			<StyledLine />
			<IconList>
				<IconLink delay='2s' href='https://www.facebook.com/profile.php?id=100002582555256'>
					<FontAwesomeIcon icon='fa-brands fa-facebook' size='2x' />
				</IconLink>
				<IconLink delay='2.2s' href='https://github.com/Glenn8119'>
					<FontAwesomeIcon icon='fa-brands fa-github' size='2x' />
				</IconLink>
				<IconLink delay='2.4s' href='https://www.linkedin.com/in/%E9%9F%8B%E5%BB%B7-%E9%99%B3-1b368020a/'>
					<FontAwesomeIcon icon='fa-brands fa-linkedin' size='2x' />
				</IconLink>
			</IconList>
		</StyledFooter>
	)
}

export default Footer
