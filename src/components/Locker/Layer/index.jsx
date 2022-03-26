import styled from 'styled-components'

const StyledLayer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: ${props => `translate(-50%, -50%) scale(${props.isLayerShow ? '1' : '0'})`};
  width: 3000px;
  height: 3000px;
  border-radius: 99999px;
  background-color: ${props => props.backgroundColor};
  transition: all 1s;
`

const Layer = ({ isLayerShow, backgroundColor }) => {
  return <StyledLayer backgroundColor={backgroundColor} isLayerShow={isLayerShow}/>
}

export default Layer