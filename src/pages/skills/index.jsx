import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import skillBackground from '../../images/skill-background.png'
import { expnad } from '../../animation'
import react from '../../images/logos/react.svg'
import css from '../../images/logos/css.svg'
import html from '../../images/logos/html.svg'
import javascript from '../../images/logos/javascript.svg'
import sass from '../../images/logos/sass.svg'
import bootstrap from '../../images/logos/bootstrap.png'
import next from '../../images/logos/next.png'
import tailwind from '../../images/logos/tailwind.png'
import typescript from '../../images/logos/typescript.png'
import vue from '../../images/logos/vue.png'
import redux from '../../images/logos/redux.png'
import { StyledBackground } from '../../styledComponents/background'

const SkillSection = styled.section`
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

const GridContainer = styled.div`
	width: 800px;
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
`

const LogoCard = styled.div`
	width: calc((800px - 2rem) / 3);
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Logo = styled.img`
	width: 120px;
	margin-bottom: 1rem;
`

const logoList = [
	{ name: 'Html', id: 1, path: html },
	{ name: 'Css', id: 2, path: css },
	{ name: 'Javascript', id: 3, path: javascript },
	{ name: 'Typescript', id: 4, path: typescript },
	{ name: 'Sass', id: 5, path: sass },
	{ name: 'Bootstrap', id: 6, path: bootstrap },
	{ name: 'Tailwind', id: 7, path: tailwind },
	{ name: 'React', id: 8, path: react },
	{ name: 'Nextjs', id: 9, path: next },
	{ name: 'Redux/Toolkit', id: 10, path: redux },
	{ name: 'Vue', id: 11, path: vue },
]

const Skills = () => {
	const renderLogoList = logoList.map((logo) => {
		return (
			<LogoCard key={logo.id}>
				<div
					style={{
						width: 150,
						height: 150,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Logo src={logo.path} />
				</div>
				<p style={{ fontSize: '2rem' }}>{logo.name}</p>
			</LogoCard>
		)
	})

	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<SkillSection>
					<StyledBackground src={skillBackground} />
					<div style={{ overflow: 'scroll', width: '100%', padding: '0 50px' }}>
						<GridContainer>{renderLogoList}</GridContainer>
					</div>
				</SkillSection>
			</ContentContainer>
		</>
	)
}

export default Skills
