import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/images/logo.jpg'

const Sidebar = () => (
  <div className="navBar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="white"></FontAwesomeIcon>
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
