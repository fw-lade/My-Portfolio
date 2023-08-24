import { useContext } from "react"
import { ThemeContext } from "../../context"
import "./product.css"

const Product = ({img, link}) => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{border: darkMode && '2px solid #949298'}} className="p">
      <div style={{backgroundColor: darkMode && '#333'}} className="p-browser">
        <div style={{backgroundColor: darkMode && '#949298'}} className="p-circle"></div>
        <div style={{backgroundColor: darkMode && '#949298'}} className="p-circle"></div>
        <div style={{backgroundColor: darkMode && '#949298'}} className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" >
      <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default Product