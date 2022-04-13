import styled from 'styled-components'
import { fadeInLeft } from '../Locker/animation'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${props => props.theme.footerHeight};
  animation: ${fadeInLeft} 1s linear;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top:50%;
    left: 0;
    background-color: grey;
    width: 80%;
    height: 1px;
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    top:60%;
    left: 0;
    background-color: grey;
    width: 75%;
    height: 1px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>

    </StyledFooter> 
  )
}

export default Footer
