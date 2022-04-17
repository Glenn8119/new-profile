import styled from 'styled-components'

const ArticleContainer = styled.div`
	margin-bottom: 1rem;
`

const Title = styled.div`
	font-size: 1.8rem;
	margin-bottom: 0.5rem;
	font-weight: bold;
	opacity: 0.7;
`

const Divider = styled.div`
	width: 100%;
	height: 100%;
	height: 1px;
	margin: 1rem 0;
	background-color: lightgray;
`


const handleOpen = (link) => {
	window.open(link)
}

const Article = ({ title, time, date, preview, link, isLastIndex }) => {
	return (
		<>
			<ArticleContainer>
				<Title>
					<span onClick={() => handleOpen(link)} style={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
						{title}
					</span>
				</Title>
				<div
					style={{ fontWeight: 'bold', marginBottom: '1rem', opacity: '0.6' }}
				>
					<span style={{ marginRight: '1rem' }}>{date}</span>
					<span>閱讀時間: {time}min</span>
				</div>
				<div style={{ display: 'flex', opacity: '.6' }}>
					<p style={{ marginRight: '2rem' }}>{preview}</p>
					<span
						onClick={() => handleOpen(link)}
						style={{
							color: 'orangered',
							fontWeight: 'bold',
							cursor: 'pointer',
						}}
					>
						繼續閱讀
					</span>
				</div>
				{!isLastIndex ? <Divider /> : null}
			</ArticleContainer>
		</>
	)
}

export default Article
