import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faRectangleList,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
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
      <NavLink
        exact="true"
        activeclassname="active"
        className="aboutLink"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="white"></FontAwesomeIcon>
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contactLink"
        to="/"
      >
        <FontAwesomeIcon icon={faEnvelope} color="white"></FontAwesomeIcon>
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/idrisdrouiche/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="white" />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          className="github"
          href="https://github.com/IdrisDrouiche"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          target="_blank"
          className="resume"
          href="../../assets/images/idris_drouiche_CV.pdf"
          download="idris_drouiche_CV.pdf"
        >
          <FontAwesomeIcon icon={faRectangleList} color="white" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
