import { HeroStyled } from './style'
import github from '../../portfolio_img/github.png'
import GlassButton from '../GlassButton'

const Hero = () => (
  <HeroStyled>
    <img src="https://github.com/arthurHenrique00.png" />
    <h2>Meu Portfólio</h2>
    <GlassButton
      href="https://github.com/arthurHenrique00"
      target="_blank"
      rel="noreferrer"
    >
      <img src={github} /> Github Link
    </GlassButton>
  </HeroStyled>
)

export default Hero
