import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const StyledFooter = styled.aside`
  width: ${(props) => (props.isHome ? '800px' : `${props.theme.asideWidth}`)};
  height: ${(props) => (props.isHome ? '600px' : '40%')};
  display: flex;
  flex-direction: ${(props) => (props.isHome ? 'row' : 'column')};
  align-items: center;
  flex-wrap: ${(props) => (props.isHome ? 'wrap' : 'nowrap')};
  position: fixed;
  top: ${props => props.isHome ? `calc((100% + ${props.theme.headerHeight})/2)` : '50%'};
  left: ${(props) => (props.isHome ? '50%' : '0')};
  transform: ${(props) =>
    props.isHome ? 'translate(-50%, -50%)' : 'translateY(-50%)'};
  transition-timing-function: linear;
  border-right: ${props => props.isHome ? 'none' : `2px solid rgba(${props.theme.textRgba}, .2)`};
  transition: all 0.4s,
  border-right 0.4s 0.4s;
  `

const StyledNavLink = styled.span`
  width: 50%;
  height: 30%;
  font-size: ${props => props.isHome ? '4rem' : '2rem'};
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    position: relative;
    background-size: 999%;
    background-position: 100% 100%;
    background-image: ${props => `linear-gradient(to right, ${props.theme.hoverText}, ${props.theme.text})`};
    background-clip: text;
    -webkit-background-clip: text;
    text-decoration: none;
    color: transparent;
    transition: all 0.2s, background-position .6s;
  }

  & > a::before {
    content: '';
    background: ${props => props.theme.hoverText};
    width: 0%;
    height: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all .4s;
  }

  & > a:hover::before {
    width: 100%;
  }

  & > a:hover {
    background-position: 0% 0%;
    transform: scale(1.5);
  }

  & > .active {
    background-position: 0% 0%;
    transform: scale(1.5);
  }

  & > .active::before {
    width: 100%;
  }
`

const pageList = ['about', 'skills', 'articles', 'projects']

const Aside = () => {
  const [isHome, setIsHome] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') setIsHome(true)
    else setIsHome(false)
  }, [location.pathname])

  const renderList = () => {
    return pageList.map((item, index) => {
      return (
        <StyledNavLink key={index} isHome={isHome}>
          <NavLink to={`/${item}`}>{item}</NavLink>
        </StyledNavLink>
      )
    })
  }

  if (location.pathname === '/index') return null
  else return <StyledFooter isHome={isHome}>{renderList()}</StyledFooter>
}

export default Aside
