import styled from 'styled-components'
import { keyframes, css } from 'styled-components'
import { fadeOut } from '../animation'

const backgroundAnimtaion = keyframes`
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
`

const StyledHint = styled.h1`
	margin-bottom: 1rem;
	font-size: 1.5rem;
	letter-spacing: 0.4rem;

	background-clip: text;
	-webkit-background-clip: text;
	background-position: left;
	background-image: ${(props) =>
		`linear-gradient(to right, ${props.theme.body}, grey)`};
	background-size: 500%;
	color: transparent;
	animation: ${css`3s ${backgroundAnimtaion} infinite`};
  animation: ${(props) =>
		props.isEnd ? css`.6s ${fadeOut} ease-out .4s forwards` : ''};
`

const Hint = ({ isEnd }) => {
	return <StyledHint isEnd={isEnd}>滑動解鎖</StyledHint>
}

export default Hint
