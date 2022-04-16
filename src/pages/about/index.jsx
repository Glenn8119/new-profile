import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import selfie from '../../images/selfie.jpeg'
import { fadeInDown, fadeInUp } from '../../animation'

const AboutSection = styled.section`
	width: 100%;
	padding: 2rem;
	height: 80%;
`

const AboutContent = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
`

const SelfieImg = styled.img`
	width: 13rem;
	height: 13rem;
	border-radius: 999px;
	border: 3px solid rgba(255, 69, 0, 0.6);
	margin-right: 3rem;
  animation: ${fadeInUp} .4s linear;
`

const IntroduceParagraph = styled.p`
	width: 50%;
	font-size: 1.5rem;
	margin-left: 1rem;
  animation: ${fadeInDown} .4s linear;
`

const About = () => {
	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<AboutSection>
					<AboutContent>
						<SelfieImg src={selfie} alt='selfie' />
						<IntroduceParagraph>
							Hi, I'm Glenn! I majored in psychology, and after that I found I'm
							more interested in coding. That's the reason why I started to
							learn coding by myself, and it helps me imporve my problem solving
							skills!
							<br />
							I like learning and always am willing to accept new things. Hope I can work with you soon!
						</IntroduceParagraph>
					</AboutContent>
				</AboutSection>
			</ContentContainer>
		</>
	)
}

export default About
