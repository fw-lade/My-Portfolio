import "./toggle.css"
import Light from "../../img/light.png"
import Dark from "../../img/dark.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
  }

  return (
    <div className="t" style={{backgroundColor : darkMode && '#222'}}>
      <img src={Light} alt="" className="t-icon" />
      <img src={Dark} alt="" className="t-icon" />
      <div className="t-button" onClick={handleClick} style={{left : theme.state.darkMode ? 0 : 25}}></div>
    </div>
  )
}

export default Toggle