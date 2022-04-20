import styled from 'styled-components'
import { css } from 'styled-components'
import { fadeOut, backgroundAnimtaion } from '../../../animation'

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
	return <StyledHint isEnd={isEnd}>緩慢滑動解鎖</StyledHint>
}

export default Hint
