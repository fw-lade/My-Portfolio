import "./about.css"
import html from '../../img/html.png'
import css from '../../img/css.png'
import bootstrap from '../../img/bootstrap.png'
import tailwind from '../../img/tailwind.png'
import js from '../../img/js.png'
import about from '../../img/about.png'
import react from '../../img/react.png'
import python from '../../img/python.png'
import cpp from '../../img/c++.png'
import office from '../../img/ms-office.png'
import django from '../../img/django.png'
import { ThemeContext } from "../../context"
import { useContext } from "react"



const About = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='a'>
      <div className="a-left">
        <div  className="a-card bg"></div>
        <div className="a-card">
          <img src={about} alt="" className='a-img' />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Ololade.</p>
        <p className="a-desc">
          <p>I'm a Web Developer who has become increasingly skilled in Front-end Development. I'm also presently honing my Back-end development abilities.</p>
          <p>I use the following tech stacks for Front-end Development: HTML, CSS, Bootstrap, JavaScript, and React JS, and Python and Django for Back-end Development. </p>
          <p>I'm a Graduate from Caleb University with Bachelor of applied science degree in Computer Science.</p>
        </p>
        <div className="t-stack">
              <div className="t-s-right-wrapper">
                <h1>Skills</h1>
                <div className="card--stack">
                    <img src={html} alt="" /><p>HTML</p>
                </div>
                <div className="card--stack">
                    <img src={css} alt="" /><p>CSS</p>
                </div>
                <div className="card--stack">
                    <img src={bootstrap} alt="" /><p>Bootstrap</p>
                </div>
                <div className="card--stack">
                    <img src={tailwind} alt="" /><p>Tailwind</p>
                </div>
                <div className="card--stack">
                    <img src={js} alt="" />
                    <p>JavaScript</p>
                </div>
                <br></br>
                <div className="card--stack">
                    <img src={react} alt="" /><p>React JS</p>
                </div>
                <div className="card--stack">
                    <img src={python} alt="" /><p>Python</p>
                </div>
                <div className="card--stack">
                    <img src={cpp} alt="" /><p>C++</p>
                </div>
                <div className="card--stack">
                    <img src={django} alt="" /><p>Django</p>
                </div>
                <div className="card--stack">
                    <img src={office} alt="" /><p>MS Office</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About