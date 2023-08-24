import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./intro.css"

const Intro = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Bello Ololade Enoch</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end Developer</div>
              <div className="i-title-item">Back-end Developer</div>
              <div className="i-title-item">Programmer</div>
              <div className="i-title-item">Graduate</div>
            </div>
          </div>
          <p className="i-desc">Web Developer || Computer Science Graduate from Caleb University, Lagos.</p>
          <div className="i-socials">
            <a href="https://github.com/fw-lade" target='_blank'><i style={{color: darkMode && '#fff'}} class="fa fa-github github icon"></i></a>
            <a href="https://www.linkedin.com/in/bello-ololade-85b033233/" target='_blank'><i style={{color: darkMode && '#fff'}} class="fa fa-linkedin linkedin-icon"></i></a>
            <a href="https://instagram.com/lollypizzle_?igshid=YmMyMTA2M2Y=" target='_blank'><i style={{color: darkMode && '#fff'}} className="fa fa-instagram instagram-icon"></i></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
      
      </div>
    </div>
  )
}

export default Intro