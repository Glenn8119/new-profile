import { useState } from 'react'
import ContentContainer from '../../components/ContentContainer'
import ParticlesComponent from '../../components/Particles'
import styled from 'styled-components'
import { expnad, fadeIn } from '../../animation'
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

const InnerSection = styled.div`
	opacity: 0;
  animation: ${fadeIn} 0.4s 1s forwards;
`

const DiscriptionContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProjectName = styled.h2`
  min-height: 45px;
  font-size: 2rem;
  margin-bottom: 3rem;
`

const MainContent = styled.main`
  height: 100%;
  display: flex;
  justify-content: start;
`

const ProjectPic = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin-right: auto;
  box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
  cursor: pointer;
`

const DescriptionArea = styled.div`
  width: 400px;
  height: 50%;
  margin-bottom: auto;
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
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
  cursor: pointer;
  transition: all 0.2s;

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
  background: ${(props) => props.theme.body};
  box-shadow: ${(props) => `0 4px 16px 0 ${props.theme.shadow}`};
  cursor: pointer;
  transition: all 0.2s;

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
  {
    name: '高鐵秘書',
    pic: timeTable,
    desctiption:
      'SPA with React Router, and carousel, RWD with pure CSS. With API from PTX, you can simulate the process of booking high speed rail tickets, it records what you’ve booked via local storage and calculates the time left of the next rail.',
    tools: 'HTML, CSS, Reactjs, Redux',
    link: 'https://vigilant-fermi-c2ee21.netlify.app/#/'
  },
  {
    name: 'Todo-List',
    pic: todoList,
    desctiption:
      'It provides two days of todo-list, using OOP with vanilla Javascript and lets users to be able to modify, delete todos by dragging todo elements.',
    tools: 'HTML, CSS, Javascript',
    link: 'https://fervent-varahamihira-2f4c2e.netlify.app/'
  },
  {
    name: 'Recipe',
    pic: recipe,
    desctiption:
      'It achieves search autocomplete by sending request to outer API, with debounce to the input to lower the frequency of sending requests.',
    tools: 'HTML, CSS, Bootstrap, Reactjs',
    link: 'https://practical-pare-ecba46.netlify.app/'
  }
]

const handleLink = (link) => {
  window.open(link)
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const handleNextClick = () => {
    if (currentIndex < projectData.length - 1) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const blocks = projectData.map((project, idx) => {
    return (
      <div style={{ display: `${currentIndex === idx ? 'block' : 'none'}` }}>
        <ProjectName>{project.name}</ProjectName>
        <MainContent>
          <ProjectPic
            src={project.pic}
            onClick={() => handleLink(project.link)}
          />
          <DiscriptionContainer>
            <DescriptionArea>
              <DescriptionTitle>Description</DescriptionTitle>
              <p style={{ fontSize: '1.5rem' }}>{project.desctiption}</p>
            </DescriptionArea>
            <SkillArea>
              <SkillTitle>Tools</SkillTitle>
              <p>{project.tools}</p>
            </SkillArea>
          </DiscriptionContainer>
        </MainContent>
      </div>
    )
  })

  return (
    <>
      <ParticlesComponent />
      <ContentContainer>
        <ProjectsSection>
          <InnerSection>
            <PrevButton onClick={handlePrevClick} />
            <StyledBackground src={projectsBackground} />
            {blocks}
            <NextButton onClick={handleNextClick} />
          </InnerSection>
        </ProjectsSection>
      </ContentContainer>
    </>
  )
}

export default Projects
