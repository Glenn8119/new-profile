import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad } from '../../animation'
import { StyledBackground } from '../../styledComponents/background'
import projectsBackground from '../../images/backgrounds/projects-background.png'

const ProjectsSection = styled.section`
	display: flex;
	justify-content: center;
	position: relative;
	width: 2%;
	height: 85%;
	max-width: 900px;
	border-radius: 1rem;
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	background-color: ${(props) => props.theme.body};
	animation: ${expnad} 1s forwards;
	transform-origin: bottom;
`

const Projects = () => {
	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<ProjectsSection>
					<StyledBackground src={projectsBackground}/>
					Projects
				</ProjectsSection>
			</ContentContainer>
		</>
	)
}

export default Projects
