import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad } from '../../animation'
import articleBackground from '../../images/article-background.png'
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
`

const Articles = () => {
	const article = articleData.map((article) => {
		const { title, time, date, preview, link, id } = article

		return (
			<Article
				key={id}
				title={title}
				time={time}
				date={date}
				preview={preview}
				link={link}
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
