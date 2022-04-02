import Particles from "react-tsparticles"
import { options } from './options'

const ParticlesComponent = ({ isIndexPage }) => {
  return <Particles options={options(isIndexPage)} />
}

export default ParticlesComponent
