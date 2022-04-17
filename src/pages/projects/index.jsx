import { useState } from 'react'
import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad } from '../../animation'
import { StyledBackground } from '../../styledComponents/background'
import projectsBackground from '../../images/backgrounds/projects-background.png'
import timeTable from '../../images/projects/timetable.png'
import todoList from '../../images/projects/todo-list.png'
import recipe from '../../images/projects/recipe.png'

const ProjectsSection = styled.section`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	position: relative;
	width: 2%;
	height: 85%;
	max-width: 900px;
	border-radius: 1rem;
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	background-color: ${(props) => props.theme.body};
	animation: ${expnad} 1s forwards;
	transform-origin: bottom;
	padding: 2rem;
`

const DiscriptionContainer = styled.div`
	width: 400px;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: start;
`

const ProjectName = styled.h2`
	font-size: 2rem;
	margin-bottom: 1rem;
`

const MainContent = styled.main`
	height: 100%;
	display: flex;
	justify-content: start;
`

const ProjectPic = styled.img`
	width: 400px;
	height: 400px;
	object-fit: cover;
	object-position: center;
	margin-right: auto;
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
`

const DescriptionArea = styled.div`
	width: 400px;
	height: 50%;
`

const DescriptionTitle = styled.h2`
	font-size: 2rem;
	font-weight: bold;
`

const SkillArea = styled.h2`
	height: auto;
`

const SkillTitle = styled.div`
	font-size: 2rem;
	font-weight: bold;
`

const PrevButton = styled.div`
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	left: -1rem;
	transform: translate(-50%, -50%);
	border-radius: 999px;
	background: ${props => props.theme.body};
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	cursor: pointer;
	transition: all .2s;

	&::before {
		display: block;
		content: '<';
		font-size: 2rem;
		color: gray;
	}

	&:hover {
		transform: translate(-50%, -50%) scale(1.5);
	}
`

const NextButton = styled.div`
	width: 3rem;
	height: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	right: -4rem;
	transform: translate(-50%, -50%);
	border-radius: 999px;
	background: ${props => props.theme.body};
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	cursor: pointer;
	transition: all .2s;

	&::before {
		display: block;
		content: '>';
		font-size: 2rem;
		color: gray;
	}

	&:hover {
		transform: translate(-50%, -50%) scale(1.5);
	}
`

const projectData = [
	{ name: '高鐵秘書', pic: timeTable, desctiption: '很高鐵的秘書', tools: 'CSS', link: 'https://vigilant-fermi-c2ee21.netlify.app/#/'},
	{ name: 'Todo-List', pic: todoList, desctiption: '很todo的list', tools: 'ddraggg', link: 'https://vigilant-fermi-c2ee21.netlify.app/#/'},
	{ name: 'Recipe', pic: recipe, desctiption: '很re的cipe', tools: 'apaiiiapi', link: 'https://vigilant-fermi-c2ee21.netlify.app/#/'},
]

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handlePrevClick = () => {
		if (currentIndex > 0) {
			setCurrentIndex(prevState => prevState - 1)
		}
	}

	const handleNextClick = () => {
		if (currentIndex < projectData.length - 1) {
			setCurrentIndex(prevState => prevState + 1)
		}
	}

	const currentProject = projectData[currentIndex]

	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<ProjectsSection>
					<PrevButton onClick={handlePrevClick}/>
					<StyledBackground src={projectsBackground} />
					<ProjectName>{currentProject.name}</ProjectName>
					<MainContent>
						<ProjectPic src={currentProject.pic} />
						<DiscriptionContainer>
							<DescriptionArea>
								<DescriptionTitle>Description</DescriptionTitle>
								<p>{currentProject.desctiption}</p>
							</DescriptionArea>
							<SkillArea>
								<SkillTitle>Tools</SkillTitle>
								<p>{currentProject.tools}</p>
							</SkillArea>
						</DiscriptionContainer>
					</MainContent>
					<NextButton onClick={handleNextClick}/>
				</ProjectsSection>
			</ContentContainer>
		</>
	)
}

export default Projects
