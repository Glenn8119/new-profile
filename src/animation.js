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

export const pop = keyframes`
0% {
  transform: scale(1);
}
5% {
  transform: scale(1.2);
}
10% {
  transform: scale(1);
}
100% {
  transform: scale(1);
}
`

export const expnad = keyframes`
0% {
  transform: scale(0);
}
50% {
  transform: scale(1);
  width: 2%;
}
100% {
  width: 95%;
}
`