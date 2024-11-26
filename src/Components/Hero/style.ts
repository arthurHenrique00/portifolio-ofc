import { styled } from 'styled-components'
import jim_root from '../../portfolio_img/jim_r.gif'
import { colors } from '../../styles'

export const HeroStyled = styled.div`
  background-image: url(${jim_root});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  padding: 120px;

  > img {
    border-radius: 50%;
    widht: 200px;
    height: 200px;
    border: 4px solid black;
  }

  h2 {
    animation-name: colors;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    padding: 32px;
  }

  @keyframes colors {
    0% {
      color: ${colors.gray};
    }
    25% {
      color: ${colors.red};
    }
    50% {
      color: ${colors.redTwo};
    }
    75% {
      color: ${colors.blue};
    }
    100% {
      color: ${colors.gray};
    }
  }
`
