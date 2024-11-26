import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { ProjectsStyled } from './style'
import GlassButton from '../GlassButton'
import github from '../../portfolio_img/github.png'
import vercel from '../../portfolio_img/vercel.png'
import grunt from '../../portfolio_img/grunt.png'
import gulp from '../../portfolio_img/gulp.png'

const Projects = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ProjectsStyled>
      <div className="project-item">
        <h2>Signature World</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/signature-world"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton href="https://signature-world.vercel.app" target="_blank">
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>BloodBorne Site</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/bloodborne"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton href="https://bloodborne-rosy.vercel.app" target="_blank">
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Amazon Prime Clone</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/amazon-prime-cloning"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton
          href="https://amazon-prime-cloning.vercel.app"
          target="_blank"
        >
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Github Busca</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/github-profile-search"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton
          href="https://github-profile-search-ten-murex.vercel.app"
          target="_blank"
        >
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Invincible</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/invincible"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton href="https://invincible-nine.vercel.app" target="_blank">
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Loja de Games</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/eplay"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton href="https://eplay-black-mu.vercel.app" target="_blank">
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Restaurante</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/Efood-Ebac"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton
          href="https://efood-ebac-exercicio.vercel.app"
          target="_blank"
        >
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Gojira Site</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/gojira-site"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton href="https://gojira-site.vercel.app" target="_blank">
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Rick & Morty</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/Efood-Ebac"
          target="_blank"
        >
          <img src={github} />
          Github Link
        </GlassButton>
        <GlassButton
          href="https://rick-and-morty-gamma-eight.vercel.app"
          target="_blank"
        >
          <img src={vercel} />
          Vercel Link
        </GlassButton>
      </div>
      <div className="project-item">
        <h2>Grunt & Gulp</h2>
        <GlassButton
          href="https://github.com/arthurHenrique00/gulp-Compr"
          target="_blank"
        >
          <img src={gulp} />
          Gulp Link
        </GlassButton>
        <GlassButton
          href="https://github.com/arthurHenrique00/grunt-ex"
          target="_blank"
        >
          <img src={grunt} />
          Grunt Link
        </GlassButton>
      </div>
    </ProjectsStyled>
  )
}

export default Projects
