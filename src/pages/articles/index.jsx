import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad } from '../../animation'
import articleBackground from '../../images/article-background.png'
import { StyledBackground } from '../../styledComponents/background'

const ArticleSection = styled.section`
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

const ArticleContainer = styled.div`
	margin-bottom: 3rem;
`

const Articles = () => {
	const article = (
		<ArticleContainer>
			<div>setState 令人又愛又恨的非同步行為</div>
			<div>2022/02/13</div>
			<div>閱讀時間: 5min</div>
		</ArticleContainer>
	)

	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<ArticleSection>
					<StyledBackground src={articleBackground} />
					{article}
				</ArticleSection>
			</ContentContainer>
		</>
	)
}

export default Articles
