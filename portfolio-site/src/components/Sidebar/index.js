import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg'

const Sidebar = () => (
  <div className="navBar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
  </div>
)

export default Sidebar
