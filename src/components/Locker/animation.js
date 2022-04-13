import { keyframes } from 'styled-components'

export const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50%);
  }
`

export const backgroundAnimtaion = keyframes`
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

export const jumpUP = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-40%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const fadeInLeft = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(0);
}
`