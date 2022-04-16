import styled from 'styled-components'

const StyledContainer = styled.main`
  margin-top: ${props => props.theme.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  width: ${props => `calc(${props.theme.mainWidth} - 2px)`};
  height: ${props => `calc(100vh - ${props.theme.headerHeight} - ${props.theme.footerHeight})`}
`

const ContentContainer = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>
}

export default ContentContainer
