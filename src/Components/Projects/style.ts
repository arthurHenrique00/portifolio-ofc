import styled from 'styled-components'
import craig_j from '../../portfolio_img/craig_j.gif'

export const ProjectsStyled = styled.div`
  background-image: url(${craig_j});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px;
  text-align: center;
  display: grid;
  grid-template-columns: 350px 350px;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h2 {
    margin-bottom: 12px;
  }

  .project-item {
    color: white;
    margin-bottom: 30px;
  }
`
