import styled from 'styled-components'

const StyledContainer = styled.main`
  margin-top: ${props => props.theme.headerHeight};
  position: fixed;
  right: 0;
  top: 0;
  width: ${props => `calc(${props.theme.mainWidth} - 2px)`};
`

const ContentContainer = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default ContentContainer
