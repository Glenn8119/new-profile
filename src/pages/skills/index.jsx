import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import skillBackground from '../../images/skill-background.png'
import { expnad } from '../../animation'

const SkillSection = styled.section`
	position: relative;
	width: 2%;
	height: 85%;
	max-width: 900px;
	border-radius: 1rem;
	box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
	background-color: ${(props) => props.theme.body};
	background-size: cover;
	animation: ${expnad} 1s forwards;
	transform-origin: bottom;
	transition: width 1s 1s;
`

const StyledBackground = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.05;
	object-fit: cover;
`

const LogoCard = styled.li`
	width: 250px;
	height: 300px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Logo = styled.img`
	width: 100%;
	margin-bottom: 1rem;
`

const logoList = [
	{ name: 'Html', id: 1 },
	{ name: 'Css', id: 2 },
	{ name: 'Javascript', id: 3 },
	{ name: 'Typescript', id: 4 },
	{ name: 'Sass', id: 5 },
	{ name: 'Tailwind', id: 6 },
	{ name: 'React', id: 7 },
	{ name: 'Nextjs', id: 8 },
	{ name: 'Redux/Toolkit', id: 9 },
	{ name: 'Vue', id: 10 },
]

const Skills = () => {
	// const renderLogoList = logoList.map((logo) => {
	// 	return (
	// 		<LogoCard>
	// 			<Logo src={required('../../images/react')} />
	// 		</LogoCard>
	// 	)
	// })

	// console.log(require('../../../images/logos/react.svg'))

	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<SkillSection>
					<StyledBackground src={skillBackground} />
					<LogoCard>
						{/* <img src={require('../../../images/logos/react.svg')} alt="logo" /> */}
					</LogoCard>
				</SkillSection>
			</ContentContainer>
		</>
	)
}

export default Skills
