import styled from 'styled-components'
import Locker from '../Locker'

const CoverContainer = styled.div`
  background-color: ${props => props.theme.darkBody};
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Cover = () => {
  return (
    <CoverContainer>
      <Locker />
    </CoverContainer>
  )
}

export default Cover
