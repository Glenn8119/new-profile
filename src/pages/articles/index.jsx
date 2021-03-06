import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad, fadeIn } from '../../animation'
import articleBackground from '../../images/backgrounds/article-background.png'
import { StyledBackground } from '../../styledComponents/background'
import articleData from './articleData'
import Article from './Article'

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

const ArticlesContainer = styled.div`
	padding: 1rem 3rem;
	width: 100%;
	overflow: scroll;
	opacity: 0;
	animation: ${fadeIn} .4s 1s forwards;
`

const Articles = () => {
	const article = articleData.map((article, index) => {
		const { title, time, date, preview, link, id } = article
		const isLastIndex = articleData.length - 1 === index
		return (
			<Article
				key={id}
				title={title}
				time={time}
				date={date}
				preview={preview}
				link={link}
				isLastIndex={isLastIndex}
			/>
		)
	})

	return (
		<>
			<ParticlesComponent />
			<ContentContainer>
				<ArticleSection>
					<StyledBackground src={articleBackground} />
					<ArticlesContainer>{article}</ArticlesContainer>
				</ArticleSection>
			</ContentContainer>
		</>
	)
}

export default Articles
